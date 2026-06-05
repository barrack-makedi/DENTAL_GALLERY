export default function Dentist() {
  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
        maxWidth: "1100px",
        margin: "auto"
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        Meet Our Head Dentist
      </h1>

      <div
        style={{
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
          alignItems: "center"
        }}
      >
        {/* Dentist Image */}
        <div>
          <img
            alt="Head Dentist"
            style={{
              width: "320px",
              borderRadius: "20px",
              objectFit: "cover"
            }}
          />
        </div>

        {/* Dentist Details */}
        <div style={{ flex: 1 }}>
          <h2>Dr. Linda Ngunjiri</h2>

          <p style={{ color: "#555" }}>
            Chief Dental Surgeon & Founder of Dental Gallery
          </p>

          <p>
            At Dental Gallery, we are committed to delivering
            exceptional dental care with compassion, professionalism,
            and modern technology.
          </p>

          <div style={{ marginTop: "30px" }}>
            <h3>🎓 Education</h3>
            <ul>
              <li>Bachelor of Dental Surgery (BDS)</li>
              <li>University of Nairobi</li>
              <li>Advanced Cosmetic Dentistry Training</li>
            </ul>

            <h3>🏅 Credentials</h3>
            <ul>
              <li>Licensed Dental Practitioner</li>
              <li>Certified Cosmetic Dentist</li>
            </ul>

            <h3>🌍 Professional Memberships</h3>
            <ul>
              <li>Kenya Dental Association (KDA)</li>
              <li>FDI World Dental Federation</li>
            </ul>

            <h3>🦷 Experience</h3>
            <p>
              Over 10 years of experience in preventive,
              cosmetic, and restorative dentistry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}