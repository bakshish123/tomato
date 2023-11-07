import path from "path";
import express from "express";
import dotenv from "dotenv";
import connectToDB from "./config/db.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const PORT = 5000;
connectToDB();


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users",userRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
