import { comps } from './components.ts';
import { markdown_parsing_config } from './env.ts';
import { type file, type md_parsing_options } from './types.ts';
import { utils } from './utils.ts'
import matter from 'gray-matter';

export namespace markdown {
    /**
    * when fed markdown with frontmatter, it'll use regex to split them and return markdown and frontmatter (respectively) separately. 
    */
    /*
    export function splitMarkdownFrontmatter(source: string): [string, string] {
        try {
            const frontmatter_regex = /---\s*[\s\S]*?\s*---/g;

            let clean_markdown = source.replace(frontmatter_regex, "").trim();
            let raw_frontmatter = source.replace(clean_markdown, "").trim();

            return [clean_markdown, raw_frontmatter];
        } catch (err) {
            throw new Error("error removing frontmatter from markdown" + err);
        }
    }
    useless cuz gray-matter
    */

    export function splitMarkdownFrontmatter(source: string): file {
        source = source.trim();
        let { data, content } = matter(source);

        let file = {
            content: content.trim(),
            metadata: data
        } as file;

        return file;
    }

    export function parseMarkdownString(
        markdown: string,
        options: md_parsing_options = markdown_parsing_config
    ): string {
        return Bun.markdown.render(markdown, {
            heading: (children, { level }) => {
                let offset = utils.clamp(level + options.heading_offset, 1, 6);
                return `<h${offset} class="title title-h${offset}">${children}</h${offset}>`;
            },
            // .:xXx:. :3
            image: (children, meta) => {
                if (!options.allowImages) {
                    return null;
                }
                meta = utils.trimObjectItems(meta);
                return `<img src="${meta.src}" ${meta.title ? `alt="${meta.title}"` : ''} />`;
            },
            code: (children, meta) => {
                return comps.codeBlock(children, meta?.language || "Unknown")
            },
            paragraph: (text) => {
                return `<p>${text}</p>`;
            },
        });
    }
}
