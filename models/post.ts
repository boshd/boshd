import Author from './author'

// export enum PostCategory {
//   thought,
//   note,
// }

type PostType = {
  slug: string
  category: string
  title: string
  date: string
  coverImage: string
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
}

export default PostType