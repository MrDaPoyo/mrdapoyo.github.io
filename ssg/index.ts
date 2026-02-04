import path from "node:path";
import { utils } from "./utils.ts";
import { readdir } from "node:fs/promises";

if (!process.env.SOURCE_DIR) {
    console.error("Missing SOURCE_DIR");
    process.exit(0);
}

const source_dir = utils.findRootDir();
const output_dir = path.join("..", process.env.OUTPUT_DIR);

if (!output_dir) {
    console.error("Missing OUTPUT_DIR");
    process.exit(0);
}

await utils.ensureDir(source_dir);
await utils.ensureDir(output_dir);

const files = await readdir(source_dir, { recursive: true });

console.log(files);