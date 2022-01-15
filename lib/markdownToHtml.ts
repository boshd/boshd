import remarkMath from 'remark-math'
import {unified} from 'unified'
import remarkRehype from 'remark-rehype'
import remarkParse from 'remark-parse'
import rehypeStringify from 'rehype-stringify'
import rehypeMathjax from 'rehype-mathjax'

export default async function markdownToHtml(markdown: any) {
  const result = await unified()
  .use(remarkParse)
  .use(remarkRehype, null, {allowDangerousHtml: true})
  .use(rehypeStringify, {allowDangerousHtml: true})
  .use(remarkMath)
  .use(rehypeMathjax)
  .process(markdown)

  return result.toString()
}