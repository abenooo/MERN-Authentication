// 
const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoDB_URL");

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("Mongo connected successfully");
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;

