import React from 'react';
import { Helmet } from 'react-helmet-async';
// --- IMPORT YOUR COMPONENT PORTFOLIO ---
import Hero from '../components/Hero';
import Services from '../components/Services';
import Leadership from '../components/Leadership';
import PatientJourney from '../components/PatientJourney';
import Partnerships from '../components/Partnerships';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>The Dental Gallery | Premium Dental Care in Lavington, Nairobi</title>
        <meta name="description" content="Experience refined dental care at The Dental Gallery. Modern boutique practice offering advanced restorative dentistry in a premium, anxiety-free environment." />
        <meta name="keywords" content="dentist Nairobi, dental clinic Lavington, cosmetic dentistry, The Dental Gallery, dental implants, teeth whitening, emergency dentist" />
        <meta property="og:title" content="The Dental Gallery | Refined Care. Remarkable Smiles." />
        <meta property="og:description" content="Experience premium dental care in a modern boutique practice designed for your comfort." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thedentalgallery.com/" />
        <meta name="twitter:card" content="summary_large_description" />
      </Helmet>

      <div style={{ fontFamily: "Arial, sans-serif", color: "#0f2038", background: "#ffffff" }}>

        {/* 1. HERO SECTION */}
        <Hero />

        {/* 2. FOUNDING PRINCIPLES */}
        <section
          style={{
            padding: "100px 0 120px 0",
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

          {/* CUSTOM SCROLLBAR STYLES - Applied to the horizontal collage */}
          <style>
            {`
              /* Custom gold scrollbar for the collage slider */
              .luxury-collage-slider::-webkit-scrollbar {
                height: 6px;
              }
              .luxury-collage-slider::-webkit-scrollbar-track {
                background: #edf2f7;
                border-radius: 10px;
              }
              .luxury-collage-slider::-webkit-scrollbar-thumb {
                background: #D4AF37;
                border-radius: 10px;
              }
              .luxury-collage-slider::-webkit-scrollbar-thumb:hover {
                background: #c5a234;
              }
              
              /* Firefox support */
              .luxury-collage-slider {
                scrollbar-width: thin;
                scrollbar-color: #D4AF37 #edf2f7;
              }
              
              /* Image hover effect */
              .luxury-collage-slider img {
                transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
              }
              
              .luxury-collage-slider img:hover {
                transform: scale(1.02);
              }
            `}
          </style>

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
                src="/images/tdgfinalimage40.jpeg" 
                alt="Bespoke luxury dental operatory lounge architecture" 
                style={dynamicImage} 
              />
            </div>

            {/* Item 3: Secondary Feature Focal View */}
            <div style={{ flex: "0 0 600px" }}>
              <img 
                src="/images/tdgfinalimage42.jpeg" 
                alt="Advanced restorative clinical instruments layout" 
                style={dynamicImage} 
              />
            </div>

            {/* Item 4: Balanced Accent Close-up */}
            <div style={{ flex: "0 0 350px" }}>
              <img 
                src="/images/tdgfinalimage41.jpeg" 
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
    </>
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
  flexWrap: "nowrap",
  gap: "30px",
  overflowX: "auto",
  WebkitOverflowScrolling: "touch",
  padding: "40px 80px",
  marginTop: "40px",
  cursor: "grab"
};

const dynamicImage = {
  width: "100%",
  height: "380px",
  objectFit: "cover",
  borderRadius: "12px",
  boxShadow: "0 25px 50px -12px rgba(15, 32, 56, 0.12)",
  userSelect: "none"
};