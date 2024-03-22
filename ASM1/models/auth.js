import mongoose, { Schema } from "mongoose";
const authSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true,
  },
});
export const auth = mongoose.model("auth", authSchema);
