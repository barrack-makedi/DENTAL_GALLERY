import { Link } from "react-router-dom";

// --- STYLES ---
const sectionStyle = {
  background: "#f8fafc", // Ultra-light pristine background
  padding: "100px 20px",
  fontFamily: "Arial, sans-serif",
};

const textContainer = {
  maxWidth: "800px",
  margin: "0 auto 60px auto",
  textAlign: "center"
};

const sectionTitle = {
  color: "#0f2038", // Deep luxury navy
  fontSize: "36px",
  fontWeight: "bold",
  margin: "0 0 20px 0",
  letterSpacing: "0.5px"
};

const mainParagraph = {
  color: "#475569", // Elegant slate gray
  fontSize: "18px",
  lineHeight: "1.8",
  margin: "0"
};

const gridContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "30px",
  maxWidth: "1200px",
  margin: "0 auto"
};

const columnCard = {
  background: "#ffffff",
  padding: "40px 30px",
  borderRadius: "6px",
  boxShadow: "0 10px 30px rgba(15, 32, 56, 0.02)", // Extremely soft premium depth shadow
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "14px",
  borderTop: "1px solid #e2e8f0",
  transition: "all 0.3s ease"
};

const iconStyle = {
  color: "#D4AF37", // Signature premium gold
  fontSize: "24px",
  marginBottom: "5px"
};

const cardHeader = {
  color: "#0f2038",
  fontSize: "18px",
  fontWeight: "bold",
  margin: "0",
  textTransform: "uppercase",
  letterSpacing: "1px"
};

const cardText = {
  color: "#64748b",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "0"
};

// --- DATA STRUCTURE ---
const pillarsData = [
  {
    icon: "🔬",
    title: "Science",
    text: "Evidence-based diagnostics combined with state-of-the-art clinical knowledge."
  },
  {
    icon: "🎯",
    title: "Precision",
    text: "Flawless dental treatments powered by modern specialized imaging technology."
  },
  {
    icon: "💆",
    title: "Comfort",
    text: "A calming, private environment designed to completely alleviate anxiety."
  },
  {
    icon: "✨",
    title: "Artistry",
    text: "Bespoke smile design tailored to enrich your natural features seamlessly."
  }
];

// --- COMPONENT ---
export default function WhyChooseUs() {
  return (
    <section style={sectionStyle}>
      <div style={textContainer}>
        <h2 style={sectionTitle}>Why Choose The Dental Gallery?</h2>
        <p style={mainParagraph}>
          We are committed to refined care and remarkable smiles. Every aspect of The Dental Gallery has been thoughtfully designed to combine science, precision, comfort, and artistry — delivering exceptional dental experiences and long-term oral health outcomes.
        </p>
      </div>

      <div style={gridContainer}>
        {pillarsData.map((pillar, index) => (
          <div 
            key={index} 
            style={columnCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.borderTop = "3px solid #D4AF37"; // Gold border reveals on hover
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(15, 32, 56, 0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderTop = "1px solid #e2e8f0";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(15, 32, 56, 0.02)";
            }}
          >
            <div style={iconStyle}>{pillar.icon}</div>
            <h3 style={cardHeader}>{pillar.title}</h3>
            <p style={cardText}>{pillar.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}