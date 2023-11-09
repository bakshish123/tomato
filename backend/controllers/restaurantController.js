import asyncHandler from "express-async-handler";
import Restaurant from "../models/restaurantModel.js";
import errorHandler from "../utils/errorHandler.js";
const getRestaurant = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const restaurant = await Restaurant.findById(id);
  if (!restaurant) {
    const error = new Error("Menu Item not found");
    error.status = 404;
    next(error);
    return;
  }
  res.status(200).json(menuItems);
});

export default getRestaurant;
