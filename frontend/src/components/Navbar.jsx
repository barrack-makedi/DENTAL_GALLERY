import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* TOP NAVIGATION BAR */}
      <header style={navBar}>
        <div style={navContainer}>
          {/* Logo / Branding */}
          <div style={logoArea}>
            <span style={{ color: "#b4b1aa", fontWeight: "900", fontSize: "24px", marginRight: "6px" }}>
              {/* <img src="images/logo2.png" alt="Company Logo" width="150" height="auto"></img> */}
            </span>
            The Dental Gallery
          </div>
          
          {/* Navigation Links */}
          <nav style={navLinks}>
            <Link to="/" style={navLink}>Home</Link>
            <Link to="/About" style={navLink}>About</Link>
            <Link to="/Dentist" style={navLink}>Our Team</Link>
            <Link to="/contact" style={navLink}>Contact</Link>
            <Link to="/blog" style={navLink}>Blog</Link>
            <Link to="/Booking">
              <button style={navCta}>Book Now</button>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

/* NAVBAR UNIQUE STYLES */

const navBar = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  background: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(10px)",
  borderBottom: "1px solid #eef2f6",
  zIndex: "1000",
  boxShadow: "0 2px 20px rgba(15, 32, 56, 0.05)"
};

const navContainer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "15px 20px",
  flexWrap: "wrap", 
  gap: "15px"
};

const logoArea = {
  fontWeight: "bold",
  fontSize: "20px",
  color: "#1f3b5b",
  display: "flex",
  alignItems: "center",
  letterSpacing: "0.5px"
};

const navLinks = {
  display: "flex",
  alignItems: "center",
  gap: "25px",
  flexWrap: "wrap"
};

const navLink = {
  textDecoration: "none",
  color: "#1f3b5b",
  fontWeight: "600",
  fontSize: "15px",
  transition: "color 0.2s ease"
};

const navCta = {
  padding: "8px 20px",
  background: "#1f3b5b",
  color: "#ffffff",
  border: "none",
  borderRadius: "6px",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "14px"
};