import React, { useState } from 'react';

export default function InfoCard({ title, children, darkVariant = false }) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    background: darkVariant ? "#0f2038" : "#ffffff",
    padding: "35px 30px",
    borderRadius: "6px",
    boxShadow: isHovered 
      ? "0 12px 30px rgba(15, 32, 56, 0.08)" 
      : "0 4px 20px rgba(0, 0, 0, 0.03)",
    borderTop: `3px solid ${darkVariant ? "#D4AF37" : "transparent"}`,
    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
    transform: isHovered ? "translateY(-4px)" : "translateY(0)"
  };

  const titleStyle = {
    color: darkVariant ? "#D4AF37" : "#0f2038",
    fontSize: "20px",
    fontWeight: "bold",
    margin: "0 0 12px 0",
    letterSpacing: "-0.3px"
  };

  const bodyStyle = {
    color: darkVariant ? "#cbd5e1" : "#475569",
    fontSize: "15px",
    lineHeight: "1.7",
    margin: 0
  };

  return (
    <div 
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 style={titleStyle}>{title}</h3>
      <p style={bodyStyle}>{children}</p>
    </div>
  );
}