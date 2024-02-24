import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log("mongoDb connected ");
  } catch (error) {
    console.log("MongoD Connection Error ", error);
    console.log("dp url ",process.env.MONGODB_URL);
  }
};

export default connectDB;