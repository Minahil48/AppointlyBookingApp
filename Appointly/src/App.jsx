import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HeroSection from "./Pages/HeroSection";
import HotelDetails from "./Pages/HotelDetails";
import Listing from "./Pages/Listing";
import Contact from "./Pages/Contact";
import LoginPage from "./Pages/LoginPage";
import AdminDashboard from "./Pages/AdminDashboard"; // ✅ Imported

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/listings" element={<Listing />} />
            <Route path="/listings/:id" element={<HotelDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} /> {/* ✅ New route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
