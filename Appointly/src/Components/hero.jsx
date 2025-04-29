import React, { useState } from "react";
import heroImage from "../assets/hero-image.jpg";

const HeroSection = () => {
    const [location, setLocation] = useState("");
    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");

    const handleSearch = () => {
        console.log("Searching for hostels in", location, "from", checkInDate, "to", checkOutDate);
    };

    return (
        <div className="hero-section font-sans">
            {/* Hero Section */}
            <section
                className="relative h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                {/* Main Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                        Your Next Adventure Awaits
                    </h1>
                    <p className="text-md sm:text-lg md:text-xl max-w-2xl mb-8 font-light tracking-wide">
                        Find handpicked hostels that blend comfort, style, and unbeatable value to your traveling experience.
                    </p>

                    {/* Booking Form */}
                    <div className="bg-white/70 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-2xl max-w-4xl w-full">
                        <form className="flex flex-col md:flex-row items-center gap-4">
                            <input
                                type="text"
                                placeholder="Where to?"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="flex-1 w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-800 placeholder-gray-500"
                                required
                            />
                            <input
                                type="date"
                                value={checkInDate}
                                onChange={(e) => setCheckInDate(e.target.value)}
                                className="flex-1 w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-800"
                                required
                            />
                            <input
                                type="date"
                                value={checkOutDate}
                                onChange={(e) => setCheckOutDate(e.target.value)}
                                className="flex-1 w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-800"
                                required
                            />
                            <button
                                type="button"
                                onClick={handleSearch}
                                className="bg-amber-400 hover:bg-amber-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 text-base"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-[#FAFAFA]">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
                        Why Travelers Love Us
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all border border-transparent hover:border-amber-400">
                            <div className="flex items-center justify-center mb-6">
                                <div className="bg-amber-100 p-4 rounded-full">
                                    <svg className="w-8 h-8 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8c0-.34-.03-.67-.08-1H10V2z" /></svg>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-amber-500">Affordable Luxury</h3>
                            <p className="text-gray-500">
                                Stylish stays at pocket-friendly prices — because you deserve the best without the splurge.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all border border-transparent hover:border-amber-400">
                            <div className="flex items-center justify-center mb-6">
                                <div className="bg-amber-100 p-4 rounded-full">
                                    <svg className="w-8 h-8 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4h12v2H4V4zm0 4h8v2H4V8zm0 4h12v2H4v-2z" /></svg>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-amber-500">Central Locations</h3>
                            <p className="text-gray-500">
                                Stay steps away from attractions, cafes, nightlife, and all the hidden gems.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all border border-transparent hover:border-amber-400">
                            <div className="flex items-center justify-center mb-6">
                                <div className="bg-amber-100 p-4 rounded-full">
                                    <svg className="w-8 h-8 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9 12l2-2 4 4m0-5V3H5v6l4-4 2 2 4-4v8z" /></svg>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-amber-500">Service Excellence</h3>
                            <p className="text-gray-500">
                                Hospitality that feels like home — personalized attention around the clock.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
