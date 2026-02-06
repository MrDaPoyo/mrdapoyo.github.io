import path from "node:path";
import { utils } from "./utils";
import { readdir } from "node:fs/promises"
var pug = require('pug');

export namespace comps {
  /**
   * Returns all the templates in an array format that can be later retrieved using
   * utils.findInArray(templates, "component", <component name>);
   */
  export async function compileComponents() {
    let compiled_components = [] as any[];
    let template_dir = utils.relativeFromRootDir(Bun.env.TEMPLATE_DIR);
    const templates = await readdir(template_dir, { recursive: true });
    templates.forEach((template) => {
      let template_path = path.join(template_dir, template);
      compiled_components.push({
        file: template_path,
        component: path.parse(template).name,
        pug: pug.compileFile(template_path)
      })
    });
    return compiled_components;
  }

  export function codeBlock(template: any, code: string, language?: string): string {
    return template({
      code,
      utils
    })
  }
}