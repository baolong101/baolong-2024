import express from "express";
import booksModel from "../models/books.js";
import { CheckValidateBooks } from "../middleware/books.js";
const books = express.Router();

books.get('/posts',async(req,res)=>{
    const response = await booksModel.find();
    res.send(response)
})

books.post('/posts',CheckValidateBooks ,async(req,res)=>{
    const body = req.body;
      const books = new booksModel(body);
      const response = await books.save();
      res.send(response);
})

books.put('/posts/:id',async(req,res)=>{
    const id = req.params.id;
    const body = req.body;
    const response = await booksModel.findOneAndUpdate({_id:id},body,{new:true});
    res.send(response)
})

books.delete('/posts/:id',async(req,res)=>{
    const id = req.params.id;
    const response = await booksModel.findOneAndDelete({_id:id});
    res.send(response)
})

books.get('/books/:id', async(req, res) => {
    const id = req.params.id;
    const book = await booksModel.findById(id);
    res.json(book);
});

export default books