import mongoose from "mongoose";

export const connectDB = async function () {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("Error in connection.js file", error.message);
    throw error;
  }
};
