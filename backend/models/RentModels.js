import mongoose from "mongoose";

const RentModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    numberphone: {
      type: Number,
      required: true,
    },
    numberid: {
      type: Number,
      required: true,
    },
    address: {
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
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("rents", RentModel);
