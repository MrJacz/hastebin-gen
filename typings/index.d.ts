declare module "hastebin-gen" {
    export default function hastebin(input: string, options?: HasteBinOptions): Promise<string>;

    export type HasteBinOptions = {
        url?: string;
        extension?: string;
    };
}
