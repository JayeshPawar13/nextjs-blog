import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";

const DUMMY_POSTS = [
  {
    slug: "my-first-post",
    title: "My First Post",
    image: "post-1.png",
    date: "2024-09-09",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, iure.",
  },
];
function HomePage(props) {
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta
          name="description"
          content="I post about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
