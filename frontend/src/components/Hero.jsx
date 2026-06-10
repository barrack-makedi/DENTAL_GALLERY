import React from 'react';
import { Link } from "react-router-dom";

// --- HOVER MICRO-INTERACTIONS ---
const handleGoldEnter = (e) => {
  e.target.style.transform = "translateY(-2px)";
  e.target.style.boxShadow = "0 8px 25px rgba(212, 175, 55, 0.4)";
  e.target.style.background = "#e5c158";
};

const handleGoldLeave = (e) => {
  e.target.style.transform = "translateY(0)";
  e.target.style.boxShadow = "0 4px 15px rgba(212, 175, 55, 0.2)";
  e.target.style.background = "#D4AF37";
};

const handleOutlineEnter = (e) => {
  e.target.style.transform = "translateY(-2px)";
  e.target.style.background = "#0f2038";
  e.target.style.color = "#ffffff";
};

const handleOutlineLeave = (e) => {
  e.target.style.transform = "translateY(0)";
  e.target.style.background = "transparent";
  e.target.style.color = "#0f2038";
};

export default function Hero() {
  return (
    <section style={heroContainerStyle}>
      
      {/* LEFT COLUMN: Visual Media Presentation */}
      <div style={leftMediaColumnStyle}>
        <div style={imageOverlayTintStyle} />
      </div>

      {/* RIGHT COLUMN: Editorial Content & Call-to-Actions */}
      <div style={rightContentColumnStyle}>
        <div style={innerContentContainerStyle}>
          
          {/* Sub-header / Badge */}
          <span style={locationBadgeStyle}>Lavington, Nairobi</span>

          {/* Main Brand Title */}
          <h1 style={brandTitleStyle}>The Dental Gallery</h1>

          {/* Brand Tagline */}
          <h3 style={taglineStyle}>Refined Care. Remarkable Smiles.</h3>

          {/* Editorial Brand Intro */}
          <p style={introParagraphStyle}>
            A modern boutique practice dedicated to exceptional clinical care, 
            advanced restorative dentistry, and an anxiety-free, premium patient experience.
          </p>

          {/* Interactive Luxury Buttons */}
          <div style={buttonGroupStyle}>
            <Link to="/booking" style={{ textDecoration: 'none' }}>
              <button 
                style={goldButtonStyle}
                onMouseEnter={handleGoldEnter}
                onMouseLeave={handleGoldLeave}
              >
                Book Appointment
              </button>
            </Link>

            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <button 
                style={outlineButtonStyle}
                onMouseEnter={handleOutlineEnter}
                onMouseLeave={handleOutlineLeave}
              >
                Contact Us
              </button>
            </Link>
          </div>

        </div>
      </div>

    </section>
  );
}

// --- ARCHITECTURAL TWO-COLUMN SPLIT STYLES ---

const heroContainerStyle = {
  display: "flex",
  flexWrap: "wrap", // Enables responsive collapsing on smaller mobile viewports
  minHeight: "85vh",
  width: "100%",
  background: "#ffffff",
  fontFamily: "Arial, sans-serif"
};

const leftMediaColumnStyle = {
  flex: "1 1 500px", // Grow and shrink intelligently, snapping at 500px base
  backgroundImage: "url('/images/image10.png')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: "450px",
  position: "relative"
};

const imageOverlayTintStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  // Soft atmospheric corporate blue tint balancing the raw photograph image
  background: "linear-gradient(135deg, rgba(15, 32, 56, 0.15) 0%, rgba(31, 59, 91, 0.2) 100%)"
};

const rightContentColumnStyle = {
  flex: "1 1 500px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "80px 60px",
  background: "#ffffff"
};

const innerContentContainerStyle = {
  maxWidth: "620px",
  width: "100%",
  textAlign: "left" // Clean editorial left-aligned copy text
};

const locationBadgeStyle = {
  color: "#D4AF37",
  fontSize: "12px",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "3px",
  display: "inline-block",
  marginBottom: "20px",
  background: "rgba(212, 175, 55, 0.08)",
  padding: "6px 16px",
  borderRadius: "50px",
  border: "1px solid rgba(212, 175, 55, 0.2)"
};

const brandTitleStyle = {
  fontSize: "54px",
  margin: "0 0 12px 0",
  color: "#0f2038", // Inverted to high-contrast deep navy
  fontWeight: "bold",
  letterSpacing: "-1px",
  lineHeight: "1.1"
};

const taglineStyle = {
  color: "#475569", // Subdued classy gray slate subtitle
  fontWeight: "600",
  fontSize: "22px",
  margin: "0 0 25px 0",
  letterSpacing: "0.2px"
};

const introParagraphStyle = {
  margin: "0 0 40px 0",
  fontSize: "16px",
  lineHeight: "1.8",
  color: "#475569" // Clear clinical reading gray contrast
};

const buttonGroupStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "16px",
  justifyContent: "flex-start"
};

const goldButtonStyle = {
  padding: "16px 36px",
  background: "#D4AF37",
  color: "#0f2038",
  fontWeight: "bold",
  fontSize: "14px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  boxShadow: "0 4px 15px rgba(212, 175, 55, 0.2)",
  letterSpacing: "1px",
  textTransform: "uppercase",
  transition: "all 0.25s ease-out"
};

const outlineButtonStyle = {
  padding: "16px 36px",
  background: "transparent",
  color: "#0f2038", // Swapped line outline to deep navy
  border: "2px solid #0f2038",
  borderRadius: "4px",
  fontWeight: "bold",
  fontSize: "14px",
  cursor: "pointer",
  letterSpacing: "1px",
  textTransform: "uppercase",
  transition: "all 0.25s ease-out"
};