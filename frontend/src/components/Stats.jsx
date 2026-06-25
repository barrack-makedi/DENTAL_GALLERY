import { Link } from "react-router-dom";
export default function StatsSection() {
  const stats = [
    {
      value: "10+",
      title: "Years of Experience",
      description: "Delivering exceptional dental care with expertise and precision."
    },
    {
      value: "2,500+",
      title: "Happy Patients",
      description: "Trusted by thousands of patients for comprehensive oral healthcare."
    },
    {
      value: "98%",
      title: "Patient Satisfaction",
      description: "A commitment to excellence reflected in our outstanding patient reviews."
    },
    {
      value: "15+",
      title: "Dental Services",
      description: "Comprehensive treatments tailored to every smile and dental need."
    }
  ];

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headingContainer}>
          <h2 style={headingStyle}>Excellence in Every Smile</h2>
          <p style={subheadingStyle}>
            Combining expertise, compassion, and advanced technology to
            provide exceptional dental experiences.
          </p>
        </div>

        <div style={statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} style={cardStyle}>
              <h3 style={statValue}>{stat.value}</h3>
              <h4 style={statTitle}>{stat.title}</h4>
              <p style={statDescription}>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* STYLES */

const sectionStyle = {
  background: "#f8fafc",
  padding: "80px 20px",
  fontFamily: "Arial, sans-serif"
};

const containerStyle = {
  maxWidth: "1200px",
  margin: "0 auto"
};

const headingContainer = {
  textAlign: "center",
  marginBottom: "60px"
};

const headingStyle = {
  fontSize: "38px",
  color: "#0f2038",
  marginBottom: "15px",
  fontWeight: "700"
};

const subheadingStyle = {
  color: "#64748b",
  fontSize: "17px",
  maxWidth: "700px",
  margin: "0 auto",
  lineHeight: "1.7"
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "30px"
};

const cardStyle = {
  background: "#ffffff",
  padding: "40px 30px",
  borderRadius: "16px",
  textAlign: "center",
  boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
  borderTop: "4px solid #D4AF37",
  transition: "transform 0.3s ease"
};

const statValue = {
  fontSize: "52px",
  color: "#D4AF37",
  margin: "0",
  fontWeight: "700"
};

const statTitle = {
  color: "#0f2038",
  fontSize: "20px",
  margin: "15px 0",
  fontWeight: "600"
};

const statDescription = {
  color: "#64748b",
  fontSize: "14px",
  lineHeight: "1.7",
  margin: "0"
};