import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={footerGrid}>
        
        {/* Branding Column */}
        <div style={columnStyle}>
          <h3 style={brandHeading}>The Dental Gallery</h3>
          <p style={footerText}>Refined Care. Remarkable Smiles.</p>
        </div>

        {/* Contact Column */}
        <div style={columnStyle}>
          <h4 style={columnHeading}>Contact</h4>
          <p style={footerText}>
            <a href="tel:+254717107733" style={footerLink}>+254 717 107 733</a>
          </p>
          <p style={footerText}>
            <a href="mailto:thedentalgallery.ke@gmail.com" style={footerLink}>thedentalgallery.ke@gmail.com</a>
          </p>
        </div>

        {/* Location Column */}
        <div style={columnStyle}>
          <h4 style={columnHeading}>Location</h4>
          <p style={footerText}>
            Covo Square, 2nd Floor,<br />
            Gitanga Road, Lavington
          </p>
        </div>

        {/* Hours Column */}
        <div style={columnStyle}>
          <h4 style={columnHeading}>Hours</h4>
          <p style={footerText}>Mon–Fri: 8:00 AM – 6:00 PM</p>
          <p style={footerText}>Sat: 9:00 AM – 4:00 PM</p>
          <p style={footerText}>Sun: <span style={{ color: "#e53e3e" }}>Closed</span></p>
        </div>

      </div>

      <hr style={divider} />

      <p style={copyright}>
        © 2026 The Dental Gallery. All rights reserved.
      </p>
    </footer>
  );
}

/* FOOTER UNIQUE STYLES */

const footerStyle = {
  background: "#0f2038", // Deep luxury navy background
  color: "#ffffff",
  padding: "60px 20px 30px 20px",
  fontFamily: "Arial, sans-serif",
  borderTop: "3px solid #D4AF37" // Subtle premium gold border row
};

const footerGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "40px",
  maxWidth: "1200px",
  margin: "0 auto",
  paddingBottom: "30px"
};

const columnStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px"
};

const brandHeading = {
  color: "#D4AF37", // Signature gold accent
  fontSize: "22px",
  margin: "0 0 10px 0",
  fontWeight: "bold"
};

const columnHeading = {
  color: "#ffffff",
  fontSize: "18px",
  margin: "0 0 10px 0",
  fontWeight: "600",
  letterSpacing: "0.5px"
};

const footerText = {
  color: "#cbd5e1", // Soft muted gray-white text for excellent readability
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "0"
};

const footerLink = {
  color: "#cbd5e1",
  textDecoration: "none",
  transition: "color 0.2s ease"
};

const divider = {
  border: "none",
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  maxWidth: "1200px",
  margin: "20px auto"
};

const copyright = {
  textAlign: "center",
  color: "#94a3b8",
  fontSize: "13px",
  margin: "0",
  paddingTop: "10px"
};