import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

export default function Dentist() {
  const [dentist, setDentist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageKey, setImageKey] = useState(Date.now());

  useEffect(() => {
    // Clear any cached image redirects
    if ('caches' in window) {
      caches.keys().then(names => {
        names.forEach(name => {
          caches.delete(name);
        });
      });
    }

    fetch(`${import.meta.env.VITE_API_URL}/api/dentist/?cb=${new Date().getTime()}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Server answered with status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("🔍 RAW API Response:", data);
        
        let dentistData;
        if (Array.isArray(data)) {
          dentistData = data[0];
        } else {
          dentistData = data;
        }
        
        console.log("👨‍⚕️ Dentist Data:", dentistData);
        console.log("🖼️ Profile Image Path:", dentistData.profile_image);
        console.log("📁 Full Image URL:", `${import.meta.env.VITE_API_URL}${dentistData.profile_image}`);
        
        setDentist(dentistData);
        setImageKey(Date.now());
        setLoading(false);
      })
      .catch((err) => {
        console.error("My fetch error details:", err);
        setLoading(false);
      });
  }, []);

  // Add CSS animation for spinner
  useEffect(() => {
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

  // 1. LOADING STATE
  if (loading) {
    return (
      <>
        <Helmet>
          <title>The Dental Gallery | Our Team - Clinical Leadership</title>
          <meta name="description" content="Meet our experienced lead dentist and clinical team at The Dental Gallery. Expert dental care in Lavington, Nairobi." />
        </Helmet>
        <div style={loadingStateStyle}>
          <div style={spinnerStyle} />
          <h2 style={loadingTextStyle}>Loading Clinical Profile...</h2>
        </div>
      </>
    );
  }

  // 2. ERROR / EMPTY STATE
  if (!dentist) {
    return (
      <>
        <Helmet>
          <title>The Dental Gallery | Our Team</title>
          <meta name="description" content="Meet our dental professionals at The Dental Gallery in Lavington, Nairobi." />
        </Helmet>
        <div style={loadingStateStyle}>
          <h2 style={loadingTextStyle}>Profile Temporarily Unavailable</h2>
          <p style={{ color: "#475569" }}>Please refresh or check back shortly.</p>
        </div>
      </>
    );
  }

  // Helper function to handle absolute pathing and bust browser asset caching
  const getImageUrl = (imagePath) => {
    if (!imagePath) return null;
    
    console.log("🔄 Processing image path:", imagePath);
    
    // Check if it's already a full URL
    if (imagePath.startsWith('http')) {
      console.log("✅ Already a full URL");
      return `${imagePath}?v=${imageKey}`;
    }
    
    // Remove any query parameters or fragments from the path
    const cleanPath = imagePath.split('?')[0].split('#')[0];
    console.log("🧹 Cleaned path:", cleanPath);
    
    const baseUri = `${import.meta.env.VITE_API_URL}${cleanPath}`;
    const finalUrl = `${baseUri}?v=${imageKey}`;
    
    console.log("📸 Final image URL:", finalUrl);
    return finalUrl;
  };

  const processedImageUrl = getImageUrl(dentist.profile_image);

  // 3. MAIN RENDER STATE
  return (
    <>
      <Helmet>
        <title>The Dental Gallery | Dr. {dentist.name?.split(' ')[0] || 'Lead'} {dentist.name?.split(' ')[1] || 'Dentist'} - Clinical Leadership</title>
        <meta name="description" content={`Meet ${dentist.name}, ${dentist.title || 'lead dentist'} at The Dental Gallery. Expert in ${dentist.experience?.substring(0, 100) || 'comprehensive dental care'}. Book your appointment today.`} />
        <meta name="keywords" content={`${dentist.name}, dentist Nairobi, dental clinic Lavington, ${dentist.title}, The Dental Gallery`} />
        <meta property="og:title" content={`The Dental Gallery | Dr. ${dentist.name} - Expert Dental Care`} />
        <meta property="og:description" content={`Learn about ${dentist.name}'s qualifications, experience, and approach to patient care.`} />
        {processedImageUrl && <meta property="og:image" content={processedImageUrl} />}
      </Helmet>

      <div style={pageWrapperStyle}>
        
        {/* SECTION HEADER */}
        <section style={headerSectionStyle}>
          <span style={goldLabelStyle}>Expertise & Leadership</span>
          <h1 style={mainHeadingStyle}>Clinical Leadership</h1>
          <p style={subHeadingStyle}>
            At The Dental Gallery, patient safety, quality assurance, and ethical clinical practice 
            are embedded within every single aspect of our care delivery.
          </p>
          <div style={decorativeDividerStyle} />
        </section>

        {/* PROFILE GRID LAYOUT */}
        <div style={profileFlexLayoutStyle}>
          
          {/* LEFT SIDE: Profile Image Bracket */}
          <div style={imageColumnStyle}>
            {processedImageUrl ? (
              <div style={imageFrameStyle}>
                <img
                  key={imageKey}
                  src={processedImageUrl}
                  alt={dentist.name || "Lead Dentist"}
                  style={profileImageStyle}
                  onError={(e) => {
                    console.error("❌ Image failed to load:", processedImageUrl);
                    console.log("💡 Current dentist data:", dentist);
                    e.target.style.display = 'none';
                    // Show fallback
                    const parent = e.target.parentElement;
                    parent.innerHTML = `
                      <div style="width:100%;height:450px;border-radius:8px;background:#f1f5f9;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#94a3b8;border:2px dashed #cbd5e1;">
                        <span style="font-size:50px;">🩺</span>
                        <span style="font-size:14px;margin-top:10px;font-weight:600;">Image Not Available</span>
                        <span style="font-size:12px;margin-top:5px;color:#64748b;">${dentist.profile_image}</span>
                      </div>
                    `;
                  }}
                />
              </div>
            ) : (
              <div style={fallbackImageFrameStyle}>
                <span style={{ fontSize: "50px" }}>🩺</span>
                <span style={{ fontSize: "14px", marginTop: "10px", fontWeight: "600" }}>No Image Uploaded</span>
              </div>
            )}
          </div>

          {/* RIGHT SIDE: Biography Details */}
          <div style={detailsColumnStyle}>
            <h2 style={dentistNameStyle}>{dentist.name || "No Name Configured"}</h2>
            <p style={dentistTitleStyle}>{dentist.title || "Clinical Professional"}</p>
            
            <p style={biographyParagraphStyle}>
              {dentist.bio || "Biography details pending configuration in the backend administration panel."}
            </p>

            {/* LOWER GRID: Academic & Professional Credentials */}
            <div style={credentialsGridStyle}>
              {dentist.education && (
                <div style={credentialBlockStyle}>
                  <h3 style={credentialHeadingStyle}>🎓 Education</h3>
                  <p style={credentialBodyStyle}>{dentist.education}</p>
                </div>
              )}

              {dentist.credentials && (
                <div style={credentialBlockStyle}>
                  <h3 style={credentialHeadingStyle}>📜 Area of interests</h3>
                  <p style={credentialBodyStyle}>{dentist.credentials}</p>
                </div>
              )}

              {dentist.memberships && (
                <div style={credentialBlockStyle}>
                  <h3 style={credentialHeadingStyle}>🤝 Memberships</h3>
                  <p style={credentialBodyStyle}>{dentist.memberships}</p>
                </div>
              )}

              {dentist.experience && (
                <div style={credentialBlockStyle}>
                  <h3 style={credentialHeadingStyle}>💼 Experience</h3>
                  <p style={credentialBodyStyle}>{dentist.experience}</p>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </>
  );
}

// --- ARCHITECTURAL STYLING THEMES ---

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
  marginBottom: "60px"
};

const goldLabelStyle = {
  color: "#D4AF37",
  fontSize: "12px",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "3px",
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
  maxWidth: "680px",
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

const profileFlexLayoutStyle = {
  display: "flex",
  gap: "60px",
  flexWrap: "wrap",
  alignItems: "flex-start",
  marginTop: "20px"
};

const imageColumnStyle = {
  flex: "1 1 350px",
  maxWidth: "400px",
  margin: "0 auto"
};

const imageFrameStyle = {
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 20px 40px rgba(15, 32, 56, 0.08)",
  border: "1px solid #edf2f7"
};

const profileImageStyle = {
  width: "100%",
  height: "auto",
  maxHeight: "500px",
  display: "block",
  objectFit: "cover"
};

const fallbackImageFrameStyle = {
  width: "100%",
  height: "450px",
  borderRadius: "8px",
  background: "#f1f5f9",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "#94a3b8",
  border: "2px dashed #cbd5e1"
};

const detailsColumnStyle = {
  flex: "2 1 500px"
};

const dentistNameStyle = {
  fontSize: "36px",
  color: "#0f2038",
  fontWeight: "bold",
  margin: "0 0 6px 0",
  letterSpacing: "-0.5px"
};

const dentistTitleStyle = {
  fontSize: "18px",
  color: "#D4AF37",
  fontWeight: "600",
  margin: "0 0 30px 0",
  letterSpacing: "0.5px"
};

const biographyParagraphStyle = {
  fontSize: "16px",
  lineHeight: "1.8",
  color: "#334155",
  whiteSpace: "pre-line",
  margin: "0 0 40px 0"
};

const credentialsGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "30px",
  borderTop: "1px solid #e2e8f0",
  paddingTop: "35px"
};

const credentialBlockStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "8px"
};

const credentialHeadingStyle = {
  color: "#0f2038",
  fontSize: "16px",
  fontWeight: "bold",
  margin: 0
};

const credentialBodyStyle = {
  color: "#475569",
  fontSize: "14px",
  lineHeight: "1.6",
  whiteSpace: "pre-line",
  margin: 0
};

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
  fontSize: "22px",
  fontWeight: "600",
  margin: "20px 0 0 0",
  fontFamily: "Arial, sans-serif"
};

const spinnerStyle = {
  width: "40px",
  height: "40px",
  border: "3px solid #f1f5f9",
  borderTop: "3px solid #D4AF37",
  borderRadius: "50%",
  animation: "spin 1s linear infinite"
};