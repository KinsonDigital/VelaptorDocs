<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD041 -->

<span align="center">

# 📃 Velaptor Documentation Website 📃

</span>

<span align="center">

[![Build PR Status Check](https://img.shields.io/github/actions/workflow/status/KinsonDigital/Velaptor/build-status-check.yml?label=%E2%9A%99%EF%B8%8FBuild)](https://github.com/KinsonDigital/Velaptor/actions/workflows/build-status-check.yml)
![Website Status](https://img.shields.io/website/https/docs.velaptor.io?label=Doc%20Site%20Status&up_message=Site%20Up🤘🏻&up_color=seagreen&down_message=Site%20Down🥺&down_color=indianred)

</span>

Hello!!  This repository is for the documentation website for [Velaptor](https://github.com/KinsonDigital/Velaptor) and contains Velaptor tutorials and API documentation.

<span align="center">

## **How to Contribute**

</span>

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.
Please refer to the original [Docusaurus Documentation](https://docusaurus.io/docs) to learn about how it works and how to get started.

Below are simple steps you will need when contributing.

1. Fork the repository
2. Create a feature branch with the syntax `feature/<issue-number>-<branch-description>`.
   - Example: feature/123-my-branch
   - Feature branches are created from `main` and are merged back into `main`.
3. Every issue has a pull request.  Make sure that it is ok to work on the issue by contacting a maintainer.
   - You can contact a maintainer in the comments of the issue and in [Discord](https://discord.gg/qewu6fNgv7).  Leaving a comment in the issue is a must so the maintainer can assign the issue to you.
4. Create pull request. Please use [Early Pull Requests](https://medium.com/practical-blend/pull-request-first-f6bb667a9b6)
    - The first commit should be an empty commit with the message of `Start work for issue #<issue-number>`.
    - Please create the pull request in draft. 😀
5. Perform your work.  Make sure to test locally!!
6. Take the PR out of draft which will request a review.  
    - Let a maintainer know that it is ready for review!

For detail information on contributing, please refer to [here](https://github.com/KinsonDigital/.github/blob/main/docs/CONTRIBUTING.md) for more information.

<span align="center">

## **Common Development Commands**

</span>

### **Install npm packages**

Use the command `pnpm i` or `pnpm install` to install all of the project's dependencies.

### **Local Development Server**

Use the command `pnpm start` to starts a local development server. Most changes are reflected HMR(Hot Module Replacement) without having to restart the server.

### **Build**

Use the command `pnpm build` to produce a production build of the site. This command puts the production build into the `build` directory and can be served using any static content hosting service.

### **Serve Build Locally**

Use the command `pnpm serve` to run a local server of the production version of the website.
