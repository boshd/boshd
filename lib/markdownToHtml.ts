import remarkMath from 'remark-math'
import {unified} from 'unified'
import remarkRehype from 'remark-rehype'
import remarkParse from 'remark-parse'
import rehypeStringify from 'rehype-stringify'
import rehypeMathjax from 'rehype-mathjax'

export default async function markdownToHtml(markdown: any) {
  const result = await unified()
  .use(remarkRehype)
  .use(remarkParse)
  .use(rehypeStringify)
  .use(remarkMath)
  .use(rehypeMathjax)
  .process(markdown)

  return String(result)
}