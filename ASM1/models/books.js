import mongoose from "mongoose";

const booksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  category: {
    type: Number,
    required: true,
  },
});

const booksModel = mongoose.model("productBooks", booksSchema);
export default booksModel;
