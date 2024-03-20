import express from "express";
import booksModel from "../models/books.js";

const booksrouter = express.Router();

booksrouter.get('/books',async(req,res)=>{
    const response = await booksModel.find();
    res.send(response)
})

booksrouter.post('/books',async(req,res)=>{
    const body = req.body;
      const books = new booksModel(body);
      const response = await books.save();
      res.send(response);
})

booksrouter.put('/books/:id',async(req,res)=>{
    const id = req.params.id;
    const body = req.body;
    const response = await booksModel.findOneAndUpdate({_id:id},body,{new:true});
    res.send(response)
})

booksrouter.delete('/books/:id',async(req,res)=>{
    const id = req.params.id;
    const response = await booksModel.findOneAndDelete({_id:id});
    res.send(response)
})

booksrouter.get('/books/:id', async(req, res) => {
    const id = req.params.id;
    const book = await booksModel.findById(id);
    res.json(book);
});

export default booksrouter