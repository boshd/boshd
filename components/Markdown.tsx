import markdownStyles from './markdown-styles.module.css'

type Props = {
  content: string
}

const Markdown = ({ content }: Props) => {
  return (
    <div
    className={`${markdownStyles['markdown']} font-body`}
    dangerouslySetInnerHTML={{ __html: content}}
    />
  )
}

export default Markdown