import mongoose from "mongoose";

const videoSchema= new mongoose.Schema({
    title:String,
    author:String,
    url:String,
    duration: Number
})
const videoModel=mongoose.model('video', videoSchema)
export default videoModel