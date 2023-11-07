import express from "express";
import { authUser, registerUser } from "../controllers/userController";

const router = express.Router();

router.route("/auth").post(authUser);
router.route("/").post(registerUser);
