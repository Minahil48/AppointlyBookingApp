const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const authHeader = req.header("Authorization");
  if (!authHeader) return res.status(401).json({ message: "No token provided" });

  const [, token] = authHeader.split(" ");
  if (!token) return res.status(401).json({ message: "Token missing" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // jwt payload must include user id
    next();
  } catch (err) {
    console.error("Auth error:", err);
    res.status(401).json({ message: "Token is invalid" });
  }
};
