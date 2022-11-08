import remarkMath from "remark-math";
import { unified } from "unified";
import remarkRehype from "remark-rehype";
import remarkParse from "remark-parse";
import rehypeStringify from "rehype-stringify";
import rehypeMathjax from "rehype-mathjax";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeRaw from "rehype-raw";

export default async function markdownToHtml(markdown: any) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeRaw)
    .use(rehypeStringify)
    .use(remarkMath)
    .use(rehypeMathjax, {

    })
    .use(rehypePrettyCode, {
      // Use one of Shiki's packaged themes
      theme: "one-dark-pro",
      // Or your own JSON theme
      // theme: JSON.parse(fs.readFileSync(require.resolve("./themes/dark.json"), "utf-8")),
      onVisitLine(node) {
        // Prevent lines from collapsing in `display: grid` mode, and
        // allow empty lines to be copy/pasted
        if (node.children.length === 0) {
          node.children = [{ type: "text", value: " " }];
        }
      },
      // Feel free to add classNames that suit your docs
      onVisitHighlightedLine(node) {
        node.properties.className.push("highlighted");
        // node.properties.className.push("text-sm")
      },
      onVisitHighlightedWord(node) {
        node.properties.className = ["word"];
      },
    })
    .process(markdown);

  return result.toString();
}
