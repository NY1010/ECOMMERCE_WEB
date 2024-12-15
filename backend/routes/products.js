import express from 'express';
import { getProducts } from "../controller/productController.js";
const route = express.Router();


router.route("/products").get(getProducts);

export default router;