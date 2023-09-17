import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://auharshitsingh:3_quLXiS%nh)PCR@cluster0.dxerl1w.mongodb.net/"
    );
    console.log("Connected to Db");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDb;
