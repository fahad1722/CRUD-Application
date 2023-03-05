import mongoose from "mongoose";
mongoose.set("strictQuery", false);

const Connection = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/fahad");
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error);
  }
};

export default Connection;
