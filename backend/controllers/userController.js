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

export const getUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404);
      throw new Error("User not found");
    }
    const { password, ...rest } = user._doc;
    res.status(200).json(rest);
  } catch (err) {
    res.status(500).json(err);
  }
});

export const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  if (id === req.user._id.toString()) {
    if (password) {
      const hashedPassword = bcrypt.hashSync(password, 10);
      req.body.password = hashedPassword;
    }
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    const { password: pass, ...rest } = user._doc;
    res.status(200).json(rest);
  } else {
    res.status(401);
    throw new Error("You can only edit your account");
  }
});

export const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (id === req.user._id.toString()) {
    await User.findByIdAndDelete(id);
    res.status(200).json("User has been deleted");
  } else {
    res.status(401);
    throw new Error("You can only delete your account");
  }
});


//added some changes
// Path: tomato/backend/utils/generateToken.js
