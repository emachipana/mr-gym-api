import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    dni: {
      type: Number,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    },
    plan: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Plan"
      }
    ],
    days_remaining: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 0
    },
    user_type: {
      type: String,
      default: "client"
    },
    phone: {
      type: Number,
      required: true
    },
    address: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

// function to encrypt password
userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10)
  await bcrypt.hash(password, salt);
};

// function to compare passwords
userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
}

// function to encrypt password when user is updated
userSchema.pre("save", async (next) => {
  const user = this;
  // stop function if password has not been modified
  if(!user.isModified("password")) {
    return next();
  }

  // encrypt password and update this
  const hash = await bcrypt.hash(user.password, 10);
  user.password = hash;
  next();
});

const User = mongoose.model("User", userSchema);

export default User;
