const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// GET all bookings
router.get("/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ date: -1 });
    res.json(bookings);
  } catch (err) {
    console.error("❌ Error fetching bookings:", err.message);
    res.status(500).json({ message: "Failed to fetch bookings" });
  }
});

// DELETE booking by ID
router.delete("/bookings/:id", async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: "Booking deleted" });
  } catch (err) {
    console.error("❌ Error deleting booking:", err.message);
    res.status(500).json({ message: "Failed to delete booking" });
  }
});

// PUT update booking date
router.put("/bookings/:id", async (req, res) => {
  try {
    const { date } = req.body;
    const updated = await Booking.findByIdAndUpdate(
      req.params.id,
      { date },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    console.error("❌ Error updating booking:", err.message);
    res.status(500).json({ message: "Failed to update booking" });
  }
});

module.exports = router;
