import Avatar from '../Avatar'
import DateFormatter from '../DateFormatter'
import CoverImage from '../CoverImage'
import PostTitle from '../PostTitle'
import Author from '../../models/author'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <div className="">
        <PostTitle>{title}</PostTitle>
        {/* <div className="hidden md:block md:mb-12">
          <Avatar name={author.name} picture={author.picture} />
        </div> */}
        {
          coverImage!=null ?
            <div className="mb-8 md:mb-16 sm:mx-0">
              <CoverImage title={title} src={coverImage} />
            </div> :
          <div/>
        }

        {/* <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div> */}
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
        {/* <div className="mb-6 text-lg">
          ~2 min read
        </div> */}
      </div>
    </>
  )
}

export default PostHeader