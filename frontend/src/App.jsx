import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CTA from "./components/CTA"; // Imported your luxury CTA component
import Home from "./pages/Home";
import About from "./pages/About";
import Dentist from "./pages/Dentist";
import Blog from "./pages/Blog";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import BlogPost from "./pages/BlogPost";

function App() {
  const location = useLocation();

  // Hide the CTA if the user is already on the booking page
  const showCTA = location.pathname !== "/Booking";

  return (
    <div>
      {/* Pinned continuously at the top */}
      <Navbar />
      
      {/* Dynamic page area */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dentist" element={<Dentist />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
       
      {/* Only displays if the path is NOT /booking */}
      {showCTA && <CTA />}

      {/* Pinned continuously at the bottom of every page! */}
      {/* Note: Removing the top border from the footer component will make it merge flawlessly with this CTA */}
      <Footer />
    </div>
  );
}

export default App;