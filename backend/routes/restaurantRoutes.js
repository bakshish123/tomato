import express from "express";
import getRestaurant from "../controllers/restaurantController.js";

const router = express.Router();

router.route("/:id").get(getRestaurant);
export default router;