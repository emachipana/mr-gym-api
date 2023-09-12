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
      type: Number,
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

// change id name
planSchema.methods.toJSON = function() {
  const { _id, ...user } = this.toObject();

  return { id: _id, ...user };
}

// model
const Plan = mongoose.model("Plan", planSchema);

export default Plan;
