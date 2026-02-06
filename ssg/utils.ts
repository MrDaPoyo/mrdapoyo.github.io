import { readdir, mkdir } from "node:fs/promises";
import { join, resolve } from "node:path";

export namespace utils {
    export function errorAndExit(err: string) {
        console.error(err);
        process.exit(0);
    }

    export function findRootDir(): string {
        const root_dir = resolve("..", Bun.env.SOURCE_DIR);
        return root_dir;
    }

    export function relativeFromRootDir(path: string): string {
        const relative_path = resolve(findRootDir(), path);
        return relative_path;
    }

    export async function ensureDir(dir: string) {
        try {
            await readdir(dir);
        } catch (_) {
            await mkdir(dir)
        }
    }

    export function removeLinesFromString(source: string, init_line: number, end_line: number): string {
        var lines = source.split('\n');
        lines.splice(init_line, end_line);

        // join the array back into a single string
        var newtext = lines.join('\n');
        return newtext;
    }

    export function trimObjectItems(src_array: any) {
        for (const [k, v] of Object.entries(src_array)) {
            if (Object(v) === v)
                trimObjectItems(v)
            else if (typeof v === 'string')
                src_array[k] = v.trim();
        }
        return src_array;
    }

    export function clamp(integer: number, min: number, max: number) {
        return Math.min(Math.max(integer, min), max);
    };

    /**
     * https://stackoverflow.com/questions/10420352/converting-file-size-in-bytes-to-human-readable-string
     * 
     * Format bytes as human-readable text.
     * 
     * @param bytes Number of bytes.
     * @param si True to use metric (SI) units, aka powers of 1000. False to use
     * binary (IEC), aka powers of 1024.
     * @param dp Number of decimal places to display.
     *
     **/
    export function humanByteSize(bytes: number, si = false, dp = 1) {
        const thresh = si ? 1000 : 1024;

        if (Math.abs(bytes) < thresh) {
            return bytes + ' B';
        }

        const units = si
            ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
            : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
        let u = -1;
        const r = 10 ** dp;

        do {
            bytes /= thresh;
            ++u;
        } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);

        return bytes.toFixed(dp) + ' ' + units[u];
    }

    export function findInArray<T, K extends keyof T>(arr: readonly T[], key: K, value: T[K]): T | undefined {
        return arr.find(item => item[key] === value);
    }
}

