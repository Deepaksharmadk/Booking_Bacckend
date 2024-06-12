import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});
type UserType = {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};
export const User = mongoose.model<UserType>("User", userSchema);
