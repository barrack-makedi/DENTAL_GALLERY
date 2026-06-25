import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import InfoCard from '../components/InfoCard'; // Adjust paths as per your folder layout
import Stats from '../components/Stats';
import PatientStories from '../components/PatientStories';
export default function About() {
  return (
    <>
      <Helmet>
        <title>The Dental Gallery | About Us - Our Mission & Philosophy</title>
        <meta name="description" content="Learn about The Dental Gallery, a modern boutique dental practice in Lavington, Nairobi. Discover our mission, vision, and commitment to clinical excellence, patient comfort, and ethical dental care." />
        <meta name="keywords" content="about The Dental Gallery, dental practice Nairobi, Lavington dentist, dental clinic mission, dental care philosophy, modern dentistry Kenya" />
        <meta property="og:title" content="The Dental Gallery | About Us - Refined Care. Remarkable Smiles." />
        <meta property="og:description" content="Discover our commitment to clinical excellence, patient comfort, and ethical dental practice at The Dental Gallery in Lavington, Nairobi." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thedentalgallery.com/about" />
        <meta property="og:image" content="/images/image13.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div style={{ background: "#ffffff", color: "#0f2038", fontFamily: "Arial, sans-serif" }}>
        
        {/* SECTION 1: HEADER & INTRODUCTORY BRAND TEXT WITH IMAGE */}
        <section style={introSectionStyle}>
          <span style={goldLabelStyle}>Our Practice</span>
          <h1 style={mainPageHeadingStyle}>About The Dental Gallery</h1>
          
          {/* Two-column layout for text and image */}
          <div style={splitContentContainerStyle}>
            
            {/* Left Column: Editorial Text */}
            <div style={textColumnStyle}>
              <div style={editorialBodyContainerStyle}>
                <p style={leadParagraphStyle}>
                  The Dental Gallery is a gallery of beautiful smiles located in Lavington, Nairobi, 
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
            </div>

            {/* Right Column: Image 13 */}
            <div style={imageColumnStyle}>
              <div style={image13ContainerStyle}>
                <img 
                  src="/images/image13.png" 
                  alt="The Dental Gallery modern facility and treatment area"
                  style={image13Style}
                />
                <div style={image13CaptionStyle}>
                  State-of-the-art facility designed for patient comfort
                </div>
              </div>
            </div>

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
            <h2 style={sectionTitleStyle}>The dental gallery experience</h2>
            <p style={facilitySubtitleStyle}>Designed for Comfort. Equipped for Excellence.</p>
          </div>
          
          {/* UPDATED: Custom gold scrollbar styles matching Home page */}
          <style>
            {`
              /* Custom gold scrollbar for the facility showcase */
              .facility-scroll-wrapper::-webkit-scrollbar {
                height: 6px;
              }
              .facility-scroll-wrapper::-webkit-scrollbar-track {
                background: #edf2f7;
                border-radius: 10px;
              }
              .facility-scroll-wrapper::-webkit-scrollbar-thumb {
                background: #D4AF37;
                border-radius: 10px;
              }
              .facility-scroll-wrapper::-webkit-scrollbar-thumb:hover {
                background: #c5a234;
              }
              
              /* Firefox support */
              .facility-scroll-wrapper {
                scrollbar-width: thin;
                scrollbar-color: #D4AF37 #edf2f7;
              }
              
              /* Image hover effects */
              .facility-scroll-wrapper img {
                transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
              }
              
              .facility-scroll-wrapper img:hover {
                transform: scale(1.02);
              }
            `}
          </style>

          {/* HORIZONTAL SWIPER VIEWPORT with specific class name */}
          <div className="facility-scroll-wrapper" style={horizontalScrollWrapperStyle}>
            
            {/* Item 1: Deep Landscape Profile */}
            <div style={{ ...imageFrameStyle, flex: "0 0 500px" }}>
              <img 
                src="/images/tdgequipment1.jpeg" 
                alt="Modern digital panoramic diagnostics workflow" 
                style={dynamicImage} 
              />
            </div>
            <div style={{ ...imageFrameStyle, flex: "0 0 500px" }}>
              <img 
                src="/images/tdgequipment2.jpeg" 
                alt="Modern digital panoramic diagnostics workflow" 
                style={dynamicImage} 
              />
            </div>
            <div style={{ ...imageFrameStyle, flex: "0 0 500px" }}>
              <img 
                src="/images/tdgequipment3.jpeg" 
                alt="Modern digital panoramic diagnostics workflow" 
                style={dynamicImage} 
              />
            </div>
            <div style={{ ...imageFrameStyle, flex: "0 0 500px" }}>
              <img 
                src="/images/tdgequipment4.jpeg" 
                alt="Modern digital panoramic diagnostics workflow" 
                style={dynamicImage} 
              />
            </div>

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
            <div style={{ ...imageFrameStyle, flex: "0 0 300px" }}>
              <img 
                src="/images/tdgexperience1.jpeg" 
                alt="Warm corporate reception architectural design layout" 
                style={dynamicImage} 
              />
            </div>
            <div style={{ ...imageFrameStyle, flex: "0 0 300px" }}>
              <img 
                src="/images/tdgexperience2.jpeg" 
                alt="Warm corporate reception architectural design layout" 
                style={dynamicImage} 
              />
            </div>
            <div style={{ ...imageFrameStyle, flex: "0 0 300px" }}>
              <img 
                src="/images/tdgexperience3.jpeg" 
                alt="Warm corporate reception architectural design layout" 
                style={dynamicImage} 
              />
            </div>
            <div style={{ ...imageFrameStyle, flex: "0 0 300px" }}>
              <img 
                src="/images/tdgexperience4.jpeg" 
                alt="Warm corporate reception architectural design layout" 
                style={dynamicImage} 
              />
            </div>
            <div style={{ ...imageFrameStyle, flex: "0 0 300px" }}>
              <img 
                src="/images/tdgexperience5.jpeg" 
                alt="Warm corporate reception architectural design layout" 
                style={dynamicImage} 
              />
            </div>
            <div style={{ ...imageFrameStyle, flex: "0 0 300px" }}>
              <img 
                src="/images/tdgexperience6.jpeg" 
                alt="Warm corporate reception architectural design layout" 
                style={dynamicImage} 
              />
            </div>
            
          </div>
        </section>
        <Stats/> 
        <PatientStories/>

<div style={imageFrameStyle}>
  <img
    src="/images/tdgexperience7.jpeg"
    alt="Dental Gallery experience"
    style={{
      width: "100%",
      maxWidth: "500px",
      height: "700px",
      objectFit: "cover",
      display: "block",
      margin: "0 auto"  // Changed from "90 auto" to "0 auto"
    }}
  />
</div>
      </div>
    </>
  );
}

