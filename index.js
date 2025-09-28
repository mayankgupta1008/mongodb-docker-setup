import "dotenv/config";
import express from "express";
import { connectDB } from "./lib/connection.js";
import userRouter from "./routes/user.route.js";

const app = express();
const PORT = process.env.PORT ?? 8000;

app.use(express.json());

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
  connectDB();
});
