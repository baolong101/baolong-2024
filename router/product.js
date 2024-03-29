import express from 'express';
import { products } from '../models/product.js'; 
import { checkValidateProduct } from '../middleware/product.js';
import permission from '../middleware/permission.js';
import { addProduct, putProduct, getProduct, deleteproduct } from '../controller/product.js';


const router = express.Router();
router.post('/products', permission,checkValidateProduct, addProduct)
router.get('/products',getProduct)
router.put('/products/:id',putProduct)
router.delete('/products/:id',deleteproduct)
export default router;