// seedHotels.js (CommonJS version)
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Hotel = require("./models/Hotel");

dotenv.config();

const hotels = [
  {
    name: "Ocean View Resort",
    destination: "Maldives",
    price: 300,
    rating: 4.8,
    image: "/images/oceanhotel.jpg",
    tagline: "Wake up to the sound of waves & turquoise horizons.",
    features: ["Free WiFi", "Beach Access", "Infinity Pool"],
    availableDates: ["2025-06-16", "2025-06-18", "2025-06-22"],
  },
  {
    name: "Mountain Retreat",
    destination: "Swiss Alps",
    price: 250,
    rating: 4.5,
    image: "/images/mountainhotel.jpg",
    tagline: "Breathe in fresh alpine air & stunning snowy peaks.",
    features: ["Mountain View", "Breakfast Included", "Spa"],
    availableDates: ["2025-06-17", "2025-06-20", "2025-06-25"],
  },
  {
    name: "City Escape Hotel",
    destination: "New York",
    price: 220,
    rating: 4.7,
    image: "/images/cityhotel.jpg",
    tagline: "Luxury nestled in the heartbeat of the Big Apple.",
    features: ["Near Times Square", "Gym Access", "Free Parking"],
    availableDates: ["2025-06-19", "2025-06-21", "2025-06-24"],
  },
  {
    name: "Beachside Paradise",
    destination: "Hawaii",
    price: 350,
    rating: 4.9,
    image: "/images/beachhotel.jpg",
    tagline: "Tropical charm & sunset serenity await you.",
    features: ["Oceanfront", "Yoga Deck", "All Meals"],
    availableDates: ["2025-06-15", "2025-06-23", "2025-06-26"],
  },
  {
    name: "Tropical Breeze",
    destination: "Thailand",
    price: 180,
    rating: 4.6,
    image: "/images/oceanhotel.jpg",
    tagline: "Exotic vibes, palm trees & island hopping adventures.",
    features: ["Free WiFi", "Shuttle Service", "Breakfast"],
    availableDates: ["2025-06-19", "2025-06-22", "2025-06-27"],
  },
  {
    name: "Alpine Comfort",
    destination: "Switzerland",
    price: 270,
    rating: 4.4,
    image: "/images/mountainhotel.jpg",
    tagline: "Wooden charm with modern comfort near ski slopes.",
    features: ["Heated Rooms", "Sauna", "Parking"],
    availableDates: ["2025-06-20", "2025-06-24", "2025-06-28"],
  },
  {
    name: "Sunset Bay Suites",
    destination: "Santorini",
    price: 320,
    rating: 4.9,
    image: "/images/beachhotel.jpg",
    tagline: "Panoramic sea views & romantic Greek sunsets.",
    features: ["Private Balcony", "Honeymoon Package", "Breakfast"],
    availableDates: ["2025-06-18", "2025-06-22", "2025-06-29"],
  },
];

const seedHotels = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Hotel.deleteMany(); // Clean old data
    await Hotel.insertMany(hotels);
    console.log("✅ Hotels seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Seeding failed:", error.message);
    process.exit(1);
  }
};

seedHotels();
