import { Link } from "react-router-dom";

// --- STYLES ---
const sectionStyle = {
  padding: "100px 20px",
  background: "linear-gradient(to bottom, #ffffff, #f4f8fc)", // Graceful fade into a cool backdrop
  fontFamily: "Arial, sans-serif"
};

const sectionTitle = {
  color: "#0f2038", // Deep luxury navy
  fontSize: "36px",
  fontWeight: "bold",
  textAlign: "center",
  margin: "0 0 12px 0",
  letterSpacing: "0.5px"
};

const sectionSubtitle = {
  color: "#475569", // Elegant slate gray
  fontSize: "16px",
  textAlign: "center",
  margin: "0 0 60px 0"
};

const gridContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "30px",
  maxWidth: "1200px",
  margin: "0 auto"
};

const testimonialCard = {
  background: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "8px",
  padding: "40px 35px",
  boxShadow: "0 10px 30px rgba(15, 32, 56, 0.02)", // Micro luxury shadow
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "20px",
  transition: "all 0.3s ease"
};

const starRow = {
  color: "#D4AF37", // Signature premium gold accent
  fontSize: "18px",
  letterSpacing: "2px",
  margin: "0"
};

const quoteText = {
  color: "#334155", // Deep slate for excellent reading contrast
  fontSize: "15px",
  lineHeight: "1.7",
  fontStyle: "italic",
  margin: "0"
};

const patientMeta = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  marginTop: "10px"
};

const avatarCircle = {
  width: "42px",
  height: "42px",
  background: "#0f2038", // Deep luxury navy accent
  color: "#D4AF37", // Elegant gold letter
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  fontSize: "14px",
  letterSpacing: "0.5px"
};

const patientName = {
  color: "#0f2038",
  fontSize: "15px",
  fontWeight: "bold",
  margin: "0"
};

const patientStatus = {
  color: "#94a3b8",
  fontSize: "12px",
  margin: "2px 0 0 0",
  textTransform: "uppercase",
  letterSpacing: "1px"
};

// --- DATA STRUCTURE ---
const testimonialsData = [
  {
    initials: "EM",
    name: "Eleanor Mcclain",
    status: "Verified Patient",
    stars: "★★★★★",
    quote: "The most beautiful dental office I have ever visited. The team was extraordinarily gentle, completely transparent about pricing, and made my smile makeover look incredibly natural."
  },
  {
    initials: "HB",
    name: "Harrison Blake",
    status: "Verified Patient",
    stars: "★★★★★",
    quote: "I used to experience extreme dental anxiety, but the environment here is completely calm and reassuring. Setting up my appointment online was entirely stress-free."
  },
  {
    initials: "SC",
    name: "Sophia Chang",
    status: "Verified Patient",
    stars: "★★★★★",
    quote: "Absolute world-class professionalism. From the state-of-the-art modern diagnostic imaging to the flawless restorative work, I cannot recommend The Dental Gallery enough."
  }
];

// --- COMPONENT ---
export default function Testimonials() {
  return (
    <section style={sectionStyle}>
      <h2 style={sectionTitle}>What Our Patients Say</h2>
      <p style={sectionSubtitle}>Real reviews from our premium care community</p>

      <div style={gridContainer}>
        {testimonialsData.map((item, index) => (
          <div 
            key={index} 
            style={testimonialCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.borderColor = "#D4AF37"; // Soft border focus change
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(15, 32, 56, 0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "#e2e8f0";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(15, 32, 56, 0.02)";
            }}
          >
            <div>
              <p style={starRow}>{item.stars}</p>
              <div style={{ height: "15px" }} /> {/* Spacer */}
              <p style={quoteText}>"{item.quote}"</p>
            </div>

            <div style={patientMeta}>
              <div style={avatarCircle}>{item.initials}</div>
              <div>
                <h4 style={patientName}>{item.name}</h4>
                <p style={patientStatus}>{item.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}