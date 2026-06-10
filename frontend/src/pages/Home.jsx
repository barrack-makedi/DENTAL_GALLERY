import React from 'react';

// --- IMPORT YOUR COMPONENT PORTFOLIO ---
import Hero from '../components/Hero';
import Services from '../components/Services';
import Leadership from '../components/Leadership';
import PatientJourney from '../components/PatientJourney';
import Partnerships from '../components/Partnerships';

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#0f2038", background: "#ffffff" }}>

      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. FOUNDING PRINCIPLES */}
      <section
        style={{
          padding: "100px 0 120px 0", // Stripped lateral padding so scrolling collage can run edge-to-edge seamlessly
          background: "#ffffff"
        }}
      >
        <div style={{ padding: "0 20px" }}>
          <h2 style={sectionTitle}>
            Why Patients Choose Us
          </h2>

          <div style={gridContainer}>
            <div style={cardStyle}>
              <h3 style={cardHeader}>Safety First</h3>
              <p style={cardText}>
                Robust infection prevention systems, sterilization protocols and quality assurance processes.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={cardHeader}>Patient-Centred Care</h3>
              <p style={cardText}>
                Every treatment plan is tailored to individual needs, goals and long-term oral health outcomes.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={cardHeader}>Modern Technology</h3>
              <p style={cardText}>
                Digital workflows, contemporary equipment and precision-driven treatment planning.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={cardHeader}>Comfortable Environment</h3>
              <p style={cardText}>
                A calm, welcoming and thoughtfully designed setting that supports a positive patient experience.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={cardHeader}>Ethical Practice</h3>
              <p style={cardText}>
                Transparent communication, informed decision-making and patient trust at every stage of care.
              </p>
            </div>
          </div>
        </div>

        {/* INLINE CSS OVERRIDE TO HIDE SCROLLBARS CLEANLY ACROSS BROWSERS */}
        <style>{`
          .luxury-collage-slider::-webkit-scrollbar {
            display: none;
          }
          .luxury-collage-slider {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>

        {/* HORIZONTAL SCROLLING COLLAGE CONTAINER */}
        <div className="luxury-collage-slider" style={horizontalCollageTrack}>
          
          {/* Item 1: Deep Landscape Profile */}
          <div style={{ flex: "0 0 340px" }}>
            <img 
              src="/images/image8.png" 
              alt="Modern digital panoramic diagnostics workflow" 
              style={dynamicImage} 
            />
          </div>
          
          {/* Item 2: Intimate Minimalist Portrait */}
          <div style={{ flex: "0 0 340px" }}>
            <img 
              src="/images/image4.png" 
              alt="Bespoke luxury dental operatory lounge architecture" 
              style={dynamicImage} 
            />
          </div>

          {/* Item 3: Secondary Feature Focal View */}
          <div style={{ flex: "0 0 600px" }}>
            <img 
              src="/images/image5.png" 
              alt="Advanced restorative clinical instruments layout" 
              style={dynamicImage} 
            />
          </div>

          {/* Item 4: Balanced Accent Close-up */}
          <div style={{ flex: "0 0 600px" }}>
            <img 
              src="/images/image2.png" 
              alt="Warm corporate reception architectural design layout" 
              style={dynamicImage} 
            />
          </div>

        </div>
      </section>

      {/* 3. SUB-SECTIONS */}
      <Services />
      <Leadership />
      <PatientJourney />
      <Partnerships />

    </div>
  );
}

/* LOCAL DESIGN HOOKS FOR HOME EXCLUSIVES */
const sectionTitle = {
  textAlign: "center",
  marginBottom: "50px",
  color: "#0f2038",
  fontSize: "36px",
  fontWeight: "bold"
};

const gridContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "25px",
  maxWidth: "1200px",
  margin: "auto"
};

const cardStyle = {
  background: "#ffffff",
  padding: "30px",
  borderRadius: "8px",
  boxShadow: "0 10px 30px rgba(15, 32, 56, 0.03)",
  border: "1px solid #eef2f6"
};

const cardHeader = {
  color: "#0f2038",
  fontSize: "20px",
  marginTop: "0",
  marginBottom: "15px",
  fontWeight: "700"
};

const cardText = {
  color: "#475569",
  fontSize: "15px",
  lineHeight: "1.6",
  margin: "0"
};

// ASYMMETRIC HORIZONTAL RAIL SPECIFICATION
const horizontalCollageTrack = {
  display: "flex",
  flexWrap: "nowrap",         // Prevents blocks from collapsing downward
  gap: "30px",
  overflowX: "auto",          // Activates horizontal native scrolling windows
  WebkitOverflowScrolling: "touch", // Enables ultra-smooth momentum flicking on iOS devices
  padding: "40px 80px",       // Creates elegant breathing room around the popping shadows
  marginTop: "40px",
  cursor: "grab"
};

const dynamicImage = {
  width: "100%",
  height: "380px",            // Locked uniform height line for editorial harmony
  objectFit: "cover",
  borderRadius: "12px",       // Softer curves for a premium aesthetic
  boxShadow: "0 25px 50px -12px rgba(15, 32, 56, 0.12)",
  transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
  userSelect: "none"
};