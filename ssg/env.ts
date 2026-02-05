import { default_md_parsing_options, type md_parsing_options } from './types.ts';

declare module "bun" {
  interface Env {
    SOURCE_DIR: string;
    OUTPUT_DIR: string;
    TEMPLATE_DIR: string;
    MD_IMAGES: boolean;
    MD_SCRIPTS: boolean;
    MD_AUTOLINKS: boolean;
    COMP_HEADINGS: number;
  }
}

export const markdown_parsing_config = {
    ...default_md_parsing_options,
    // heading_offset: Bun.env.COMP_HEADINGS,
    // allowScripts: Bun.env.MD_SCRIPTS,
    // allowImages: Bun.env.MD_IMAGES,
    // autolinks: Bun.env.MD_AUTOLINKS,
} as md_parsing_options;