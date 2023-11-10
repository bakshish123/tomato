import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://dhanraj02025:dhanraj02025@cluster0.exlfftu.mongodb.net/");
    console.log("mongoDB connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
export default connectToDB;