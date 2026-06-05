import { useState } from "react";

export default function Booking() {
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    email: "",
    service: "checkup",
    date: "",
    time: "",
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

  try {
    const response = await fetch("http://127.0.0.1:8000/api/appointments/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    console.log("Saved:", data);

    alert("Appointment booked successfully!");
  } catch (error) {
    console.error(error);
    alert("Error booking appointment");
  }
};

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Book an Appointment</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          maxWidth: "400px"
        }}
      >

        <input
          name="full_name"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />

        <input
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          required
        />

        <input
          name="email"
          placeholder="Email (optional)"
          onChange={handleChange}
        />

        <select name="service" onChange={handleChange}>
          <option value="checkup">Dental Check-up</option>
          <option value="cleaning">Teeth Cleaning</option>
          <option value="whitening">Teeth Whitening</option>
          <option value="braces">Braces Consultation</option>
          <option value="extraction">Tooth Extraction</option>
        </select>

        <input
          type="date"
          name="date"
          onChange={handleChange}
          required
        />

        <input
          type="time"
          name="time"
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Additional message"
          onChange={handleChange}
        />

        <button
          type="submit"
          style={{
            padding: "10px",
            background: "green",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          Submit Appointment
        </button>

      </form>
    </div>
  );
}