import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function Booking() {
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: "" });

  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    email: "",
    service: "checkup",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus({ success: null, message: "" });

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/appointments/create/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit appointment");
      }

      const data = await response.json();
      console.log("Saved:", data);

      setSubmitStatus({
        success: true,
        message: "Your request has been successfully received. Our clinic team will call you shortly to confirm."
      });

      setFormData({
        full_name: "",
        phone: "",
        email: "",
        service: "checkup",
        message: ""
      });
    } catch (error) {
      console.error(error);
      setSubmitStatus({
        success: false,
        message: "An error occurred while routing your appointment query. Please verify details or try again."
      });
    } finally {
      setLoading(false); // FIXED: was loading(false) instead of setLoading(false)
    }
  };

  const getFieldStyle = (fieldName) => ({
    ...inputStyle,
    border: focusedField === fieldName ? "1px solid #D4AF37" : "1px solid rgba(255, 255, 255, 0.25)",
    boxShadow: focusedField === fieldName ? "0 0 0 3px rgba(212, 175, 55, 0.25)" : "none"
  });

  return (
    <>
      <Helmet>
        <title>The Dental Gallery | Book Appointment - Schedule Your Visit</title>
        <meta name="description" content="Book your dental appointment at The Dental Gallery in Lavington, Nairobi. Schedule a consultation for checkups, cleaning, whitening, braces, or surgery. Our team will confirm your preferred time." />
        <meta name="keywords" content="book dental appointment, dentist appointment Nairobi, schedule dental checkup, teeth cleaning booking, dental consultation Lavington" />
        <meta property="og:title" content="The Dental Gallery | Book Your Appointment" />
        <meta property="og:description" content="Take the first step toward a healthier, brighter smile. Submit your appointment request and our concierge clinical team will contact you shortly." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thedentalgallery.com/booking" />
        <meta property="og:image" content="/images/logo3.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div
        style={{
          width: "100%",
          minHeight: "100vh", 
          fontFamily: "Arial, sans-serif",
          backgroundImage:
            "linear-gradient(rgba(15, 32, 56, 0.35), rgba(15, 32, 56, 0.35)), url('/images/image3.png')",
          backgroundSize: "cover",
          backgroundPosition: "left bottom",
          backgroundRepeat: "no-repeat",
          padding: "140px 20px 100px 20px",
          boxSizing: "border-box"
        }}
      >
        {/* SECTION HEADER */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <span style={goldLabelStyle}>Priority Consultations</span>
          <h1 style={heroTitleStyle}>Appointments</h1>
          <p style={heroSubtitleStyle}>
            Take the first step toward a healthier, brighter smile. Submit your
            appointment request and our concierge clinical team will contact you shortly.
          </p>
          <div style={decorativeDividerStyle} />
        </div>

        {/* GLASSMORPHISM CARD CONTAINER */}
        <div style={formCardContainerStyle}>
          <h2 style={formHeadingStyle}>Book Your Visit</h2>
          <p style={formDescriptionStyle}>
            Complete the administrative fields below and our clinical team will coordinate 
            with you to lock down your preferred hours.
          </p>

          <form onSubmit={handleSubmit} style={formStyle}>
            <div>
              <label style={labelStyle}>Full Name *</label>
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                onFocus={() => setFocusedField("full_name")}
                onBlur={() => setFocusedField(null)}
                placeholder="Enter your full name"
                required
                style={getFieldStyle("full_name")}
              />
            </div>

            <div style={contactGroup}>
              <div style={{ flex: "1 1 260px" }}>
                <label style={labelStyle}>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="+254 712 345 678"
                  required
                  style={getFieldStyle("phone")}
                />
              </div>

              <div style={{ flex: "1 1 260px" }}>
                <label style={labelStyle}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="example@email.com"
                  style={getFieldStyle("email")}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Requested Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                onFocus={() => setFocusedField("service")}
                onBlur={() => setFocusedField(null)}
                style={{
                  ...getFieldStyle("service"),
                  cursor: "pointer"
                }}
              >
                <option value="checkup" style={dropdownOptionStyle}>Dental Check-up & Consultation</option>
                <option value="cleaning" style={dropdownOptionStyle}>Professional Teeth Cleaning</option>
                <option value="whitening" style={dropdownOptionStyle}>Teeth Whitening</option>
                <option value="braces" style={dropdownOptionStyle}>Braces & Aligners Consultation</option>
                <option value="extraction" style={dropdownOptionStyle}>Tooth Extraction / Surgery</option>
              </select>
            </div>

            <div>
              <label style={labelStyle}>Additional Notes / Dental Concerns</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                rows="4"
                placeholder="Tell us about your dental concerns..."
                style={{
                  ...getFieldStyle("message"),
                  resize: "vertical"
                }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                ...submitBtn,
                opacity: loading ? 0.7 : 1,
                cursor: loading ? "not-allowed" : "pointer"
              }}
            >
              {loading ? "Processing Intake..." : "Request Appointment"}
            </button>

            {/* INLINE STATUS RESPONSES */}
            {submitStatus.message && (
              <div 
                style={{
                  ...statusBannerStyle,
                  background: submitStatus.success ? "rgba(240, 253, 244, 0.2)" : "rgba(254, 242, 242, 0.2)",
                  border: submitStatus.success ? "1px solid rgba(187, 247, 208, 0.4)" : "1px solid rgba(254, 202, 202, 0.4)",
                  color: submitStatus.success ? "#bbf7d0" : "#fecaca"
                }}
              >
                {submitStatus.success ? "✓ " : "✕ "} {submitStatus.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

// --- ARCHITECTURAL STYLE SPECIFICATIONS ---

const goldLabelStyle = {
  color: "#D4AF37",
  fontSize: "12px",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "4px",
  display: "inline-block",
  marginBottom: "12px"
};

const heroTitleStyle = {
  fontSize: "52px",
  color: "#ffffff",
  marginBottom: "15px",
  fontWeight: "bold",
  letterSpacing: "-1px"
};

const heroSubtitleStyle = {
  color: "#ffffff",
  fontSize: "17px",
  maxWidth: "620px",
  margin: "0 auto",
  lineHeight: "1.7",
  textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)"
};

const decorativeDividerStyle = {
  width: "40px",
  height: "3px",
  background: "#D4AF37",
  margin: "30px auto 0 auto"
};

const formCardContainerStyle = {
  maxWidth: "680px",
  margin: "0 auto",
  background: "rgba(15, 32, 56, 0.65)",
  backdropFilter: "blur(25px)",
  WebkitBackdropFilter: "blur(25px)",
  borderRadius: "16px",
  padding: "45px 50px",
  boxShadow: "0 40px 80px rgba(0, 0, 0, 0.45)",
  border: "1px solid rgba(255, 255, 255, 0.15)"
};

const formHeadingStyle = {
  textAlign: "center",
  color: "#ffffff",
  margin: "0 0 10px 0",
  fontSize: "32px",
  fontWeight: "bold",
  letterSpacing: "-0.5px"
};

const formDescriptionStyle = {
  textAlign: "center",
  color: "#e2e8f0",
  margin: "0 0 35px 0",
  fontSize: "15px",
  lineHeight: "1.6"
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "22px"
};

const contactGroup = {
  display: "flex",
  flexWrap: "wrap",
  gap: "22px"
};

const labelStyle = {
  display: "block",
  marginBottom: "8px",
  color: "#ffffff",
  fontWeight: "bold",
  fontSize: "13px",
  textTransform: "uppercase",
  letterSpacing: "0.5px"
};

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "6px",
  fontSize: "15px",
  boxSizing: "border-box",
  color: "#ffffff",
  background: "rgba(255, 255, 255, 0.1)",
  outline: "none",
  transition: "all 0.2s ease-in-out"
};

const dropdownOptionStyle = {
  background: "#0f2038",
  color: "#ffffff",
  padding: "12px"
};

const submitBtn = {
  background: "#D4AF37",
  color: "#0f2038",
  border: "none",
  padding: "16px",
  borderRadius: "6px",
  fontSize: "14px",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "1px",
  marginTop: "8px",
  boxShadow: "0 4px 15px rgba(212, 175, 55, 0.4)",
  transition: "all 0.2s ease"
};

const statusBannerStyle = {
  padding: "16px",
  borderRadius: "6px",
  fontSize: "14px",
  lineHeight: "1.5",
  marginTop: "10px",
  backdropFilter: "blur(5px)"
};