import mongoose from "mongoose";

const booksSchema= new mongoose.Schema({
    name:String,
    price:Number,
    description:String,
    image: String,
    author: String
})


const booksModel=mongoose.model('books', booksSchema)
export default booksModel