import { Utils } from "./Utils.ts";

export class HTMLService {
    private readonly linkTagRegEx: RegExp;
    
    constructor() {
        this.linkTagRegEx = /<a name='(.+)'><\/a>/;
    }

    public isHTMLLink(value: string): boolean {
        if (Utils.isNullOrEmpty(value)) {
            return false;
        }

        const matches = value.match(this.linkTagRegEx);

        return matches !== null && matches.length > 0;
    }

    public getNameAttrValue(linkTag: string): string {
        linkTag = linkTag.replace("<a name='", "");
        linkTag = linkTag.replace("'></a>", "");

        return linkTag;
    }

    public createLinkTag(nameValue: string): string {
        return `<a name='${nameValue}'></a>`;
    }
}