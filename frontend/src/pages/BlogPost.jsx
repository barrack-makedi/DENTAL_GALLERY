import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/blog/posts/")
      .then((res) => res.json())
      .then((data) => {
        const foundPost = data.find(
          (p) => p.id === parseInt(id)
        );
        setPost(foundPost);
      });
  }, [id]);

  if (!post) return <h2>Loading...</h2>;

  return (
  <div
    style={{
      maxWidth: "900px",
      margin: "auto",
      padding: "40px"
    }}
  >
    {post.featured_image && (
      <img
        src={`http://127.0.0.1:8000${post.featured_image}`}     
        alt={post.title}
        style={{
          width: "100%",
          maxHeight: "450px",
          objectFit: "cover",
          borderRadius: "12px"
        }}
      />
    )}

    <h1 style={{ marginTop: "20px" }}>
      {post.title}
    </h1>

    <p style={{ color: "gray" }}>
      {new Date(post.date).toDateString()}
    </p>

    <hr />

    <div
      style={{
        lineHeight: "1.9",
        fontSize: "18px",
        marginTop: "20px"
      }}
    >
      {post.content}
    </div>
  </div>
); }