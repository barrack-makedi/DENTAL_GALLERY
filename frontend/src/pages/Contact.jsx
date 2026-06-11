import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  const [isBtnHovered, setIsBtnHovered] = useState(false);
  const [isFloatHovered, setIsFloatHovered] = useState(false);

  return (
    <>
      <Helmet>
        <title>The Dental Gallery | Contact Us - Book Your Appointment</title>
        <meta name="description" content="Contact The Dental Gallery in Lavington, Nairobi. Call us at +254 717 107 733, email us, or visit our clinic. Book your appointment today for premium dental care." />
        <meta name="keywords" content="contact dental clinic, dentist Lavington Nairobi, The Dental Gallery phone number, dental appointment booking, dental clinic location" />
        <meta property="og:title" content="The Dental Gallery | Contact Us - Get in Touch" />
        <meta property="og:description" content="Reach out to The Dental Gallery for exceptional dental care. We're located at Covo Square, Lavington, Nairobi." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thedentalgallery.com/contact" />
        <meta property="og:image" content="/images/logo3.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="geo.region" content="KE" />
        <meta name="geo.placename" content="Nairobi" />
        <meta name="geo.position" content="-1.2899361;36.7732475" />
        <meta name="ICBM" content="-1.2899361, 36.7732475" />
      </Helmet>

      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          fontFamily: "Arial, sans-serif",
          // PRESERVED: Your exact original blue overlay values remain completely untouched
          backgroundImage:
            "linear-gradient(rgba(15, 32, 56, 0.72), rgba(15, 32, 56, 0.80)), url('/images/image9.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          // FIXED: Dropped backgroundAttachment: "fixed" to force the image to size beautifully to the full container area
          boxSizing: "border-box"
        }}
      >
        {/* HERO SECTION */}
        <section style={{ textAlign: "center", padding: "160px 20px 60px" }}>
          <span style={goldLabelStyle}>Get In Touch</span>
          <h1 style={heroTitleStyle}>Contact Us</h1>
          <p style={heroSubtitleStyle}>
            We are committed to providing exceptional dental care. Reach out to us through 
            any of the channels below and our clinic team will be delighted to assist you.
          </p>
          <div style={decorativeDividerStyle} />
        </section>

        {/* TWO COLUMN CONTENT CONFIGURATION */}
        <div style={contentGridContainerStyle}>
          
          {/* LEFT COLUMN: CHANNELS & WORKING HOURS */}
          <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            
            {/* Communication Channels */}
            <div style={glassCard}>
              <h3 style={cardHeading}>Connect With Us</h3>
              
              <div style={channelRowStyle}>
                <span style={iconLabelStyle}>EMAIL</span>
                <a href="mailto:thedentalgallery.ke@gmail.com" style={linkStyle}>
                  thedentalgallery.ke@gmail.com
                </a>
              </div>

              <div style={{ ...channelRowStyle, border: "none", paddingBottom: 0, marginBottom: 0 }}>
                <span style={iconLabelStyle}>PHONE</span>
                <a href="tel:+254717107733" style={linkStyle}>
                  +254 717 107 733
                </a>
              </div>
            </div>

            {/* Business Timings */}
            <div style={glassCard}>
              <h3 style={cardHeading}>Working Hours</h3>

              <div style={hoursRow}>
                <span style={dayLabelStyle}>Monday - Friday</span>
                <strong style={timeValueStyle}>8:00 AM - 6:00 PM</strong>
              </div>

              <div style={hoursRow}>
                <span style={dayLabelStyle}>Saturday</span>
                <strong style={timeValueStyle}>9:00 AM - 4:00 PM</strong>
              </div>

              <div style={{ ...hoursRow, borderBottom: "none", marginBottom: 0, paddingBottom: 0 }}>
                <span style={dayLabelStyle}>Sunday</span>
                <strong style={{ ...timeValueStyle, color: "#f87171", letterSpacing: "1px" }}>CLOSED</strong>
              </div>
            </div>

            {/* Social Foundations */}
            <div style={glassCard}>
              <h3 style={cardHeading}>Follow Us</h3>

              <div style={channelRowStyle}>
                <span style={iconLabelStyle}>INSTAGRAM</span>
                <a
                  href="https://instagram.com/thedentalgallery.ke"
                  target="_blank"
                  rel="noreferrer"
                  style={linkStyle}
                >
                  @thedentalgallery.ke
                </a>
              </div>

              <div style={{ ...channelRowStyle, border: "none", paddingBottom: 0, marginBottom: 0 }}>
                <span style={iconLabelStyle}>FACEBOOK</span>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  style={linkStyle}
                >
                  The Dental Gallery
                </a>
              </div>
            </div>

            {/* Primary Action Button */}
            <a
              href="https://wa.me/254717107733"
              target="_blank"
              rel="noreferrer"
              style={{
                ...whatsappBtn,
                transform: isBtnHovered ? "translateY(-2px)" : "translateY(0)",
                boxShadow: isBtnHovered 
                  ? "0 12px 30px rgba(37, 211, 102, 0.5)" 
                  : "0 6px 20px rgba(37, 211, 102, 0.35)"
              }}
              onMouseEnter={() => setIsBtnHovered(true)}
              onMouseLeave={() => setIsBtnHovered(false)}
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* RIGHT COLUMN: CLINICAL LOCATION & MAP EMBED */}
          <div style={glassCard}>
            <h3 style={cardHeading}>Our Location</h3>

            <div style={addressBlockStyle}>
              <span style={iconLabelStyle}>CLINIC SUITE</span>
              <p style={addressTextStyle}>
                Covo Square, 2nd Floor, Gitanga Rd – Othaya Rd Junction, Lavington, Nairobi
              </p>
            </div>

            <div style={mapFrameContainerStyle}>
              <iframe
                title="The Dental Gallery Clinic Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.807216154099!2d36.7732475!3d-1.2899361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1bda77e25549%3A0x955fdcf8716cde6f!2sCovo%20Square!5e0!3m2!1sen!2ske!4v1780641889518!5m2!1sen!2ske"
                width="100%"
                height="450"
                style={{ border: "none", display: "block" }}
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* FLOATING WHATSAPP MICRO-INTERACTION BUTTON */}
        
      </div>
    </>
  );
}

