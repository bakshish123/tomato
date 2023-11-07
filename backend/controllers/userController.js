import asyncHandler from "express-async-handler";
import { generateToken } from "../utils/generateToken.js";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
export const authUser = asyncHandler(async (req, res) => {});
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const hashedPassword = bcrypt.hashSync(password, 10);
  const user = await User.create({
    name,
    email,
    hashedPassword,
  });
  if (user) {
    generateToken(user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

export const signInUser = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404);
      throw new Error("User not found");
    }
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      res.status(401);
      throw new Error("Invalid Credentials");
    }
    const token = generateToken(user._id);
    const { password: pass, ...rest } = user._doc;
    res.status(200).json({ ...rest, token });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Path: tomato/backend/utils/generateToken.js
