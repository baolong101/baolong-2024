import express from 'express';
import router from './router/product.js';
import connectdb from './database/connect.js';
import videorouter from './router/video.js';
import Authrouter from './router/auth.js';
import booksrouter from './router/books.js';
import books from './ASM1/router/book.js';
import Auth from './ASM1/router/auth.js';
const app = express();
const port = 3000;
app.use(express.json())
app.use('/api',router);
app.use('/api',videorouter);
app.use('/api',Authrouter);
app.use('/api',booksrouter);
app.use('/api',books);
app.use('/api',Auth);
app.listen(port,async ()=>{
    await connectdb();
    console.log(`Endpoint http://localhost:${port}/api/products`);
}) 