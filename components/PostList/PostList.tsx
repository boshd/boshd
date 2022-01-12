import Link from "next/link";
import Post from "../../models/post";

// const PostHeader = ({ posts } ) => {
const PostHeader = (props: { posts: Post[] }) => {
  // export default function PostList({ posts }: Post[]) {
  // if (posts === []) return null
  return (
    <div>
      {!props.posts && <div>No posts (yet)!</div>}
      <ul>
        {props.posts &&
          props.posts.map((post) => {
            return (
              <li key={post.slug} className="p-1">
                <Link href={{ pathname: `/posts/${post.slug}` }}>
                  <a className="underline hover:text-blue-400">{post.title}</a>
                  {/* <h4>{post.frontmatter.date}</h4> */}
                </Link>
				&#160;&#8212; <label className="text-gray-500">{post.excerpt}</label>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default PostHeader;
