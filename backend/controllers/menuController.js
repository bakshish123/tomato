import asyncHandler from "express-async-handler";
import Menu from "../models/menuModel";
import errorHandler from "../utils/errorHandler";
const getMenuItem = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const menuItems = await Menu.findById(id);
  if (!menuItems) {
    const error = new Error("Menu Item not found");
    error.status = 404;
    next(error);
    return;
  }
  res.status(200).json(menuItems);
});

export default getMenuItem;
