import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  if (!Array.isArray(posts)) {
    // handle the case where posts is not an array
    return null;
  }

  return (
    <div className="posts">
      {posts.map((p, i) => (
        <Post post={p} key={i}/>
      ))}
    </div>
  );
}
