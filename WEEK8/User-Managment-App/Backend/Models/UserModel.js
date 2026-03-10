import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true
    },
    dateOfBirth: {
      type: Date,
      required: [true, "Date of birth is required"],
    },
    mobileNumber: {
      type: Number,
    },
    status: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true,
    versionKey: false,
    strict: "throw"
  }
);

export const UserModel = model("user", userSchema);