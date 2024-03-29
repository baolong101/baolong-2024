import { products } from "../models/product.js";

export const addProduct= async (req,res)=>{
    const product = await new products(req.body).save();
    res.send({status: true, data:product});    
}

export const getProduct=async(req,res)=>{
    const response = await products.find();
    res.send(response)
}

export const putProduct=async(req,res)=>{
    const id = req.params.id;
    const body = req.body;
    const response = await products.findOneAndUpdate({_id:id},body,{new:true});
    res.send(response)
}

export const deleteproduct=async(req,res)=>{
    const id = req.params.id;
    const response = await products.findOneAndDelete({_id:id});
    res.send(response)
}