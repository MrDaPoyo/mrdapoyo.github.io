export type file_metadata = {
    date?: string,
    title?: string,
    tags?: string[],
    category: string,
    layout: string,
}

export type file = {
    content: string,
    metadata: file_metadata
}

/** 
 * options for parsing the markdown.
 * heading_offset: set a greater number to make the outputted HTML headers smaller. e.g: # isnt \<h1>, but \<h2>
 * allow(Item): enable conversion from markdown to (Item)s
 * autolinks: 
*/
export type md_parsing_options = {
    heading_offset: number,
    allowScripts: boolean,
    allowImages: boolean,
    autolinks: boolean,
}

/**
 * default values for type `md_parsing_options`
 * `...default_md_parsing_options`
 */
export const default_md_parsing_options = {
    heading_offset: 0,
    allowScripts: true,
    allowImages: true,
    autolinks: true,
}

export type directory = {
    path: string; // relative path from "root" (./src/)
    sub_directories: []; // for recursion
    files: []; // markdown (.md) files
}