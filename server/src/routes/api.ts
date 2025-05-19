import express from 'express';
import productRoutes from './productRoutes';
import contactRoutes from './contactRoutes';

const router = express.Router();

router.use('/products', productRoutes); // Routes for products
router.use('/contact', contactRoutes); // Routes for contact form

export default router;