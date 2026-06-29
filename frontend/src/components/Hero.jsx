import React, { useState, useEffect } from 'react';
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
  // Image configuration with uniform sizing for seamless transitions
  const images = [
    { 
      url: '/images/image10.png', 
      objectFit: 'cover', 
      objectPosition: 'center',
      alt: 'Dental Gallery Interior'
    },
    { 
      url: '/images/dentalgalleryimage26.jpeg', 
      objectFit: 'cover', 
      objectPosition: 'center',
      alt: 'Modern Dental Equipment'
    },
    { 
      url: '/images/dentalgalleryimage32.jpeg', 
      objectFit: 'cover', 
      objectPosition: 'center',
      alt: 'Treatment Room'
    },
    { 
      url: '/images/dentalgalleryimage24.jpeg', 
      objectFit: 'cover', 
      objectPosition: 'center',
      alt: 'Dental Gallery Reception'
    },
    { 
      url: '/images/dentalgalleryimage29.jpeg', 
      objectFit: 'cover', 
      objectPosition: 'center',
      alt: 'Clinical Excellence'
    },
    { 
      url: '/images/dentalgalleryimage23.jpeg', 
      objectFit: 'cover', 
      objectPosition: 'center',
      alt: 'Clinical Excellence'
    },
     { 
      url: '/images/lastimage.jpeg', 
      objectFit: 'cover', 
      objectPosition: 'center',
      alt: 'Clinical Excellence'
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-advance carousel every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);
    
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToImage = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const leftMediaColumnStyle = {
    flex: "1 1 500px",
    minHeight: "450px",
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#f0f2f5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };

  // Clean image swap without fade effect
  const getImageStyle = () => ({
    width: "100%",
    height: "100%",
    objectFit: images[currentIndex].objectFit,
    objectPosition: images[currentIndex].objectPosition
  });

  const navButtonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(15, 32, 56, 0.7)',
    color: '#D4AF37',
    border: 'none',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    cursor: 'pointer',
    zIndex: 10,
    fontSize: '20px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(5px)'
  };

  const dotContainerStyle = {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '12px',
    zIndex: 10,
    padding: '8px 16px',
    borderRadius: '50px',
    background: 'rgba(15, 32, 56, 0.5)',
    backdropFilter: 'blur(5px)'
  };

  const dotStyle = (index) => ({
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: index === currentIndex ? '#D4AF37' : 'rgba(255, 255, 255, 0.5)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: index === currentIndex ? '2px solid #D4AF37' : 'none'
  });

  return (
    <section style={heroContainerStyle}>
      
      {/* LEFT COLUMN: Visual Media Presentation with Carousel */}
      <div style={leftMediaColumnStyle}>
        <img 
          src={images[currentIndex].url}
          alt={images[currentIndex].alt}
          style={getImageStyle()}
        />
        
        {/* Left Navigation Arrow */}
        <button 
          onClick={prevImage} 
          style={{ ...navButtonStyle, left: '15px' }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#D4AF37';
            e.target.style.color = '#0f2038';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(15, 32, 56, 0.7)';
            e.target.style.color = '#D4AF37';
          }}
        >
          ❮
        </button>

        {/* Right Navigation Arrow */}
        <button 
          onClick={nextImage} 
          style={{ ...navButtonStyle, right: '15px' }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#D4AF37';
            e.target.style.color = '#0f2038';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(15, 32, 56, 0.7)';
            e.target.style.color = '#D4AF37';
          }}
        >
          ❯
        </button>

        {/* Dot Indicators */}
        <div style={dotContainerStyle}>
          {images.map((_, index) => (
            <div
              key={index}
              style={dotStyle(index)}
              onClick={() => goToImage(index)}
              onMouseEnter={(e) => {
                if (index !== currentIndex) {
                  e.target.style.transform = 'scale(1.3)';
                }
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
              }}
            />
          ))}
        </div>
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

// --- STYLES ---
const heroContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  minHeight: "85vh",
  width: "100%",
  background: "#ffffff",
  fontFamily: "Arial, sans-serif"
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
  textAlign: "left"
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
  color: "#0f2038",
  fontWeight: "bold",
  letterSpacing: "-1px",
  lineHeight: "1.1"
};

const taglineStyle = {
  color: "#475569",
  fontWeight: "600",
  fontSize: "22px",
  margin: "0 0 25px 0",
  letterSpacing: "0.2px"
};

const introParagraphStyle = {
  margin: "0 0 40px 0",
  fontSize: "16px",
  lineHeight: "1.8",
  color: "#475569"
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
  color: "#0f2038",
  border: "2px solid #0f2038",
  borderRadius: "4px",
  fontWeight: "bold",
  fontSize: "14px",
  cursor: "pointer",
  letterSpacing: "1px",
  textTransform: "uppercase",
  transition: "all 0.25s ease-out"
};