const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// GET /api/bookings-list/:hotelId
router.get("/:hotelId", async (req, res) => {
  try {
    const bookings = await Booking.find({ hotel: req.params.hotelId });
    const bookedDates = bookings.map((b) => b.date);
    res.json(bookedDates);
  } catch (error) {
    console.error("Failed to fetch bookings:", error.message);
    res.status(500).json({ message: "Error fetching bookings" });
  }
});

module.exports = router;
