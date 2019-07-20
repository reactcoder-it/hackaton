module.exports = {
  PORT: process.env.PORT || 3000,
  BASE_URL: process.env.BASE_URL || "http://localhost:3000",
  API_URL: process.env.API_URL || "http://localhost:3000/api",
  DB_URI: process.env.DB_URI || "http://localhost:27017/db",
  JWT_SECRET: process.env.JWT_SECRET || "SUPER SECRET JWT SECRET",
  NODE_ENV: process.env.NODE_ENV || "development"
};