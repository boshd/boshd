import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Container from "../components/Container";
import Layout from "../components/Layout";
import PostList from "../components/PostList";
import { getAllPosts } from "../lib/api";
import Post from "../models/post";
import styles from "../styles/Home.module.css";

type Props = {
  allPosts: Post[];
};

const Home = ({ allPosts }: Props) => {
  return (
    <Layout narrow={false} title={"boshd"} >
      <h1 className="text-1xl md:text-2xl lg:text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-6 text-center md:text-left">
        kareem arab
      </h1>

      <label className="text-gray-500" >
        engineering @{" "}
        <a className="text-blue-400" href="https://amadeus.com" target={"_blank"} rel="noreferrer">
          amadeus
        </a>{" "}
      </label>
      <br />
      <label className="text-gray-500">
        building{" "}
        <a className="text-blue-400" href="https://t.co/Uv02Iv48XM" target={"_blank"} rel="noreferrer">
          handshake
        </a>
        ,{" "}
        <a target={"_blank"} rel="noreferrer" className="text-blue-400" href="https://rebrand.hyperscalefund.com/">
          hyperscale fund
        </a>
      </label>
      {/* <br /> */}
      {/* <label className="text-gray-500">
        side things: ios, infra, ml, web3, music
      </label> */}

      <div className="pt-6 pb-6">
        <hr className="text-gray-200" />
      </div>

      <div>
        <h1 className="text-1xl md:text-2xl lg:text-1xl tracking-tighter leading-tight md:leading-none mb-4 text-center md:text-left">
          notes
        </h1>
        {allPosts.forEach((post) => {
          <h1>{post.title}</h1>;
        })}
        <PostList posts={allPosts} />
      </div>

      {allPosts.filter((post) => post.category == "thought") !== []}

      {/* <div className="pt-8">
        <h1 className="text-1xl md:text-2xl lg:text-1xl tracking-tighter leading-tight md:leading-none mb-4 text-center md:text-left">
          miscellaneous thoughts
        </h1>

        <PostList posts={allPosts.filter((post) => post.category == "thought")} />
      </div> */}
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["title", "category", "date", "slug", "author", "coverImage", "excerpt"]);

  return {
    props: { allPosts },
  };
};
