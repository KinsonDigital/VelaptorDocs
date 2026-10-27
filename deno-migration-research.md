# Research: Converting VelaptorDocs from Node.js to Deno

> **Date:** March 2025  
> **Status:** Research / Feasibility Assessment

---

## Table of Contents

- [Executive Summary](#executive-summary)
- [Current Architecture](#current-architecture)
- [Feasibility Assessment](#feasibility-assessment)
- [Known Blockers and Workarounds](#known-blockers-and-workarounds)
- [Step-by-Step Migration Plan](#step-by-step-migration-plan)
- [Files That Would Need Changes](#files-that-would-need-changes)
- [Risk Assessment](#risk-assessment)
- [Recommendations](#recommendations)
- [References](#references)

---

## Executive Summary

**Can we convert VelaptorDocs from Node.js to Deno?** The short answer is **partially yes, with caveats**.

The VelaptorDocs project already uses a **hybrid architecture** where Deno handles all CI/CD scripts and developer tooling, while Node.js/pnpm handles only the Docusaurus website build and dev server. Converting means eliminating Node.js/pnpm as a dependency for Docusaurus operations.

**Key Findings:**
- ✅ Deno 2.x has strong npm/Node.js compatibility and can manage `package.json` dependencies via `deno install`
- ✅ Deno can replace pnpm as the package manager (using `deno install` to populate `node_modules`)
- ✅ Deno's `deno task` can wrap Docusaurus CLI commands
- ⚠️ Docusaurus uses Webpack internally, which defaults to the `md4` hash algorithm — **not supported by Deno** (workaround exists)
- ⚠️ Some Node.js APIs used by Docusaurus/Webpack are not yet fully implemented in Deno (`FileHandle.stat()`, some `require()` patterns)
- ⚠️ Docusaurus does **not** officially support Deno — this is experimental territory
- ❌ Image processing in Docusaurus may produce warnings under Deno due to missing `FileHandle.stat()`

**Bottom line:** A migration is achievable for development and CI/CD workflows with some workarounds, but should be considered **experimental** until Deno and Docusaurus officially resolve remaining compatibility gaps.

---

## Current Architecture

The project currently uses **two runtimes** side by side:

| Component | Runtime | Package Manager | Purpose |
|---|---|---|---|
| Docusaurus website | Node.js (≥18.0) | pnpm | Build, dev server, deployment |
| CI/CD automation | Deno | JSR (deno.json) | Release scripts, doc generation, tooling |
| Dev scripts | Deno | JSR (deno.json) | PR creation, NuGet packaging |
| Dev tools | Deno | JSR (deno.json) | Branch/PR management |

### Key Files in Current Setup

| File | Role |
|---|---|
| `package.json` | Node.js dependencies + npm scripts (Docusaurus commands) |
| `pnpm-lock.yaml` | pnpm lockfile |
| `deno.json` | Deno config, tasks, JSR imports (CI/CD only) |
| `deno.lock` | Deno lockfile |
| `babel.config.js` | Babel preset for Docusaurus |
| `docusaurus.config.ts` | Docusaurus site configuration |
| `tsconfig.json` | TypeScript configuration for editor experience |
| `plugins/tailwind-config.cjs` | Tailwind PostCSS plugin (CommonJS) |

### Node.js/pnpm Touchpoints

These are the specific places where Node.js/pnpm is currently required:

1. **`package.json` scripts:** `dev`, `build`, `serve`, `swizzle`, `typecheck`, `clean`, `reinstall-deps`
2. **GitHub Workflows using Node/pnpm:**
   - `build-docs-status-check.yml` — `npx docusaurus build`
   - `build-docs-fork-status-check.yml` — `pnpm exec docusaurus build`
   - `api-release.yml` — `pnpm install`, `pnpm docusaurus docs:version`, `pnpm docusaurus build`
   - `prod-release.yml` — `pnpm install`, `pnpm docusaurus build`
3. **CommonJS `require()` calls:**
   - `docusaurus.config.ts` lines 46, 55: `require.resolve('./sidebars.js')`, `require.resolve('./src/css/custom.css')`
   - `babel.config.js` line 2: `require.resolve('@docusaurus/core/lib/babel/preset')`
   - `plugins/tailwind-config.cjs` line 6: `require("@tailwindcss/postcss")`
4. **`engines` field** in `package.json`: `"node": ">=18.0"`

---

## Feasibility Assessment

### What Deno 2.x Can Do Today

| Capability | Status | Notes |
|---|---|---|
| Read and use `package.json` | ✅ Supported | Deno natively reads `package.json` for dependencies |
| Install npm dependencies | ✅ Supported | `deno install` replaces `pnpm install` / `npm install` |
| Create `node_modules` | ✅ Supported | Set `"nodeModulesDir": true` in `deno.json` |
| Run npm package CLIs | ✅ Supported | `deno run -A npm:@docusaurus/core` or via `deno task` |
| Task runner (replacing npm scripts) | ✅ Supported | `deno task` reads from both `deno.json` and `package.json` |
| Hard-link based installs (like pnpm) | ✅ Supported | Deno uses hard links for efficient storage |
| CommonJS `require()` support | ⚠️ Partial | Works in `.cjs` files, but has edge cases |
| All Node.js crypto algorithms | ⚠️ Partial | **MD4 not supported** (Webpack needs it) |
| `FileHandle.stat()` | ❌ Not implemented | Causes image processing warnings |
| Full Webpack compatibility | ⚠️ Experimental | Works with hash function workaround |

### The MD4 Problem (Critical Blocker with Workaround)

Webpack 5 (used internally by Docusaurus) defaults to the `md4` hash algorithm for asset hashing. Deno's crypto API follows the Web Crypto standard and intentionally **does not support MD4** because it is a deprecated/insecure algorithm.

**Error:** `Error: Digest method not supported: md4`

**Workaround:** Override Webpack's hash function in the Docusaurus config using a custom plugin:

```typescript
// In docusaurus.config.ts plugins array
function webpackHashFix(context, options) {
    return {
        name: "webpack-hash-fix",
        configureWebpack(config, isServer, utils) {
            return {
                output: {
                    hashFunction: "sha256",
                },
            };
        },
    };
}
```

This is a safe change that works with both Node.js and Deno.

### The `require()` Problem

Deno supports `require()` in `.cjs` files and in some contexts, but not universally. The current codebase uses `require.resolve()` in the Docusaurus config and babel config.

**Workaround options:**
1. Keep files as `.cjs` (Deno respects CommonJS in `.cjs` files)
2. Convert `require.resolve()` calls to ESM `import` statements where possible
3. Use Deno's `--unstable-detect-cjs` flag if needed

---

## Known Blockers and Workarounds

| # | Blocker | Severity | Workaround | Status |
|---|---|---|---|---|
| 1 | MD4 hash not supported | 🔴 Critical | Override Webpack `hashFunction` to `sha256` | Workaround available |
| 2 | `FileHandle.stat()` not implemented | 🟡 Medium | Images show warnings but site still builds; tracked in [Deno #23301](https://github.com/denoland/deno/issues/23301) | Deno fix pending |
| 3 | `require()` in some contexts | 🟡 Medium | Use `.cjs` extensions; Deno supports CJS in `.cjs` files | Workaround available |
| 4 | Port detection false positive | 🟢 Low | Affects `deno task start` dev server only; accept alternate port | Cosmetic issue |
| 5 | Postinstall scripts not auto-run | 🟡 Medium | Use `deno install --allow-scripts` | Workaround available |
| 6 | No official Docusaurus support | 🟡 Medium | Community-driven; monitor [Deno #24589](https://github.com/denoland/deno/issues/24589) | In progress |

---

## Step-by-Step Migration Plan

### Phase 1: Update `deno.json` Configuration

Add `nodeModulesDir` and Docusaurus-related tasks to `deno.json`:

```jsonc
{
    "nodeModulesDir": "auto",
    "tasks": {
        // Existing Deno tasks...
        "build": "deno check ./.github/cicd/",
        "fmt": "deno fmt ./.github/cicd/",
        "lint": "deno lint ./.github/cicd/",
        // NEW: Docusaurus tasks
        "docs:install": "deno install --allow-scripts",
        "docs:dev": "deno run -A npm:@docusaurus/core start",
        "docs:build": "deno run -A npm:@docusaurus/core build",
        "docs:serve": "deno run -A npm:@docusaurus/core serve",
        "docs:swizzle": "deno run -A npm:@docusaurus/core swizzle",
        "docs:typecheck": "deno run -A npm:typescript/tsc",
        "docs:clear": "deno run -A npm:@docusaurus/core clear"
    }
}
```

### Phase 2: Fix Webpack MD4 Hash Issue

Add a custom Docusaurus plugin in `docusaurus.config.ts` to override the hash function:

```typescript
plugins: [
    tailwindPlugin,
    function webpackHashFix() {
        return {
            name: "webpack-hash-fix",
            configureWebpack() {
                return {
                    output: {
                        hashFunction: "sha256",
                    },
                };
            },
        };
    },
]
```

### Phase 3: Update `package.json`

Modify scripts to use Deno instead of pnpm/npx:

```json
{
    "scripts": {
        "docusaurus": "docusaurus",
        "dev": "deno install --allow-scripts && deno run -A npm:@docusaurus/core start",
        "build": "deno install --allow-scripts && deno run -A npm:@docusaurus/core build",
        "swizzle": "deno run -A npm:@docusaurus/core swizzle",
        "deploy": "deno run -A npm:@docusaurus/core deploy",
        "serve": "deno run -A npm:@docusaurus/core serve",
        "write-translations": "deno run -A npm:@docusaurus/core write-translations",
        "write-heading-ids": "deno run -A npm:@docusaurus/core write-heading-ids",
        "typecheck": "deno run -A npm:typescript/tsc",
        "clean": "deno run -A npm:@docusaurus/core clear && deno eval \"Deno.removeSync('./node_modules', { recursive: true });\"",
        "create-pr": "deno run -c ./deno.json --node-modules-dir=false -A jsr:@kinsondigital/sprocket@3.0.0 run-job ./dev-tools/sprocket-config.ts --job-name Create-PR"
    }
}
```

Remove the `preinstall` script (which enforces pnpm-only) and the `engines.node` field.

### Phase 4: Update GitHub Workflows

Replace Node.js and pnpm setup steps with Deno:

**Before (example from `build-docs-status-check.yml`):**
```yaml
- name: Setup Node
  uses: actions/setup-node@v4
  with:
    node-version: "20.x"

- name: Setup PNPM
  uses: pnpm/action-setup@v4
  with:
    version: latest

- name: Install Dependencies
  run: pnpm install

- name: Build Docusaurus Site
  run: npx docusaurus build
```

**After:**
```yaml
- name: Setup Deno
  uses: denoland/setup-deno@v2
  with:
    deno-version: v2.x

- name: Install Dependencies
  run: deno install --allow-scripts

- name: Build Docusaurus Site
  run: deno task docs:build
```

**Workflows requiring changes:**
1. `build-docs-status-check.yml` — Replace Node/pnpm with Deno
2. `build-docs-fork-status-check.yml` — Remove Node/pnpm steps (Deno already present)
3. `api-release.yml` — Replace pnpm commands with Deno equivalents
4. `prod-release.yml` — Replace pnpm commands with Deno equivalents

### Phase 5: Clean Up Obsolete Files

After confirming everything works:

1. **Delete** `pnpm-lock.yaml` (replaced by `deno.lock`)
2. **Update** `.gitignore` to remove pnpm-specific entries and add Deno-specific ones if needed
3. **Remove** the `"pnpm"` configuration block from `package.json`
4. **Remove** `"preinstall": "npx only-allow pnpm"` from `package.json`
5. **Remove** `"engines": { "node": ">=18.0" }` from `package.json`
6. **Update** `renovate.json` if dependency management approach changes

### Phase 6: Test and Validate

1. Run `deno install --allow-scripts` — verify dependencies install correctly
2. Run `deno task docs:build` — verify full site builds without errors
3. Run `deno task docs:dev` — verify dev server starts and site renders
4. Test all CI/CD workflows on a feature branch
5. Verify image processing (may have warnings but should still work)
6. Verify all existing Deno CI/CD scripts still work (they should be unaffected)

---

## Files That Would Need Changes

| File | Change Required |
|---|---|
| `deno.json` | Add `nodeModulesDir`, add Docusaurus tasks |
| `package.json` | Update scripts to use Deno, remove pnpm enforcement, remove node engine requirement |
| `docusaurus.config.ts` | Add webpack hash fix plugin |
| `.github/workflows/build-docs-status-check.yml` | Replace Node/pnpm with Deno |
| `.github/workflows/build-docs-fork-status-check.yml` | Remove Node/pnpm steps |
| `.github/workflows/api-release.yml` | Replace pnpm commands with Deno |
| `.github/workflows/prod-release.yml` | Replace pnpm commands with Deno |
| `.gitignore` | Update for Deno workflow |
| `pnpm-lock.yaml` | **Delete** (replaced by `deno.lock`) |
| `README.md` | Update setup instructions |

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Build failures due to Deno incompatibility | Medium | High | Keep Node.js as fallback; test thoroughly |
| Image processing warnings/failures | High | Low | Cosmetic warnings only; images still process |
| Future Docusaurus updates break Deno compat | Medium | Medium | Pin versions; monitor Deno/Docusaurus issues |
| Developer onboarding friction | Low | Medium | Document Deno requirements clearly |
| CI/CD workflow breakage | Medium | High | Test workflows on feature branch first |
| Third-party plugin incompatibility | Low | Medium | Test all plugins; have Node.js fallback |

---

## Recommendations

### Option A: Full Migration (Recommended for experimentation)

Proceed with all 6 phases above. This gives the project a single runtime (Deno) for everything. Accept that some features (image warnings) may have rough edges.

**Pros:** Single runtime, simplified tooling, aligned with existing Deno usage  
**Cons:** Experimental, potential build issues, no official Docusaurus support

### Option B: Hybrid Improvement (Recommended for production stability)

Keep Node.js for Docusaurus builds but use `deno install` as the package manager (replacing pnpm) and `deno task` as the task runner. Node.js would only be needed as the runtime for the actual Docusaurus CLI execution.

**Pros:** More stable, leverages Deno for package management, reduces pnpm dependency  
**Cons:** Still requires Node.js runtime, not a complete migration

### Option C: Wait and Watch (Most conservative)

Keep the current hybrid setup unchanged. Monitor:
- [Deno #24589](https://github.com/denoland/deno/issues/24589) — Docusaurus compatibility tracking
- [Deno #23301](https://github.com/denoland/deno/issues/23301) — FileHandle.stat() implementation
- [Deno #25646](https://github.com/denoland/deno/issues/25646) — MD4 digest tracking
- Docusaurus release notes for Deno support announcements

**Pros:** Zero risk, no changes needed  
**Cons:** Continues dual-runtime complexity

---

## References

- [Deno 2.0 Announcement](https://deno.com/blog/v2.0) — npm compatibility details
- [Deno 2.2 Release Notes](https://deno.com/blog/v2.2) — Latest compatibility improvements
- [Deno Node/npm Compatibility Guide](https://docs.deno.com/runtime/fundamentals/node/)
- [Deno Install CLI Reference](https://docs.deno.com/runtime/reference/cli/install/)
- [Deno Task Runner Reference](https://docs.deno.com/runtime/reference/cli/task/)
- [Deno Configuration Reference](https://docs.deno.com/runtime/fundamentals/configuration/)
- [Docusaurus Installation Requirements](https://docusaurus.io/docs/installation) — Node.js only officially
- [Deno Issue #24589: Docusaurus Compatibility](https://github.com/denoland/deno/issues/24589)
- [Deno Issue #23301: FileHandle.stat()](https://github.com/denoland/deno/issues/23301)
- [Deno Issue #25646: MD4 Digest](https://github.com/denoland/deno/issues/25646)
- [Deno Issue #19395: Docusaurus Support](https://github.com/denoland/deno/issues/19395)
