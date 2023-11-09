import path from "path";
import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import menuRoutes from "./routes/menuRoutes.js";
import restaurantRotues from "./routes/restaurantRoutes.js";
import connectToDB from "./config/db.js";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
const PORT = 5000;
connectToDB();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/restaurant", restaurantRotues);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
