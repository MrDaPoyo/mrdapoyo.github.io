import { utils } from "./utils.ts";
import { readdir } from "node:fs/promises";

if (!process.env.SOURCE_DIR) {
    console.error("Missing SOURCE_DIR");
    process.exit(0);
}

interface directory {
    path: string; // relative path from "root" (./src/)
    sub_directories: []; // for recursion
    files: []; // markdown (.md) files
}

const root_dir = utils.findRootDir();

await utils.ensureDir(root_dir);
const files = await readdir(root_dir, { recursive: true });

console.log(files);