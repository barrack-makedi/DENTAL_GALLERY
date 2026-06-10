import { Link } from "react-router-dom";

// --- STYLES ---
const sectionStyle = {
  padding: "100px 20px",
  background: "linear-gradient(to bottom, #f4f8fc, #ffffff)", // Light, clean backdrop
  fontFamily: "Arial, sans-serif"
};

const sectionTitle = {
  color: "#0f2038", // Deep luxury navy
  fontSize: "36px",
  fontWeight: "bold",
  textAlign: "center",
  margin: "0 0 60px 0",
  letterSpacing: "0.5px"
};

const gridContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "30px",
  maxWidth: "1200px",
  margin: "0 auto"
};

const cardStyle = {
  background: "#ffffff",
  borderTop: "3px solid #D4AF37", // Elegant premium gold border top row
  borderRadius: "4px",
  padding: "40px 30px",
  boxShadow: "0 10px 30px rgba(15, 32, 56, 0.05)", // Ultra-soft luxury shadow
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  transition: "transform 0.3s ease, boxShadow 0.3s ease"
};

const cardHeader = {
  color: "#0f2038", // Deep luxury navy
  fontSize: "22px",
  margin: "0 0 10px 0",
  fontWeight: "bold"
};

const listContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "12px"
};

const listItem = {
  color: "#475569", // Highly readable charcoal slate
  fontSize: "15px",
  lineHeight: "1.5",
  margin: "0",
  display: "flex",
  alignItems: "center",
  gap: "10px"
};

const bulletPoint = {
  color: "#D4AF37", // Matching signature gold for the list bullet
  fontWeight: "bold",
  fontSize: "14px"
};

// --- DATA STRUCTURE ---
const servicesData = [
  {
    category: "Preventive Care",
    items: [
      "Comprehensive Dental Examinations",
      "Digital Dental Imaging",
      "Professional Scaling & Polishing",
      "Preventive Oral Health Programs"
    ]
  },
  {
    category: "Restorative Dentistry",
    items: [
      "Tooth-Coloured Fillings",
      "Root Canal Treatment",
      "Crowns & Bridges",
      "Full Mouth Rehabilitation"
    ]
  },
  {
    category: "Orthodontics",
    items: [
      "Clear Aligners",
      "Orthodontic Assessment",
      "Adult Orthodontics"
    ]
  },
  {
    category: "Cosmetic Dentistry",
    items: [
      "Professional Teeth Whitening",
      "Smile Makeovers",
      "Cosmetic Bonding",
      "Aesthetic Restorations"
    ]
  },
  {
    category: "Tooth Replacement",
    items: [
      "Dental Implants",
      "Implant-Supported Restorations",
      "Fixed Bridges",
      "Removable Dentures"
    ]
  },
  {
    category: "Surgical Dentistry",
    items: [
      "Routine Extractions",
      "Surgical Extraction",
      "Minor Oral Surgery"
    ]
  }
];

// --- COMPONENT ---
export default function Services() {
  return (
    <section style={sectionStyle}>
      <h2 style={sectionTitle}>Our Services</h2>

      <div style={gridContainer}>
        {servicesData.map((service, index) => (
          <div 
            key={index} 
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(15, 32, 56, 0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(15, 32, 56, 0.05)";
            }}
          >
            <h3 style={cardHeader}>{service.category}</h3>
            <div style={listContainer}>
              {service.items.map((item, i) => (
                <p key={i} style={listItem}>
                  <span style={bulletPoint}>✦</span> {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}