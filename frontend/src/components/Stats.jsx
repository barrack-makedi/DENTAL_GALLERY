import { Link } from "react-router-dom";

// --- STYLES ---
const statsSection = {
  background: "#0f2038", // Deep luxury navy background
  color: "#ffffff",
  padding: "80px 20px",
  fontFamily: "Arial, sans-serif",
  textAlign: "center"
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "40px",
  maxWidth: "1200px",
  margin: "0 auto"
};

const statCard = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  padding: "10px"
};

const statNumber = {
  color: "#D4AF37", // Signature premium gold accent
  fontSize: "46px",
  fontWeight: "bold",
  margin: "0",
  letterSpacing: "0.5px",
  lineHeight: "1"
};

const statLabel = {
  color: "#cbd5e1", // Soft muted gray-white text for excellent readability
  fontSize: "15px",
  fontWeight: "600",
  textTransform: "uppercase",
  letterSpacing: "1.5px",
  margin: "0"
};

// --- DATA ---
const statsData = [
  { number: "10+", label: "Years Experience" },
  { number: "5000+", label: "Patients Served" },
  { number: "100%", label: "Patient Focused" },
  { number: "Modern", label: "Technology" }
];

// --- COMPONENT ---
export default function Stats() {
  return (
    <section style={statsSection}>
      <div style={statsGrid}>
        {statsData.map((stat, index) => (
          <div key={index} style={statCard}>
            <h2 style={statNumber}>{stat.number}</h2>
            <p style={statLabel}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}