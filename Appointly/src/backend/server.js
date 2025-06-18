const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/hotels", require("./routes/hotelRoutes"));
app.use("/api/bookings", require("./routes/booking"));         // POST Booking
app.use("/api/bookings-list", require("./routes/bookings"));   // GET Booked Dates
app.use("/api/admin", require("./routes/admin"));              // Admin bookings

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
