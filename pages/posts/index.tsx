// // import Container from '../components/container'
// // import MoreStories from '../components/more-stories'
// // import HeroPost from '../components/hero-post'
// // import Intro from '../components/intro'
// import Layout from "../../components/Layout";
// import { getAllPosts } from "../../lib/api";
// import Head from "next/head";
// import { CMS_NAME } from "../../lib/constants";
// import Post from "../../models/post";
// import HeroPost from "../../components/HeroPost";
// import Container from "../../components/Container";
// import PostList from "../../components/PostList";


// type Props = {
//   allPosts: Post[];
// };

// const Index = ({ allPosts }: Props) => {
//   const heroPost = allPosts[0];
//   const morePosts = allPosts.slice(1);
//   return (
//     <>
//       <Layout>
//         <Head>
//           <title></title>
//         </Head>
//         <Container>
//           <PostList posts={allPosts} />
//         </Container>
//       </Layout>
//     </>
//   );
// };

// export default Index;

// export const getStaticProps = async () => {
//   const allPosts = getAllPosts(["title", "date", "slug", "author", "coverImage", "excerpt"]);

//   return {
//     props: { allPosts },
//   };
// };
