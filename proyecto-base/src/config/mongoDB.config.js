import mongoose from "mongoose";
mongoose.connect(envs.MONGO_URL);

export const connectMongoDB = async () => {
  try {
      mongoose.connect(envs.MONGO_URL);
      console.log("MongoDB connected");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}