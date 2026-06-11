import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Add CSS animation for spinner
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/blog/posts/")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Blog fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <>
        <Helmet>
          <title>The Dental Gallery | Blog - Dental Insights & Clinical Guides</title>
          <meta name="description" content="Explore professional dental insights, advanced restorative guides, and preventive healthcare philosophies from our clinical specialists at The Dental Gallery." />
          <meta name="keywords" content="dental blog, oral health tips, restorative dentistry, preventive care, dental insights Nairobi, The Dental Gallery blog" />
        </Helmet>
        <div style={loadingStateStyle}>
          <div style={spinnerStyle} />
          <h2 style={loadingTextStyle}>Curating Editorial Articles...</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>The Dental Gallery | Blog - Expert Dental Insights & Clinical Guides</title>
        <meta name="description" content="Explore professional dental insights, advanced restorative guides, and preventive healthcare philosophies from our clinical specialists at The Dental Gallery in Lavington, Nairobi." />
        <meta name="keywords" content="dental blog, oral health tips, restorative dentistry, preventive care, dental insights, The Dental Gallery, Nairobi dentist blog" />
        <meta property="og:title" content="The Dental Gallery | Dental Blog - Expert Clinical Insights" />
        <meta property="og:description" content="Read our latest articles on dental health, advanced restorative techniques, and preventive care from our clinical specialists." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thedentalgallery.com/blog" />
        <meta property="og:image" content="/images/logo3.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div style={pageWrapperStyle}>
        
        {/* SECTION HEADER */}
        <section style={headerSectionStyle}>
          <span style={goldLabelStyle}>The Gallery Journals</span>
          <h1 style={mainHeadingStyle}>Dental Blog</h1>
          <p style={subHeadingStyle}>
            Explore professional insights, advanced restorative guides, and preventive healthcare 
            philosophies direct from our clinical specialists.
          </p>
          <div style={decorativeDividerStyle} />
        </section>

        {/* ARTICLES MAGAZINE MATRIX GRID */}
        {posts.length === 0 ? (
          <div style={{ textAlign: "center", padding: "40px 0", color: "#64748b" }}>
            <p>No journal entries found. Check back soon for fresh insights.</p>
          </div>
        ) : (
          <div style={blogGridStyle}>
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}

      </div>
    </>
  );
}

// --- SUB-COMPONENT: REUSABLE HOVER-ACTIVE BLOG CARD ---
function BlogCard({ post }) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    background: "#ffffff",
    borderRadius: "6px",
    overflow: "hidden",
    boxShadow: isHovered 
      ? "0 20px 40px rgba(15, 32, 56, 0.08)" 
      : "0 4px 20px rgba(0, 0, 0, 0.02)",
    border: "1px solid #edf2f7",
    transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
    transform: isHovered ? "translateY(-6px)" : "translateY(0)",
    display: "flex",
    flexDirection: "column"
  };

  const imageStyle = {
    width: "100%",
    height: "1000px",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
    transform: isHovered ? "scale(1.04)" : "scale(1)"
  };

  const ctaLinkStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    color: isHovered ? "#D4AF37" : "#0f2038",
    fontWeight: "bold",
    fontSize: "14px",
    textDecoration: "none",
    textTransform: "uppercase",
    letterSpacing: "1px",
    marginTop: "auto",
    paddingTop: "15px",
    transition: "color 0.2s ease"
  };

  // Safe checks for absolute paths vs appended internal media paths
  const imageUrl = post.featured_image?.startsWith("http")
    ? post.featured_image
    : `http://127.0.0.1:8000${post.featured_image}`;

  return (
    <article 
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {post.featured_image && (
        <div style={{ width: "100%", overflow: "hidden", position: "relative" }}>
          <img src={imageUrl} alt={post.title} style={imageStyle} />
        </div>
      )}

      <div style={{ padding: "30px", flex: 1, display: "flex", flexDirection: "column" }}>
        
        <time style={dateBadgeStyle}>
          {post.date ? new Date(post.date).toLocaleDateString('en-US', {
            month: 'long', day: 'numeric', year: 'numeric'
          }) : "Recent Journal"}
        </time>

        <h3 style={cardTitleStyle}>{post.title}</h3>

        <p style={excerptParagraphStyle}>
          {post.excerpt || "Read full details and specialized context from this clinical entry..."}
        </p>

        <Link to={`/blog/${post.id}`} style={ctaLinkStyle}>
          <span>Read Article</span>
          <span style={{ 
            transition: "transform 0.2s ease", 
            transform: isHovered ? "translateX(4px)" : "translateX(0)" 
          }}>
            →
          </span>
        </Link>

      </div>
    </article>
  );
}

// --- ARCHITECTURAL STYLE SPECIFICATIONS ---

const pageWrapperStyle = {
  background: "#ffffff",
  color: "#0f2038",
  fontFamily: "Arial, sans-serif",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "100px 20px 120px 20px"
};

const headerSectionStyle = {
  textAlign: "center",
  marginBottom: "70px"
};

const goldLabelStyle = {
  color: "#D4AF37",
  fontSize: "12px",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "4px",
  display: "inline-block",
  marginBottom: "12px"
};

const mainHeadingStyle = {
  fontSize: "42px",
  color: "#0f2038",
  fontWeight: "bold",
  margin: "0 0 20px 0",
  letterSpacing: "-0.5px"
};

const subHeadingStyle = {
  maxWidth: "650px",
  margin: "0 auto",
  color: "#475569",
  fontSize: "16px",
  lineHeight: "1.8"
};

const decorativeDividerStyle = {
  width: "40px",
  height: "3px",
  background: "#D4AF37",
  margin: "25px auto 0 auto"
};

const blogGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "35px"
};

const dateBadgeStyle = {
  fontSize: "12px",
  color: "#94a3b8",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "1px",
  display: "block",
  marginBottom: "12px"
};

const cardTitleStyle = {
  fontSize: "22px",
  color: "#0f2038",
  margin: "0 0 12px 0",
  lineHeight: "1.4",
  fontWeight: "bold",
  letterSpacing: "-0.3px"
};

const excerptParagraphStyle = {
  fontSize: "15px",
  lineHeight: "1.7",
  color: "#475569",
  margin: "0 0 25px 0"
};

// --- LOADING SPLASH ARTWORK STYLES ---

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
  width: "36px",
  height: "36px",
  border: "3px solid #f1f5f9",
  borderTop: "3px solid #D4AF37",
  borderRadius: "50%",
  animation: "spin 1s linear infinite"
};