// backend/models/Hotel.js
const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  imageKey: {
    type: String,
    required: true, // e.g. 'beachside-paradise'
  },
  tagline: {
    type: String,
    default: "",
  },
  features: {
    type: [String],
    default: [],
  },
  availableDates: {
    type: [String],
    default: [],
  },
});

module.exports = mongoose.model("Hotel", hotelSchema);
