import express from 'express';
import { products } from '../models/product.js';
const router = express.Router();
router.post('/products',async (req,res)=>{
    const body = req.body;    
    const product = await new products(body).save();
    res.send(product);
})
router.get('/products',async(req,res)=>{
    const response = await products.find();
    res.send(response)
})
router.put('/products/:id',async(req,res)=>{
    const id = req.params.id;
    const body = req.body;
    const response = await products.findOneAndUpdate({_id:id},body,{new:true});
    res.send(response)
})
router.delete('/products/:id',async(req,res)=>{
    const id = req.params.id;
    const response = await products.findOneAndDelete({_id:id});
    res.send(response)
})
export default router;