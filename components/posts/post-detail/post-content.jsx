import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
const DUMMY_POSTS = {
  slug: "my-first-post",
  title: "My First Post",
  image: "post-1.png",
  date: "2024-09-09",
  content:
    "# Heading\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Officia, iure.",
};
function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POSTS.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POSTS.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
