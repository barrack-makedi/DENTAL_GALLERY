import React from 'react';
import { Link } from "react-router-dom";
import InfoCard from '../components/InfoCard'; // Adjust paths as per your folder layout

export default function About() {
  return (
    <div style={{ background: "#ffffff", color: "#0f2038", fontFamily: "Arial, sans-serif" }}>
      
      {/* SECTION 1: HEADER & INTRODUCTORY BRAND TEXT */}
      <section style={introSectionStyle}>
        <span style={goldLabelStyle}>Our Practice</span>
        <h1 style={mainPageHeadingStyle}>About The Dental Gallery</h1>
        
        <div style={editorialBodyContainerStyle}>
          <p style={leadParagraphStyle}>
            The Dental Gallery is a modern boutique dental practice located in Lavington, Nairobi, 
            committed to delivering high-quality, patient-centered oral healthcare in a professional, 
            welcoming, and contemporary environment.
          </p>
          <p style={standardParagraphStyle}>
            Designed around the principles of clinical excellence, patient comfort, and ethical practice, 
            the clinic combines modern technology with evidence-based dentistry to provide comprehensive 
            preventive, restorative, cosmetic, and surgical dental services for individuals and families.
          </p>
          <p style={standardParagraphStyle}>
            Our approach focuses on preserving natural dentition, restoring function, enhancing aesthetics, 
            and promoting long-term oral health through personalized treatment planning and preventive care.
          </p>
        </div>
      </section>

      {/* SECTION 2: MISSION & VISION (HIGH CONTRAST DARK GRID) */}
      <section style={missionVisionWrapperStyle}>
        <div style={twinGridStyle}>
          <InfoCard title="Our Mission" darkVariant={true}>
            To deliver refined, patient-centered dental care through clinical excellence, 
            modern innovation, and genuine human connection—creating healthy, confident smiles.
          </InfoCard>
          <InfoCard title="Our Vision" darkVariant={true}>
            To be a leading modern dental destination recognized for exceptional patient experiences, 
            advanced restorative and aesthetic dentistry, and a culture where science, precision, 
            and artistry meet.
          </InfoCard>
        </div>
      </section>

      {/* SECTION 3: CORE PRINCIPLES (LIGHTWEIGHT CARD MATRIX) */}
      <section style={contentBlockSectionStyle}>
        <div style={sectionHeaderCenterStyle}>
          <h2 style={sectionTitleStyle}>Our Founding Principles</h2>
          <div style={decorativeDividerStyle} />
        </div>

        <div style={principlesMatrixGridStyle}>
          <InfoCard title="Clinical Excellence">
            Highest standards of ethical, evidence-based dental care.
          </InfoCard>
          <InfoCard title="Exceptional Experience">
            Creating a comfortable, personalized, and memorable patient journey.
          </InfoCard>
          <InfoCard title="Advanced Dentistry">
            Comprehensive restorative, implant, orthodontic, and aesthetic solutions.
          </InfoCard>
          <InfoCard title="Innovation & Technology">
            Modern digital dentistry for precision, efficiency, and better outcomes.
          </InfoCard>
          <InfoCard title="Integrity & Transparency">
            Honest communication, ethical recommendations, and lasting trust.
          </InfoCard>
          <InfoCard title="Safety & Infection Control">
            Rigorous protocols ensuring the highest standards of patient safety.
          </InfoCard>
          <InfoCard title="Team Culture & Growth">
            A passionate team committed to continuous learning and excellence in every detail.
          </InfoCard>
        </div>
      </section>

      {/* SECTION 4: CLINICAL FACILITY HERO SHOWCASE (DYNAMIC ASYMMETRIC HORIZONTAL SCROLL) */}
      <section style={facilityShowcaseSectionStyle}>
        <div style={sectionHeaderCenterStyle}>
          <h2 style={sectionTitleStyle}>Our Facility & Patient Environment</h2>
          <p style={facilitySubtitleStyle}>Designed for Comfort. Equipped for Excellence.</p>
        </div>
        
        <style>{scrollbarCustomizerStyle}</style>

        {/* HORIZONTAL SWIPER VIEWPORT */}
        <div style={horizontalScrollWrapperStyle}>
          
          {/* Item 1: Deep Landscape Profile */}
          <div style={{ ...imageFrameStyle, flex: "0 0 340px" }}>
            <img 
              src="/images/image6.png" 
              alt="Modern digital panoramic diagnostics workflow" 
              style={dynamicImage} 
            />
          </div>
          
          {/* Item 2: Intimate Minimalist Portrait */}
          <div style={{ ...imageFrameStyle, flex: "0 0 340px" }}>
            <img 
              src="/images/image7.png" 
              alt="Bespoke luxury dental operatory lounge architecture" 
              style={dynamicImage} 
            />
          </div>

          {/* Item 3: Secondary Feature Focal View */}
          <div style={{ ...imageFrameStyle, flex: "0 0 600px" }}>
            <img 
              src="/images/image3.png" 
              alt="Advanced restorative clinical instruments layout" 
              style={dynamicImage} 
            />
          </div>

          {/* Item 4: Balanced Accent Close-up */}
          <div style={{ ...imageFrameStyle, flex: "0 0 300px" }}>
            <img 
              src="/images/image9.png" 
              alt="Warm corporate reception architectural design layout" 
              style={dynamicImage} 
            />
          </div>
          
        </div>
      </section>
      
    </div>
  );
}

