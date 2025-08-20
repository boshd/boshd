import Link from "next/link";
import PostList from "../components/PostList";
import { getAllPosts } from "../lib/api";
import Post from "../models/post";

type Props = {
  allPosts: Post[];
};

const Home = ({ allPosts }: Props) => {
  return (
    <>
      <h1 className="text-6xl md:text-6xl lg:text-7xl font-display leading-tight md:leading-none mb-6 text-center md:text-left">
        kareem arab
      </h1>
      <div className="font-body">
        <div className="text-center md:text-left lg:text-left xl:text-left">
        <label className="text-gray-500">
          engineering @{" "}
          <a className="text-blue-400" href="https://ada.cx" target={"_blank"} rel="noreferrer">
            ada
          </a>{" "}
        </label>
        <br />
        <label className="text-gray-500">
          building{" "}
          <a className="text-blue-400" href="https://withprincipal.com" target={"_blank"} rel="noreferrer">
            principal
          </a>{" "}
        </label>
        </div>


        <div className="pt-6 pb-6">
          <div className="w-full border-t border-gray-400" />
        </div>

        {allPosts && allPosts.length > 8}

        <div>
          <h1 className="text-1xl md:text-2xl lg:text-1xl tracking-tighter leading-tight md:leading-none mb-4 text-center md:text-left">
            Napkin notes
          </h1>
          <PostList posts={allPosts} />
        </div>
      </div>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["title", "category", "date", "slug", "author", "coverImage", "excerpt"]);

  return {
    props: { allPosts },
  };
};
