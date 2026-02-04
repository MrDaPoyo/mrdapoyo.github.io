declare module "bun" {
  interface Env {
    SOURCE_DIR: string;
    OUTPUT_DIR: string;
    MD_IMAGES: boolean;
    MD_SCRIPTS: boolean;
    MD_AUTOLINKS: boolean;
  }
}