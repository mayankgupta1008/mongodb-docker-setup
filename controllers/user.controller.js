import User from "../models/user.model.js";
import { randomBytes, createHmac } from "crypto";

export const signUp = async function (req, res) {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({
    email,
  });

  if (existingUser) {
    res.status(400).json({
      error: "User already exists",
    });
  }

  const salt = randomBytes(256).toString("hex");
  const hashedPassword = createHmac("sha256", salt)
    .update(password)
    .digest("hex");

  const user = await User.insertOne({
    name,
    email,
    password: hashedPassword,
    salt,
  });

  return res.status(201).json({
    message: "User added successfully",
    data: user,
  });
};
