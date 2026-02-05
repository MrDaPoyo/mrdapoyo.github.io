import { utils } from "./utils";
import { readdir } from "node:fs/promises"
var pug = require('pug');

export namespace comps {
  export async function compileComponents() {
    let compiledComponents = [] as any[];
    const templates = await readdir(Bun.env.TEMPLATE_DIR, { recursive: true });
    templates.forEach((template) => {
      compiledComponents.concat(pug.compileFile(template));
    })
  }

  export function codeBlock(code: string, language: string): string {
    const lines = code.split('\n').length;
    const size = utils.humanByteSize(code.length, false, 2)
    return `
<figure class="code-block" data-language="JavaScript">
  <figcaption>
    <span class="code-language">${language}</span>
    <span class="code-stats">${lines} lines - ${size}</span>
  </figcaption>

  <pre><code class="code-language-${language}">
${code}
  </code></pre>
</figure>
`}
}