require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "lanja",
    database: process.env.DB_DATABASE || "mobilite_urbaine",
    host: process.env.DB_HOST || "localhost",
    dialect: "postgresql",
  },
  test: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "mickaelio",
    database: process.env.DB_DATABASE || "database_test",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "postgresql",
  },
  production: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "mickaelio",
    database: process.env.DB_DATABASE || "database_production",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "postgresql",
  },
};