// --- ARCHITECTURAL STYLE SHEET SPECIFICATIONS ---

const introSectionStyle = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "160px 20px 80px 20px", 
  textAlign: "center"
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

const mainPageHeadingStyle = {
  fontSize: "48px",
  color: "#0f2038",
  fontWeight: "bold",
  margin: "0 0 40px 0",
  letterSpacing: "-1px"
};

const editorialBodyContainerStyle = {
  maxWidth: "760px",
  margin: "0 auto",
  textAlign: "left"
};

const leadParagraphStyle = {
  fontSize: "19px",
  lineHeight: "1.8",
  color: "#334155",
  marginBottom: "25px",
  fontWeight: "500"
};

const standardParagraphStyle = {
  fontSize: "16px",
  lineHeight: "1.8",
  color: "#475569",
  marginBottom: "20px"
};

const missionVisionWrapperStyle = {
  background: "#f8fafc",
  padding: "80px 20px",
  borderTop: "1px solid #edf2f7",
  borderBottom: "1px solid #edf2f7"
};

const twinGridStyle = {
  maxWidth: "1100px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "30px"
};

const contentBlockSectionStyle = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "100px 20px"
};

const sectionHeaderCenterStyle = {
  textAlign: "center",
  marginBottom: "50px"
};

const sectionTitleStyle = {
  fontSize: "32px",
  color: "#0f2038",
  fontWeight: "bold",
  margin: "0 0 15px 0",
  letterSpacing: "-0.5px"
};

const decorativeDividerStyle = {
  width: "50px",
  height: "3px",
  background: "#D4AF37",
  margin: "0 auto"
};

const principlesMatrixGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "24px"
};

const facilityShowcaseSectionStyle = {
  background: "#f8fafc",
  padding: "80px 0 90px 0"
};

const facilitySubtitleStyle = {
  color: "#475569",
  fontSize: "16px",
  margin: 0
};

const horizontalScrollWrapperStyle = {
  display: "flex",
  gap: "24px",
  overflowX: "auto",
  scrollSnapType: "x mandatory",
  padding: "10px 40px 30px 40px",
  WebkitOverflowScrolling: "touch"
};

// The frame container handles the shadow and shape borders cleanly
const imageFrameStyle = {
  scrollSnapAlign: "start", // Changed to start for smoother left-aligned tracking
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 15px 35px rgba(15, 32, 56, 0.06)",
  background: "#ffffff"
};

// Unified image style configuration for clean filling
const dynamicImage = {
  width: "100%",
  height: "380px", 
  display: "block",
  objectFit: "cover"
};

const scrollbarCustomizerStyle = `
  div::-webkit-scrollbar {
    height: 6px;
  }
  div::-webkit-scrollbar-track {
    background: #edf2f7;
    border-radius: 10px;
  }
  div::-webkit-scrollbar-thumb {
    background: #D4AF37;
    border-radius: 10px;
  }
`;