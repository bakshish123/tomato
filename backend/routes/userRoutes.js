import express from "express";
import { authUser, registerUser } from "../controllers/userController.js";
const router = express.Router();

router.route("/auth").post(authUser);
router.route("/").post(registerUser);

export default router;
