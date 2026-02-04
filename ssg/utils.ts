import { readdir, mkdir } from "node:fs/promises";
import { join, resolve } from "node:path";

export namespace utils {
    export function errorAndExit(err: string) {
        console.error(err);
        process.exit(0);
    }

    export function findRootDir(): string {
        const root_dir = resolve("..", process.env.SOURCE_DIR);
        return root_dir;
    }

    export function relativeFromRootDir(path: string): string {
        const relative_path = join(findRootDir(), path);
        return relative_path;
    }

    export async function ensureDir(dir: string) {
        try {
            await readdir(dir);
        } catch (_) {
            await mkdir(dir)
        }
    }
}

