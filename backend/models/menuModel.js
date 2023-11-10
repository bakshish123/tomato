import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const menuSchema = mongoose.Schema(
  {
    items: [itemSchema],
  },
  {
    timestamps: true,
  }
);

const Menu = mongoose.model("Menu", menuSchema);
export default Menu;
