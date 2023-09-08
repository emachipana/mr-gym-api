import mongoose from "mongoose";

// schema
const planSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: mongoose.Schema.Types.Decimal128,
      required: true
    },
    benefits: {
      type: String,
      required: true
    },
    remaining: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

// model
const Plan = mongoose.model("Plan", planSchema);

export default Plan;
