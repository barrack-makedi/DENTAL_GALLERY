export default function Home() {
  return (
    <div style={{ fontFamily: "Arial" }}>

      {/* HERO SECTION */}
      <section style={{
        padding: "80px 20px",
        textAlign: "center",
        background: "#eaf3ff"
      }}>
        <h1 style={{ fontSize: "40px" }}>
          🦷 The Dental Gallery.
        </h1>

        <p style={{ fontSize: "18px", marginTop: "10px" }}>
          Professional dental care for a healthier, brighter smile
        </p>

        <a href="/booking">
          <button style={{
            marginTop: "20px",
            padding: "12px 25px",
            fontSize: "16px",
            cursor: "pointer",
            border: "none",
            background: "#2b6cb0",
            color: "white",
            borderRadius: "6px"
          }}>
            Book Appointment
          </button>
        </a>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "60px 20px" }}>
        <h2 style={{ textAlign: "center" }}>Our Services</h2>

        <div style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "30px"
        }}>

          <div style={cardStyle}>🦷 Dental Check-ups</div>
          <div style={cardStyle}>✨ Teeth Whitening</div>
          <div style={cardStyle}>🪥 Cleaning & Scaling</div>
          <div style={cardStyle}>🦴 Braces & Alignment</div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{
        padding: "60px 20px",
        background: "#f8f8f8",
        textAlign: "center"
      }}>
        <h2>Why Choose Us?</h2>

        <p style={{ maxWidth: "600px", margin: "auto", marginTop: "20px" }}>
          We combine modern dental technology with experienced professionals
          to ensure safe, comfortable and effective treatments for every patient.
        </p>
      </section>

      {/* CTA SECTION */}
      <section style={{
        padding: "60px 20px",
        textAlign: "center"
      }}>
        <h2>Ready for a healthier smile?</h2>

        <a href="/booking">
          <button style={{
            marginTop: "20px",
            padding: "12px 25px",
            fontSize: "16px",
            cursor: "pointer",
            border: "none",
            background: "#38a169",
            color: "white",
            borderRadius: "6px"
          }}>
            Book Now
          </button>
        </a>
      </section>

    </div>
  );
}

const cardStyle = {
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  minWidth: "180px",
  textAlign: "center",
  background: "white"
};