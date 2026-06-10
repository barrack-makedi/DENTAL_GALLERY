import { Link } from "react-router-dom";

// --- STYLES ---
const sectionStyle = {
  padding: "100px 20px",
  background: "#ffffff", // Pure white backdrop
  fontFamily: "Arial, sans-serif"
};

const sectionTitle = {
  color: "#0f2038", // Deep luxury navy
  fontSize: "36px",
  fontWeight: "bold",
  textAlign: "center",
  margin: "0 0 16px 0",
  letterSpacing: "0.5px"
};

const sectionSubtitle = {
  color: "#475569", // Elegant slate gray
  fontSize: "16px",
  textAlign: "center",
  margin: "0 0 60px 0",
  lineHeight: "1.5"
};

const gridContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "24px",
  maxWidth: "1200px",
  margin: "0 auto"
};

const partnerCardStyle = {
  background: "#f8fafc", // Ultra-light premium grey-blue tint
  border: "1px solid #e2e8f0",
  borderRadius: "6px",
  padding: "30px 24px",
  display: "flex",
  alignItems: "center",
  gap: "16px",
  color: "#0f2038", // Deep luxury navy text
  fontSize: "16px",
  fontWeight: "600",
  letterSpacing: "0.2px",
  transition: "all 0.25s ease"
};

const iconStyle = {
  color: "#D4AF37", // Signature premium gold accent for business icons
  fontSize: "18px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "32px",
  height: "32px",
  background: "rgba(212, 175, 55, 0.1)", // Very soft gold glow ring
  borderRadius: "50%",
  flexShrink: 0
};

// --- DATA STRUCTURE ---
const partnersData = [
  "General Dental Practitioners",
  "Specialist Dental Colleagues",
  "Corporate Organizations",
  "Insurance Providers",
  "Healthcare Institutions",
  "Referral Partners"
];

// --- COMPONENT ---
export default function Partnerships() {
  return (
    <section style={sectionStyle}>
      <h2 style={sectionTitle}>Professional & Referral Partnerships</h2>
      <p style={sectionSubtitle}>The Dental Gallery welcomes collaborations with:</p>

      <div style={gridContainer}>
        {partnersData.map((partner, index) => (
          <div 
            key={index} 
            style={partnerCardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.borderColor = "#D4AF37"; // Border transforms to premium gold on hover
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(15, 32, 56, 0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "#e2e8f0";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Elegant premium diamond emblem to stand in place of partner icons */}
            <div style={iconStyle}>♦</div>
            <span>{partner}</span>
          </div>
        ))}
      </div>
    </section>
  );
}