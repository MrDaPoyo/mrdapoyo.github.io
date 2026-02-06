import path from "node:path";
import { utils } from "./utils.ts";
import { readdir, rm } from "node:fs/promises";
import { parseArgs } from "util";

const { values, positionals } = parseArgs({
    args: Bun.argv,
    options: {
        clr_out: {
            type: "boolean",
        },
    },
    strict: true,
    allowPositionals: true,
});

if (!process.env.SOURCE_DIR) {
    console.error("Missing SOURCE_DIR");
    process.exit(0);
}

const source_dir = utils.findRootDir();
const output_dir = path.join("..", Bun.env.OUTPUT_DIR);

if (!output_dir) {
    console.error("Missing OUTPUT_DIR");
    process.exit(0);
}

await utils.ensureDir(source_dir);
await utils.ensureDir(output_dir);

if (values.clr_out) {
    await rm(output_dir, { recursive: true });
    await utils.ensureDir(output_dir);
    console.log("Wiped output dir.")
}

const files = await readdir(source_dir, { recursive: true });

console.log(files);