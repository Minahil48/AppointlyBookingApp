import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const HotelDetails = () => {
  const { id } = useParams();
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [bookingMessage, setBookingMessage] = useState("");

  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/hotels/${id}`);
        const data = await response.json();
        setSelectedHotel(data);
      } catch (error) {
        console.error("Failed to fetch hotel details", error);
      }
    };

    fetchHotelDetails();
  }, [id]);

  const handleBooking = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setBookingMessage("Please log in to book.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          hotelId: selectedHotel._id,
          date: selectedDate,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setBookingMessage("Booking successful!");
        setSelectedHotel((prev) => ({
          ...prev,
          availableDates: [
            ...prev.availableDates.filter((d) => d !== selectedDate),
            ...(result.newDate ? [result.newDate] : []),
          ].sort(),
        }));
        setSelectedDate("");
      } else {
        setBookingMessage(result.message || "Booking failed.");
      }
    } catch (error) {
      console.error("Booking error:", error);
      setBookingMessage("Something went wrong during booking.");
    }
  };

  if (!selectedHotel) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* ✅ Use image path from /public/images/ */}
        <img
          src={selectedHotel.image}
          alt={selectedHotel.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{selectedHotel.name}</h2>
          <p className="text-gray-700 mb-4">
            {selectedHotel.description || "No description available."}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Price per night:</strong> ${selectedHotel.price}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Luxuries:</strong>{" "}
            {selectedHotel.features?.length
              ? selectedHotel.features.join(", ")
              : "No luxuries mentioned."}
          </p>

          <label htmlFor="date" className="block mb-2 font-medium">
            Select a date:
          </label>
          <select
            id="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="mb-4 p-2 border rounded w-full"
          >
            <option value="">-- Choose a date --</option>
            {selectedHotel.availableDates?.map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </select>

          <button
            onClick={handleBooking}
            disabled={!selectedDate}
            className="bg-yellow-500 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Book Now
          </button>

          {bookingMessage && (
            <p className="mt-4 text-blue-600 font-medium">{bookingMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
