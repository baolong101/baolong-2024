import express from 'express';
import upload from '../models/upload.js';
import fs from 'fs'
const uploadrouter = express.Router();
    uploadrouter.post('/upload',upload.any(),(req,res)=>{
        try {
        console.log(req.files);
        const imagename = req.files[0].filename;
        const url = `/file/image/${imagename}`
        res.status(200).send({status:true,image:url})
    } catch (error) {
            
    }
    })
    uploadrouter.get('/image/:filename',(req,res)=>{
        const filename = req.params.filename
        const image = fs.readFileSync(`../upload/${filename}`)
        res.contentType('image/jpeg')
        res.send(image)
    })
export default uploadrouter