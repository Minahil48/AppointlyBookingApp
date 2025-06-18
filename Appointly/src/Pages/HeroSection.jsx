import React from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero-image.jpg";
import HotelCards from "./HotelCards";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/listings");
  };

  return (
    <div className="hero-section font-sans">
      {/* Hero Banner */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in">
            Your Next Adventure Awaits
          </h1>
          <p className="text-md sm:text-lg md:text-xl max-w-2xl mb-8 font-light tracking-wide animate-fade-in-slow">
            Discover handpicked hostels that blend comfort, style, and unforgettable experiences.
          </p>

          {/* Cool CTA Button */}
          <button
            onClick={handleExploreClick}
            className="mt-4 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-orange-500 hover:to-amber-400 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-2xl transition-all duration-300 animate-pop"
          >
            Start Exploring
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
            Why Travelers Love Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Affordable Luxury",
                icon: (
                  <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8c0-.34-.03-.67-.08-1H10V2z" />
                ),
                description: "Stylish stays at pocket‑friendly prices.",
              },
              {
                title: "Central Locations",
                icon: <path d="M4 4h12v2H4V4zm0 4h8v2H4V8zm0 4h12v2H4v‑2z" />,
                description: "Steps away from attractions and nightlife.",
              },
              {
                title: "Service Excellence",
                icon: <path d="M9 12l2‑2 4 4m0‑5V3H5v6l4‑4 2 2 4‑4v8z" />,
                description: "Hospitality that feels like home.",
              },
            ].map(({ title, icon, description }) => (
              <div
                key={title}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all border border-transparent hover:border-amber-400"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-amber-100 p-4 rounded-full">
                    <svg className="w-8 h-8 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      {icon}
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-amber-500">
                  {title}
                </h3>
                <p className="text-gray-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Cards Section */}
      <HotelCards />
    </div>
  );
};

export default HeroSection;
