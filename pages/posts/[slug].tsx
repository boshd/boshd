import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/Container";
import PostBody from "../../components/PostBody";
// import Header from '../../components/header'
import PostHeader from "../../components/PostHeader";
import Layout from "../../components/Layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/PostTitle";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import PostType from "../../models/post";
import Link from "next/link";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

const Post = ({ post, morePosts, preview }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout narrow={false} title={""}>
      <Container>
        {/* <Header /> */}
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{post.title} | a note.</title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <div className="pb-4 text-orange-400">
                ←{" "}
                <Link href="/">
                  <a>back</a>
                </Link>
              </div>
              <PostHeader title={post.title} coverImage={post.coverImage} date={post.date} author={post.author} />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, ["title", "category", "date", "slug", "author", "content", "ogImage", "coverImage"]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
