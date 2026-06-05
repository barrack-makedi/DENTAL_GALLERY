export default function Contact() {
  return (
    <div style={{
      maxWidth: "800px",
      margin: "auto",
      padding: "30px",
      fontFamily: "Arial"
    }}>
      <h1 style={{ textAlign: "center" }}>Contact Us</h1>

      {/* Contact Info Card */}
      <div style={{
        marginTop: "20px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        background: "#fff"
      }}>
        <p>
          📧 Email:{" "}
          <a href="mailto:thedentalgallery.ke@gmail.com">
            thedentalgallery.ke@gmail.com
          </a>
        </p>

        <p>
          📞 Phone:{" "}
          <a href="tel:+254717107733">
            +254 717 107 733
          </a>
        </p>

        <p>
          📍 Location: Covo Square, 2nd Floor, Gitanga Rd - Othaya Rd Junction, Lavington
        </p>
      </div>

      {/* Social Media */}
      <div style={{
        marginTop: "20px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        background: "#fff"
      }}>
        <h3>Follow Us</h3>

        <p>
          📸 Instagram:{" "}
          <a href="https://instagram.com/thedentalgallery.ke" target="_blank">
            @thedentalgallery.ke
          </a>
        </p>

        <p>
          📘 Facebook:{" "}
          <a href="https://facebook.com" target="_blank">
            The Dental Gallery
          </a>
        </p>
      </div>

      {/* WhatsApp Button (VERY IMPORTANT) */}
      <div style={{ marginTop: "25px", textAlign: "center" }}>
        <a
          href="https://wa.me/254717107733"
          target="_blank"
          style={{
            display: "inline-block",
            padding: "12px 20px",
            background: "#25D366",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          💬 Chat on WhatsApp
        </a>
      </div>
      {/* Google Map */}
<div style={{
  marginTop: "25px",
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "12px",
  background: "#fff"
}}>
  <h3>Our Location</h3>

  <iframe
    title="Dental Clinic Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.807216154099!2d36.7732475!3d-1.2899361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1bda77e25549%3A0x955fdcf8716cde6f!2sCovo%20Square!5e0!3m2!1sen!2ske!4v1780641889518!5m2!1sen!2ske"
    width="100%"
    height="300"
    style={{
      border: 0,
      borderRadius: "10px"
    }}
    allowFullScreen
    loading="lazy"
  />
</div>
    </div>
  );
}