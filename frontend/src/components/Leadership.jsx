import { Link } from "react-router-dom";

// --- STYLES ---
const sectionStyle = {
  padding: "100px 20px",
  textAlign: "center",
  background: "#ffffff",
  fontFamily: "Arial, sans-serif"
};

const cardContainer = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "50px 40px",
  borderRadius: "8px",
  boxShadow: "0 15px 40px rgba(15, 32, 56, 0.04)", // Soft luxury depth shadow
  border: "1px solid #e2e8f0",
  borderTop: "3px solid #D4AF37", // Matching signature gold top accent
  background: "#ffffff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const sectionTitle = {
  color: "#0f2038", // Deep luxury navy
  fontSize: "32px",
  fontWeight: "bold",
  margin: "0 0 10px 0",
  letterSpacing: "0.5px"
};

const doctorName = {
  color: "#D4AF37", // Signature premium gold
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0 0 15px 0",
  letterSpacing: "0.5px"
};

const descriptionText = {
  lineHeight: "1.8",
  color: "#475569", // Soft slate text
  fontSize: "16px",
  margin: "0 0 35px 0",
  maxWidth: "460px"
};

const primaryBtn = {
  background: "#0f2038", // Deep navy button fill
  color: "#ffffff",
  border: "none",
  padding: "14px 36px",
  fontSize: "15px",
  fontWeight: "bold",
  borderRadius: "4px",
  cursor: "pointer",
  letterSpacing: "1px",
  textTransform: "uppercase",
  transition: "all 0.2s ease"
};

// --- COMPONENT ---
export default function Leadership() {
  return (
    <section style={sectionStyle}>
      <div style={cardContainer}>
        <h2 style={sectionTitle}>Clinical Leadership</h2>
        <h3 style={doctorName}>Dr. Linda Sabaya</h3>
        
        <p style={descriptionText}>
          Leading The Dental Gallery with a commitment to excellence, innovation, and patient-centred care.
        </p>

        <a href="/dentist" style={{ textDecoration: "none" }}>
          <button 
            style={primaryBtn}
            onMouseEnter={(e) => {
              e.target.style.background = "#D4AF37"; // Shifts beautifully to gold on hover
              e.target.style.color = "#0f2038";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "#0f2038";
              e.target.style.color = "#ffffff";
            }}
          >
            MEET THE LEAD DOCTOR
          </button>
        </a>
      </div>
    </section>
  );
}