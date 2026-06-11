import { Link } from "react-router-dom";

// --- STYLES ---
const ctaSection = {
  background: "#0f2038", // Deep luxury navy
  color: "#ffffff",
  padding: "80px 20px",
  fontFamily: "Arial, sans-serif",
  textAlign: "center",
  borderTop: "3px solid #D4AF37", // Signature premium gold border row
  borderBottom: "3px solid #D4AF37",
};

const container = {
  maxWidth: "800px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px"
};

const topSubheading = {
  color: "#D4AF37", // Signature gold accent
  fontSize: "14px",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "2px",
  margin: "0"
};

const heading = {
  color: "#ffffff",
  fontSize: "36px",
  fontWeight: "bold",
  margin: "0 0 10px 0",
  letterSpacing: "0.5px",
  lineHeight: "1.3"
};

const description = {
  color: "#cbd5e1", // Soft muted gray-white
  fontSize: "18px",
  lineHeight: "1.6",
  margin: "0 0 20px 0",
  maxWidth: "600px"
};

const primaryButton = {
  background: "#D4AF37", // Premium gold button
  color: "#0f2038", // Deep navy text for contrast
  border: "none",
  padding: "16px 40px",
  fontSize: "16px",
  fontWeight: "bold",
  borderRadius: "4px",
  cursor: "pointer",
  boxShadow: "0 4px 14px rgba(212, 175, 55, 0.2)",
  transition: "all 0.2s ease",
  textTransform: "uppercase",
  letterSpacing: "1px"
};

// --- COMPONENT ---
export default function CTA() {
  return (
    <section style={ctaSection}>
      <div style={container}>
        <p style={topSubheading}>Experience Premium Care</p>
        <h2 style={heading}>Refined care, remarkable smiles</h2>
        <p style={description}>
          Discover bespoke dental services tailored to you. Secure your private consultation online in less than two minutes.
        </p>
        <Link to="/Booking">
          <button 
            style={primaryButton}
            onMouseEnter={(e) => {
              e.target.style.background = "#e5c158";
              e.target.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "#D4AF37";
            e.target.style.transform = "translateY(0)";
          }}
        >
          Book An Appointment
        </button>
        </Link>
      </div>
    </section>
  );
}