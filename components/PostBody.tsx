import Markdown from './Markdown'

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div className="w-full">
      <Markdown content={content}/>
    </div>

  )
}

export default PostBody