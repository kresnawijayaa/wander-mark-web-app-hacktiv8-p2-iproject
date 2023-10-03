const jwt = require("jsonwebtoken");

const jwt_secret = process.env.JWT_SECRET || "lion_king";

function generateToken(payload) {
  return jwt.sign(payload, jwt_secret);
}

function decodeToken(token) {
  return jwt.verify(token, jwt_secret);
}

module.exports = { generateToken, decodeToken };
