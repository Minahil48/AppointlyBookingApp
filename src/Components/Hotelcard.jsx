import React from "react";
import oceanHotelImage from "../assets/oceanhotel.jpg";
import mountainHotelImage from "../assets/mountainhotel.jpg";
import beachHotelImage from "../assets/beachhotel.jpg";
import cityHotelImage from "../assets/cityhotel.jpg";

const hotels = [
  {
    id: 1,
    name: "Ocean View Resort",
    destination: "Maldives",
    price: 300,
    rating: 4.8,
    image: oceanHotelImage,
  },
  {
    id: 2,
    name: "Mountain Retreat",
    destination: "Swiss Alps",
    price: 250,
    rating: 4.5,
    image: mountainHotelImage,
  },
  {
    id: 3,
    name: "City Escape Hotel",
    destination: "New York",
    price: 220,
    rating: 4.7,
    image: cityHotelImage,
  },
  {
    id: 4,
    name: "Beachside Paradise",
    destination: "Hawaii",
    price: 350,
    rating: 4.9,
    image: beachHotelImage,
  },
];

const HotelCards = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-12">
          Popular Hotels
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6"
            >
              <div className="relative">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-48 object-cover rounded-2xl mb-4"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{hotel.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{hotel.destination}</p>
              <div className="flex items-center mb-4">
                <div className="flex items-center text-yellow-500">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-4 h-4 ${index < hotel.rating ? "text-yellow-500" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 15l-5.25 3.125 1.5-6.125L.5 6.625l6.25-.5L10 0l3.75 5.625 6.25.5-5.25 5.375 1.5 6.125L10 15z"
                      />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-500 text-xs">({hotel.rating})</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold text-gray-800">${hotel.price}/night</p>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-full transition duration-300 text-xs">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelCards;
