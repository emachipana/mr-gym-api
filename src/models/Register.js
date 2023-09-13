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
    exit: Date,
    takes: {
      type: [],
      default: []
    },
    isGetBack: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

registerSchema.methods.toJSON = function() {
  const { _id, ...user } = this.toObject();

  return { id: _id, ...user };
}

// model
const Register = mongoose.model("Register", registerSchema);

export default Register;