// --- ARCHITECTURAL STYLE SPECIFICATIONS ---

const goldLabelStyle = {
  color: "#D4AF37",
  fontSize: "12px",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "4px",
  display: "inline-block",
  marginBottom: "12px"
};

const heroTitleStyle = {
  fontSize: "56px",
  color: "#ffffff",
  marginBottom: "20px",
  fontWeight: "bold",
  letterSpacing: "-1px",
};

const heroSubtitleStyle = {
  color: "#cbd5e1",
  fontSize: "17px",
  maxWidth: "640px",
  margin: "0 auto",
  lineHeight: "1.8",
};

const decorativeDividerStyle = {
  width: "40px",
  height: "3px",
  background: "#D4AF37",
  margin: "30px auto 0 auto"
};

const contentGridContainerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "40px 20px 120px 20px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
  gap: "40px",
};

const glassCard = {
  background: "rgba(15, 32, 56, 0.45)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  borderRadius: "12px",
  padding: "40px",
  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)",
};

const cardHeading = {
  color: "#D4AF37",
  fontSize: "18px",
  textTransform: "uppercase",
  letterSpacing: "2px",
  marginTop: 0,
  marginBottom: "30px",
  fontWeight: "bold",
};

const channelRowStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
  paddingBottom: "18px",
  marginBottom: "18px"
};

const iconLabelStyle = {
  fontSize: "11px",
  color: "#94a3b8",
  fontWeight: "bold",
  letterSpacing: "1px"
};

const linkStyle = {
  color: "#ffffff",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "500",
  transition: "color 0.2s ease"
};

const hoursRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingBottom: "16px",
  marginBottom: "16px",
  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
};

const dayLabelStyle = {
  color: "#e2e8f0",
  fontSize: "15px"
};

const timeValueStyle = {
  color: "#ffffff",
  fontSize: "15px",
  fontWeight: "600"
};

const addressBlockStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  marginBottom: "30px"
};

const addressTextStyle = {
  color: "#ffffff",
  fontSize: "16px",
  lineHeight: "1.7",
  margin: 0
};

const mapFrameContainerStyle = {
  overflow: "hidden",
  borderRadius: "6px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
};

const whatsappBtn = {
  background: "#25D366",
  color: "#ffffff",
  textDecoration: "none",
  padding: "20px",
  borderRadius: "6px",
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "15px",
  letterSpacing: "0.5px",
  textTransform: "uppercase",
  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
  display: "block"
};