// --- ARCHITECTURAL STYLE SHEET SPECIFICATIONS ---

const introSectionStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "160px 20px 80px 20px",
  textAlign: "center"  // ADDED: This centers everything in the section
};

const goldLabelStyle = {
  color: "#D4AF37",
  fontSize: "12px",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "3px",
  display: "inline-block",
  marginBottom: "12px",
  // Removed textAlign: "center" from here since it's inherited from parent
};

const mainPageHeadingStyle = {
  fontSize: "48px",
  color: "#0f2038",
  fontWeight: "bold",
  margin: "0 0 50px 0",
  letterSpacing: "-1px",
  textAlign: "center"
};

// New two-column split layout
const splitContentContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "60px",
  alignItems: "flex-start",
  textAlign: "left" // Reset text alignment for content
};

const textColumnStyle = {
  flex: "1 1 500px"
};

const imageColumnStyle = {
  flex: "1 1 400px"
};

const editorialBodyContainerStyle = {
  maxWidth: "100%",
  textAlign: "left"
};

const leadParagraphStyle = {
  fontSize: "16px",
  lineHeight: "1.8",
  color: "#334155",
  marginBottom: "25px",
  fontWeight: "500"
};

const standardParagraphStyle = {
  fontSize: "16px",
  lineHeight: "1.8",
  color: "#334155",
  marginBottom: "20px",
  fontWeight: "500"
};

// Image 13 styles
const image13ContainerStyle = {
  position: "relative",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 20px 40px rgba(15, 32, 56, 0.12)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  cursor: "pointer"
};

const image13Style = {
  width: "100%",
  height: "auto",
  display: "block",
  objectFit: "cover",
  transition: "transform 0.5s ease"
};

const image13CaptionStyle = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  background: "linear-gradient(to top, rgba(15, 32, 56, 0.9), transparent)",
  color: "#ffffff",
  padding: "20px 20px 12px 20px",
  fontSize: "14px",
  fontWeight: "500",
  letterSpacing: "0.5px"
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

const imageFrameStyle = {
  scrollSnapAlign: "start",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 15px 35px rgba(15, 32, 56, 0.06)",
  background: "#ffffff"
};

const dynamicImage = {
  width: "100%",
  height: "380px", 
  display: "block",
  objectFit: "cover"
};