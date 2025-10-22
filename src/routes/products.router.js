import { Router } from "express";
import { getCategory, getAllProducts, getProductsByCategory } from "../controllers/products.controller.js";

const router = Router();

router.get('/categoria', getCategory);
router.get('/', getAllProducts);
router.get('/:category', getProductsByCategory);

export default router;