import mongoose from "mongoose";

const restaurantSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
    default:
      "https://b.zmtcdn.com/data/pictures/2/2600702/ab9b7c3f94a5dadd40349c977e0f5392.jpg",
  },
});

const restaurantsSchema = mongoose.Schema(
  {
    items: [restaurantSchema],
  },
  {
    timestamps: true,
  }
);

const Restaurant = mongoose.model("Restaurant", restaurantsSchema);
export default Restaurant;
