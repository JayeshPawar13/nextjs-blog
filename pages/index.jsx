import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const DUMMY_POSTS = [
  {
    slug: "my-first-post",
    title: "My First Post",
    image: "post-1.png",
    date: "2024-09-09",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, iure.",
  },
  {
    slug: "my-second-post",
    title: "My Second Post",
    image: "post-2.png",
    date: "2024-09-09",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, iure.",
  },
  {
    slug: "my-third-post",
    title: "My Third Post",
    image: "post-3.png",
    date: "2024-09-09",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, iure.",
  },
];
function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}

export default HomePage;
