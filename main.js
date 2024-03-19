import express from 'express';
import router from './router/product.js';
import connectdb from './database/connect.js';
import videorouter from './router/video.js';
const app = express();
const port = 3000;
app.use(express.json())
app.use('/api',router);
app.use('/api',videorouter);
app.listen(port,async ()=>{
    await connectdb();
    console.log(`Endpoint http://localhost:${port}/api/products`);
}) 