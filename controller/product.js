import { products } from "../models/product.js";

export const addProduct= async (req,res)=>{
    const product = await new products(req.body).save();
    res.send({status: true, data:product});    
}

export const getProduct=async(req,res)=>{
    try {
        const page= req.query.page;
        const limit= req.query.limit;
        // if(page){
            const responsive= await products.find().skip((page-1)*limit).limit(limit);
                res.status(200).send(responsive)
        // }else{
        //     const response = await products.find({price: {$gt:2000}}).sort({price: 1});
        // res.send(response)
        // }
    } catch (error) {
        res.status(503).send({status: false, message: "loi"+error})
    }
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