import { Link } from "react-router-dom";

// --- STYLES ---
const sectionStyle = {
  padding: "100px 20px",
  background: "#f4f8fc",
  fontFamily: "Arial, sans-serif"
};

const sectionTitle = {
  color: "#0f2038",
  fontSize: "36px",
  fontWeight: "bold",
  textAlign: "center",
  margin: "0 0 60px 0",
  letterSpacing: "0.5px"
};

const gridContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "30px",
  maxWidth: "1200px",
  margin: "0 auto 60px auto"
};

const cardStyle = {
  background: "#ffffff",
  borderRadius: "6px",
  padding: "40px 25px",
  boxShadow: "0 8px 24px rgba(15, 32, 56, 0.04)",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  position: "relative",
  borderLeft: "4px solid #D4AF37",
  transition: "all 0.3s ease"
};

const stepNumber = {
  color: "#D4AF37",
  fontSize: "28px",
  fontWeight: "bold",
  display: "block",
  marginBottom: "5px",
  fontFamily: "Georgia, serif"
};

const cardHeader = {
  color: "#0f2038",
  fontSize: "20px",
  margin: "0",
  fontWeight: "bold",
  letterSpacing: "0.3px"
};

const cardText = {
  color: "#475569",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "0"
};

// --- IMAGE GALLERY STYLES - FIXED FOR PERFECT FIT ---
const imageGalleryStyle = {
  display: "flex",
  gap: "30px",
  justifyContent: "center",
  flexWrap: "wrap",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0"
};

const imageWrapperStyle = {
  flex: "1 1 400px",
  height: "auto",
  minHeight: "300px",
  overflow: "hidden",
  borderRadius: "8px",
  backgroundColor: "#f4f8fc",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative"
};

const imageStyle = {
  width: "100%",
  height: "100%",
  minHeight: "300px",
  objectFit: "contain",  // Changed from scale-down to contain for perfect fit
  objectPosition: "center",
  display: "block"
};

// --- DATA STRUCTURE ---
const journeySteps = [
  {
    step: "01",
    title: "Consultation",
    text: "We listen to your needs and understand your dental goals."
  },
  {
    step: "02",
    title: "Diagnosis",
    text: "Comprehensive assessment and customized treatment plan for you."
  },
  {
    step: "03",
    title: "Personal Care",
    text: "Precision-driven treatment in a comfortable and modern environment."
  },
  {
    step: "04",
    title: "Follow-up",
    text: "Ongoing care and guidance to maintain oral health and results."
  },
  {
    step: "05",
    title: "Long-Term",
    text: "Healthy teeth, confident smiles and improved quality of life."
  }
];

// --- COMPONENT ---
export default function PatientJourney() {
  return (
    <section style={sectionStyle}>
      <h2 style={sectionTitle}>Patient Journey</h2>

      {/* Patient Journey Steps */}
      <div style={gridContainer}>
        {journeySteps.map((item, index) => (
          <div 
            key={index} 
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 16px 32px rgba(15, 32, 56, 0.08)";
              e.currentTarget.style.background = "#0f2038";
              // Update text colors on hover for a dramatic luxury inverted effect
              e.currentTarget.querySelector('.step-num').style.color = "#ffffff";
              e.currentTarget.querySelector('.card-head').style.color = "#D4AF37";
              e.currentTarget.querySelector('.card-txt').style.color = "#cbd5e1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(15, 32, 56, 0.04)";
              e.currentTarget.style.background = "#ffffff";
              // Reset original text colors
              e.currentTarget.querySelector('.step-num').style.color = "#D4AF37";
              e.currentTarget.querySelector('.card-head').style.color = "#0f2038";
              e.currentTarget.querySelector('.card-txt').style.color = "#475569";
            }}
          >
            <span className="step-num" style={stepNumber}>{item.step}</span>
            <h3 className="card-head" style={cardHeader}>{item.title}</h3>
            <p className="card-txt" style={cardText}>{item.text}</p>
          </div>
        ))}
      </div>

      {/* Images 19 and 20 Below the Steps - Perfect Fit */}
      <div style={imageGalleryStyle}>
        <div style={imageWrapperStyle}>
          <img 
            src='/images/image21.png'
            alt='Dental Gallery Interior'
            style={imageStyle}
          />
        </div>
        <div style={imageWrapperStyle}>
          <img 
            src='/images/image22.png'
            alt='Dental Gallery Treatment'
            style={imageStyle}
          />
        </div>
      </div>
    </section>
  );
}