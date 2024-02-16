import dotenv from "dotenv";

dotenv.config();

const config = {
  db: {
    username: process.env.DB_USER_NAME || "root",
    password: process.env.DB_PASSWORD || "password",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 27017,
    database: process.env.DB_NAME || "Test",
  },
};

export default config;
