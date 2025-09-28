import "dotenv/config";
import express from "express";
import { connectDB } from "./connection.js";

const app = express();
const PORT = process.env.PORT ?? 8000;

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
  connectDB();
});
