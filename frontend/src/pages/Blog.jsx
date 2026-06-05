import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/blog/posts/")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
        maxWidth: "1000px",
        margin: "auto"
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Dental Blog
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px"
        }}
      >
        {posts.map((post) => (
         <div
  key={post.id}
  style={{
    border: "1px solid #ddd",
    borderRadius: "12px",
    overflow: "hidden",
    background: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  }}
>
  {post.featured_image && (
   
  <img
    src={`http://127.0.0.1:8000${post.featured_image}`}
    alt={post.title}
    style={{
      width: "100%",
      height: "200px",
      objectFit: "cover"
    }}
  />
)}


  <div style={{ padding: "20px" }}>
    <h3>{post.title}</h3>

    <small style={{ color: "gray" }}>
      {new Date(post.date).toDateString()}
    </small>

    <p style={{ marginTop: "10px" }}>
      {post.excerpt}
    </p>

    <Link to={`/blog/${post.id}`}>
      <button
        style={{
          marginTop: "10px",
          padding: "8px 12px",
          cursor: "pointer"
        }}
      >
        Read More
      </button>
    </Link>
  </div>
</div>
        ))}
      </div>
    </div>
  );
}