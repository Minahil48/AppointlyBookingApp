// routes/booking.js
const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const Hotel = require("../models/Hotel");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, async (req, res) => {
  const { hotelId, date } = req.body;

  try {
    const hotel = await Hotel.findById(hotelId);
    if (!hotel) return res.status(404).json({ message: "Hotel not found" });

    if (!hotel.availableDates.includes(date)) {
      return res.status(400).json({ message: "Date is no longer available" });
    }

    const booking = new Booking({
      userId: req.user.id,
      hotelId,
      hotelName: hotel.name,
      hotelPrice: hotel.price,
      date,
    });

    await booking.save();

    hotel.availableDates = hotel.availableDates.filter((d) => d !== date);

    // Add new random future date
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + Math.floor(Math.random() * 30 + 10));
    const newDate = futureDate.toISOString().split("T")[0];

    hotel.availableDates.push(newDate);
    await hotel.save();

    res.status(201).json({ message: "Booking successful", newDate });
  } catch (err) {
    console.error("❌ Booking error:", err.message);
    res.status(500).json({ message: "Booking failed" });
  }
});

module.exports = router;
