import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Listing = () => {
  const navigate = useNavigate();
  const [hotels, setHotels] = useState([]);
  const [price, setPrice] = useState("");
  const [destination, setDestination] = useState("");

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/hotels");
        const data = await response.json();
        setHotels(data);
      } catch (error) {
        console.error("Error fetching hotels", error);
      }
    };

    fetchHotels();
  }, []);

  const filtered = hotels.filter((hotel) => {
    const matchPrice = price ? hotel.price <= parseInt(price) : true;
    const matchDest = destination
      ? hotel.destination.toLowerCase().includes(destination.toLowerCase())
      : true;
    return matchPrice && matchDest;
  });

  return (
    <div className="bg-white py-20 px-6 min-h-screen">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h2 className="text-sm uppercase tracking-widest text-amber-500 font-semibold mb-2">
          handpicked for your comfort
        </h2>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-4">
          Find Your Dream Stay —
          <br className="hidden sm:inline" />
          <span className="text-amber-500">Where Comfort Meets Experience</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mt-2">
          Browse our curated selection of stunning hotels, resorts, and retreats designed for every kind of traveler. Let your next adventure begin here.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12 max-w-4xl mx-auto">
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Search by destination"
          className="w-full md:w-1/2 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
        <select
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full md:w-1/3 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          <option value="">All Prices</option>
          <option value="200">Under $200</option>
          <option value="300">Under $300</option>
          <option value="400">Under $400</option>
        </select>
      </div>

      {/* Hotel Cards */}
      <div className="max-w-6xl mx-auto space-y-12">
        {filtered.map((hotel) => (
          <div
            key={hotel._id}
            className="flex flex-col md:flex-row bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
          >
            <div className="md:w-1/2 w-full h-72 md:h-auto">
              <img
                src={hotel.image} // ✅ image from /public/images folder
                alt={hotel.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl font-bold text-gray-800">{hotel.name}</h2>
                  <span className="text-yellow-500 font-medium">⭐ {hotel.rating}</span>
                </div>
                <p className="text-sm text-gray-500 mb-1">📍 {hotel.destination}</p>
                <p className="text-gray-600 text-base mb-4">{hotel.tagline}</p>

                <div className="flex flex-wrap gap-2 text-sm mb-4">
                  {hotel.features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4">
                <div className="text-lg text-amber-600 font-semibold">
                  ${hotel.price} / night
                </div>
                <button
                  onClick={() => navigate(`/listings/${hotel._id}`)}
                  className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full transition-all"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 text-lg">
            No hotels match your search filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default Listing;
