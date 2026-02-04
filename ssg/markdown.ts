import { utils } from './utils.ts'
import type { file, file_metadata } from './types.ts';
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
        const { data, content } = matter(source);

        let file = {
            content: content,
            metadata: data
        } as file;
        
        return file;
    }

    export function parseMarkdownString(markdown: string): string {
        return Bun.markdown.html(markdown);
    }
}