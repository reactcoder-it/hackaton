module.exports = {
  PORT: process.env.PORT || 3000,
  BASE_URL: process.env.BASE_URL || "http://localhost:3000",
  API_URL: process.env.API_URL || "http://localhost:3000/api",
  DB_URI: process.env.DB_URI || "mongodb://root:8tDd548k43@ds151817.mlab.com:51817/hackaton",
  JWT_SECRET: process.env.JWT_SECRET || "SUPER SECRET JWT SECRET",
  NODE_ENV: process.env.NODE_ENV || "development"
};