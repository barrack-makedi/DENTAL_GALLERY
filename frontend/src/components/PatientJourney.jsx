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

// --- IMAGE GALLERY STYLES ---
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
  flex: "1 1 200px",
  height: "auto",
  minHeight: "200px",
  overflow: "hidden",
  borderRadius: "8px",
  backgroundColor: "#f4f8fc",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative"
};

// --- INDIVIDUAL IMAGE STYLES ---

// Image 1: Portrait style (UNCHANGED)
const imageStyle1 = {
  width: "100%",
  height: "100%",
  minHeight: "350px",
  objectFit: "cover",
  objectPosition: "top center"
};

// Image 2: FIXED - Removed zoom, proper sizing
const imageStyle2 = {
  width: "100%",
  height: "100%",
  minHeight: "320px",
  objectFit: "cover",
  objectPosition: "center 40%", // Adjusted to show content better
  // Removed transform: scale(1.05) - no more zoom
  transition: "transform 0.3s ease"
};

// Image 3: Square style with zoom (UNCHANGED)
const imageStyle3 = {
  width: "100%",
  height: "100%",
  minHeight: "320px",
  objectFit: "cover",
  objectPosition: "center 30%",
  transform: "scale(1.05)",
  transition: "transform 0.3s ease"
};

// --- INDIVIDUAL WRAPPER STYLES ---

// Image 1 - Keep exactly as is
const imageWrapperStyle1 = {
  ...imageWrapperStyle,
  flex: "1 1 250px",
  minHeight: "350px",
  borderRadius: "12px"
};

// Image 2 - FIXED - Removed gold shadow, standard rectangle
const imageWrapperStyle2 = {
  ...imageWrapperStyle,
  flex: "1 1 280px", // Made slightly wider
  minHeight: "320px",
  borderRadius: "12px", // Standard rounded corners
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)" // Subtle shadow
};

// Image 3 - Keep exactly as is
const imageWrapperStyle3 = {
  ...imageWrapperStyle,
  flex: "1 1 220px",
  minHeight: "320px",
  borderRadius: "8px 30px 8px 30px",
  boxShadow: "0 8px 24px rgba(212, 175, 55, 0.2)"
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
              e.currentTarget.style.boxShadow =
                "0 16px 32px rgba(15, 32, 56, 0.08)";
              e.currentTarget.style.background = "#0f2038";
              e.currentTarget.querySelector(".step-num").style.color =
                "#ffffff";
              e.currentTarget.querySelector(".card-head").style.color =
                "#D4AF37";
              e.currentTarget.querySelector(".card-txt").style.color =
                "#cbd5e1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 8px 24px rgba(15, 32, 56, 0.04)";
              e.currentTarget.style.background = "#ffffff";
              e.currentTarget.querySelector(".step-num").style.color =
                "#D4AF37";
              e.currentTarget.querySelector(".card-head").style.color =
                "#0f2038";
              e.currentTarget.querySelector(".card-txt").style.color =
                "#475569";
            }}
          >
            <span className="step-num" style={stepNumber}>
              {item.step}
            </span>

            <h3 className="card-head" style={cardHeader}>
              {item.title}
            </h3>

            <p className="card-txt" style={cardText}>
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Image Gallery */}
      <h2 style={sectionTitle}>Transformations that speak</h2>

      <div style={imageGalleryStyle}>
        {/* Image 1 - Portrait Style (UNCHANGED) */}
        <div style={imageWrapperStyle1}>
          <img
            src="/images/dentalgalleryimage31.jpeg"
            alt="Dental Gallery Interior"
            style={imageStyle1}
          />
        </div>

        {/* Image 2 - FIXED: No zoom, proper sizing */}
        <div style={imageWrapperStyle2}>
          <img
            src="/images/dentalgalleryimage28.jpeg"
            alt="Dental Gallery Treatment"
            style={imageStyle2}
          />
        </div>

        {/* Image 3 - Rounded Corner Feature (UNCHANGED) */}
        <div style={imageWrapperStyle3}>
          <img
            src="/images/dentalgalleryimage33.jpeg"
            alt="Dental Gallery Treatment"
            style={imageStyle3}
          />
        </div>
      </div>
    </section>
  );
}