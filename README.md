# personal-website

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

ssg mkay?

## specs
- root of the content is located at ./src/
    - templates are available per-directory and properties will be passed over to them in the form of `meta.(property)`
    - templates use pug
    - example:
        ```
        |-- src/
        |   |-- assets/
        |   |   |-- styles/
        |   |   |   |-- styles.css
        |   |   |   `-- colors.css
        |   |   `-- images/
        |   |       `-- image.png
        |   |-- templates/
        |   |   |-- paragraph.pug
        |   |   |-- bold.pug
        |   |   `-- image.pug
        |   `-- content/
        |       |-- index.pug
        |       `-- blog_posts/
        |           |-- index.pug
        |           |-- story_2.md
        |           `-- bahhhhhh.md
        `-- dist/
            |-- index.html
            |-- blog_posts/
            |   |-- index.html
            |   |-- story_2.html
            |   `-- bahhhhhh.html
            `-- assets/
                |-- styles/
                |   |-- styles.css
                |   `-- colors.css
                `-- images/
                    `-- image.png
        ```
- ssg itself is located at ./ssg/
- output is located at ./_dist/
