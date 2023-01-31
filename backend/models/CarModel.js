import mongoose from "mongoose";

const CarModel = mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    namecar: {
      type: String,
      required: true,
    },
    brandcar: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Car", CarModel);
