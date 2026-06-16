import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_API_URL}/api/blog/posts/`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const foundPost = data.find(
          (p) => p.id === parseInt(id)
        );
        if (!foundPost) {
          setError("Blog post not found");
        } else {
          setPost(foundPost);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Blog post fetch error:", err);
        setError("Failed to load the article. Please try again later.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <>
        <Helmet>
          <title>The Dental Gallery | Loading Article...</title>
          <meta name="description" content="Loading dental article from The Dental Gallery blog." />
        </Helmet>
        <div style={loadingStateStyle}>
          <div style={spinnerStyle} />
          <h2 style={loadingTextStyle}>Loading Article...</h2>
        </div>
      </>
    );
  }

  if (error || !post) {
    return (
      <>
        <Helmet>
          <title>The Dental Gallery | Article Not Found</title>
          <meta name="description" content="The requested dental article could not be found. Please check back later for new content." />
        </Helmet>
        <div style={errorContainerStyle}>
          <h2 style={errorHeadingStyle}>Article Not Found</h2>
          <p style={errorTextStyle}>{error || "The blog post you're looking for doesn't exist or has been moved."}</p>
          <a href="/blog" style={backButtonStyle}>← Back to Blog</a>
        </div>
      </>
    );
  }

  // Strip HTML tags for meta description (first 160 characters)
  const stripHtml = (html) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };
  
  const plainTextContent = stripHtml(post.content || "");
  const metaDescription = plainTextContent.substring(0, 160);
  const imageUrl = post.featured_image?.startsWith("http")
    ? post.featured_image
    :  `${import.meta.env.VITE_API_URL}${post.featured_image}`;

  return (
    <>
      <Helmet>
        <title>The Dental Gallery | {post.title} - Dental Insights</title>
        <meta name="description" content={metaDescription || post.excerpt || "Read this detailed dental article from The Dental Gallery's clinical specialists."} />
        <meta name="keywords" content={`${post.title}, dental blog, oral health, restorative dentistry, The Dental Gallery, Nairobi dentist`} />
        <meta property="og:title" content={`The Dental Gallery | ${post.title}`} />
        <meta property="og:description" content={metaDescription || post.excerpt || "Read this detailed dental article from our clinical specialists."} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://thedentalgallery.com/blog/${post.id}`} />
        {post.featured_image && <meta property="og:image" content={imageUrl} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={metaDescription || post.excerpt} />
        {post.featured_image && <meta name="twitter:image" content={imageUrl} />}
      </Helmet>

      <div style={pageWrapperStyle}>
        <article style={articleContainerStyle}>
          
          {/* Featured Image */}
          {post.featured_image && (
            <div style={imageWrapperStyle}>
              <img
                src={imageUrl}
                alt={post.title}
                style={featuredImageStyle}
              />
            </div>
          )}

          {/* Article Header */}
          <div style={articleHeaderStyle}>
            <span style={categoryBadgeStyle}>Clinical Journal</span>
            <h1 style={titleStyle}>{post.title}</h1>
            <div style={metaInfoStyle}>
              <time style={dateStyle}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </time>
              <span style={dividerStyle}>|</span>
              <span style={readTimeStyle}>Estimated reading time: {Math.ceil((post.content?.length || 0) / 1000)} min</span>
            </div>
            <div style={decorativeDividerStyle} />
          </div>

          {/* Article Content */}
          <div 
            style={contentStyle}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Back to Blog Link */}
          <div style={backLinkContainerStyle}>
            <a href="/blog" style={backLinkStyle}>
              ← Back to all articles
            </a>
          </div>

        </article>
      </div>
    </>
  );
}

// --- STYLES ---

const pageWrapperStyle = {
  background: "#ffffff",
  color: "#0f2038",
  fontFamily: "Arial, sans-serif",
  minHeight: "100vh",
  padding: "120px 20px 80px 20px"
};

const articleContainerStyle = {
  maxWidth: "850px",
  margin: "0 auto",
  background: "#ffffff",
  borderRadius: "16px"
};

const imageWrapperStyle = {
  width: "100%",
  marginBottom: "40px",
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 20px 40px rgba(15, 32, 56, 0.1)"
};

const featuredImageStyle = {
  width: "100%",
  maxHeight: "480px",
  objectFit: "cover",
  display: "block"
};

const articleHeaderStyle = {
  marginBottom: "40px",
  textAlign: "center"
};

const categoryBadgeStyle = {
  display: "inline-block",
  color: "#D4AF37",
  fontSize: "11px",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "3px",
  marginBottom: "20px"
};

const titleStyle = {
  fontSize: "42px",
  color: "#0f2038",
  fontWeight: "bold",
  margin: "0 0 20px 0",
  letterSpacing: "-0.5px",
  lineHeight: "1.2"
};

const metaInfoStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "12px",
  alignItems: "center",
  marginBottom: "25px",
  color: "#64748b",
  fontSize: "14px"
};

const dateStyle = {
  color: "#64748b"
};

const dividerStyle = {
  color: "#cbd5e1"
};

const readTimeStyle = {
  color: "#64748b"
};

const decorativeDividerStyle = {
  width: "50px",
  height: "3px",
  background: "#D4AF37",
  margin: "0 auto"
};

const contentStyle = {
  lineHeight: "1.9",
  fontSize: "17px",
  color: "#334155",
  marginTop: "30px"
};

const backLinkContainerStyle = {
  marginTop: "60px",
  paddingTop: "30px",
  borderTop: "1px solid #e2e8f0",
  textAlign: "center"
};

const backLinkStyle = {
  color: "#D4AF37",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "15px",
  transition: "color 0.2s ease"
};

// --- LOADING STYLES ---

const loadingStateStyle = {
  textAlign: "center",
  padding: "140px 20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: "#ffffff",
  minHeight: "50vh"
};

const loadingTextStyle = {
  color: "#0f2038",
  fontSize: "20px",
  fontWeight: "600",
  margin: "20px 0 0 0"
};

const spinnerStyle = {
  width: "40px",
  height: "40px",
  border: "3px solid #f1f5f9",
  borderTop: "3px solid #D4AF37",
  borderRadius: "50%",
  animation: "spin 1s linear infinite"
};

// --- ERROR STYLES ---

const errorContainerStyle = {
  textAlign: "center",
  padding: "140px 20px",
  background: "#ffffff",
  minHeight: "50vh"
};

const errorHeadingStyle = {
  color: "#0f2038",
  fontSize: "32px",
  fontWeight: "bold",
  marginBottom: "16px"
};

const errorTextStyle = {
  color: "#64748b",
  fontSize: "16px",
  marginBottom: "30px"
};

const backButtonStyle = {
  display: "inline-block",
  padding: "12px 24px",
  background: "#D4AF37",
  color: "#0f2038",
  textDecoration: "none",
  borderRadius: "6px",
  fontWeight: "bold",
  transition: "all 0.2s ease"
};

// Add this to your global CSS or inject it
const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);