import mongoose from "mongoose";

// schema
const registerSchema = new mongoose.Schema(
  {
    user: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    entry: {
      type: Date,
      default: Date.now
    },
    exit: {
      type: Date,
      required: true
    },
    takes: {
      type: [],
      default: []
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

// model
const Register = mongoose.model("Register", registerSchema);

export default Register;
