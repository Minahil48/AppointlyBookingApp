const express = require("express");
const router = express.Router();
const Hotel = require("../models/Hotel");

// @route   GET /api/hotels
// @desc    Get all hotels
// @access  Public
router.get("/", async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (error) {
    console.error("❌ Error fetching hotels:", error.message);
    res.status(500).json({ message: "Error fetching hotels" });
  }
});

// @route   GET /api/hotels/:id
// @desc    Get a hotel by ID
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) return res.status(404).json({ message: "Hotel not found" });
    res.json(hotel);
  } catch (error) {
    console.error("❌ Error fetching hotel by ID:", error.message);
    res.status(500).json({ message: "Error fetching hotel" });
  }
});

// @route   POST /api/hotels
// @desc    Add a new hotel (admin)
// @access  Private (if using auth)
router.post("/", async (req, res) => {
  try {
    const newHotel = new Hotel(req.body);
    await newHotel.save();
    res.status(201).json(newHotel);
  } catch (error) {
    console.error("❌ Failed to add hotel:", error.message);
    res.status(500).json({ message: "Failed to add hotel" });
  }
});

// @route   GET /api/hotels/seed
// @desc    (Optional) Seed sample hotel
// @access  Public (only for development)
router.get("/seed", async (req, res) => {
  try {
    await Hotel.deleteMany(); // Optional clear

    const hotel = new Hotel({
      name: "Sunset Resort",
      destination: "Murree",
      price: 180,
      rating: 4.5,
      imageKey: "sunset-resort", // ✅ CORRECTED
      tagline: "Mountain views & peaceful stay",
      features: ["WiFi", "Heating", "Room Service"],
      availableDates: ["2025-06-20", "2025-06-25", "2025-07-01"],
    });

    await hotel.save();
    res.send("✅ Hotel seeded");
  } catch (err) {
    console.error("❌ Seeding failed:", err.message);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
