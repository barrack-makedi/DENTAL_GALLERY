export default function PatientStories() {
  const stories = [
    {
      name: "Brenda Wairimu",
      treatment: "Smile Makeover",
      story:
        "The Dental Gallery completely transformed my smile and confidence. The team was professional, attentive, and made every visit comfortable.",
    },
    {
      name: "Marion Mbithe",
      treatment: "Dental Implants",
      story:
        "From consultation to the final procedure, the experience was exceptional. I can smile, eat, and speak confidently again.",
    },
    {
      name: "Talia Chebet",
      treatment: "Teeth Whitening",
      story:
        "The results exceeded my expectations. The clinic's luxurious atmosphere and caring staff made the entire process enjoyable.",
    },
  ];

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* Heading */}
        <div style={headingContainer}>
          <h2 style={headingStyle}>Patient Stories</h2>
          <p style={subheadingStyle}>
            Discover how we've helped our patients achieve healthier,
            brighter, and more confident smiles.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div style={storiesGrid}>
          {stories.map((story, index) => (
            <div key={index} style={cardStyle}>
              <div style={quoteIcon}>"</div>

              <p style={storyText}>{story.story}</p>

              <div style={divider}></div>

              <h4 style={patientName}>{story.name}</h4>
              <p style={treatmentStyle}>{story.treatment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* STYLES */

const sectionStyle = {
  background: "#ffffff",
  padding: "90px 20px",
  fontFamily: "Arial, sans-serif",
};

const containerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
};

const headingContainer = {
  textAlign: "center",
  marginBottom: "60px",
};

const headingStyle = {
  fontSize: "38px",
  color: "#0f2038",
  marginBottom: "15px",
  fontWeight: "700",
};

const subheadingStyle = {
  color: "#64748b",
  fontSize: "17px",
  maxWidth: "700px",
  margin: "0 auto",
  lineHeight: "1.7",
};

const storiesGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "30px",
};

const cardStyle = {
  background: "#f8fafc",
  padding: "40px 35px",
  borderRadius: "18px",
  boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
  borderTop: "4px solid #D4AF37",
  transition: "all 0.3s ease",
};

const quoteIcon = {
  fontSize: "60px",
  color: "#D4AF37",
  lineHeight: "1",
  marginBottom: "20px",
  fontWeight: "700",
};

const storyText = {
  color: "#475569",
  fontSize: "15px",
  lineHeight: "1.9",
  marginBottom: "30px",
  fontStyle: "italic",
};

const divider = {
  width: "60px",
  height: "2px",
  background: "#D4AF37",
  marginBottom: "20px",
};

const patientName = {
  color: "#0f2038",
  fontSize: "18px",
  margin: "0 0 5px 0",
  fontWeight: "600",
};

const treatmentStyle = {
  color: "#64748b",
  fontSize: "14px",
  margin: "0",
};