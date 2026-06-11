import React, { useState } from 'react';

export default function FloatingWhatsApp() {
  const [isFloatHovered, setIsFloatHovered] = useState(false);

  return (
    <a
      href="https://wa.me/254717107733"
      target="_blank"
      rel="noreferrer"
      title="Chat with us on WhatsApp"
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        zIndex: 9999,
        transition: "all 0.2s ease-out",
        transform: isFloatHovered ? "scale(1.08)" : "scale(1)",
        boxShadow: isFloatHovered 
          ? "0 15px 35px rgba(0,0,0,0.4)" 
          : "0 10px 25px rgba(0,0,0,0.25)",
        cursor: "pointer"
      }}
      onMouseEnter={() => setIsFloatHovered(true)}
      onMouseLeave={() => setIsFloatHovered(false)}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#ffffff">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.945 0c3.171.001 6.151 1.237 8.391 3.482 2.241 2.246 3.475 5.23 3.475 8.42 0 6.551-5.337 11.899-11.887 11.899-2.001-.001-3.974-.509-5.731-1.478L0 24zm6.302-3.53l.363.216c1.585.94 3.415 1.437 5.283 1.438 5.485 0 9.947-4.471 9.952-9.967.002-2.661-1.03-5.163-2.905-7.042C17.126 3.237 14.63 2.204 11.949 2.204c-5.495 0-9.96 4.47-9.965 9.963-.001 1.942.5 3.827 1.448 5.474l.237.412-1.01 3.693 3.699-.972z" />
      </svg>
    </a>
  );
}