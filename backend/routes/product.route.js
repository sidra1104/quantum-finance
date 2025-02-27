import express from "express";
import mongoose from "mongoose";

import Product from "../models/product.model.js"
import { createProducts, deleteProducts, getProducts, updateProducts } from "../controllers/product.controller.js";

const router = express.Router();

router.put("/:id", updateProducts);

router.get("/", getProducts);

router.post("/", createProducts);

router.delete("/:id", deleteProducts);

export default router;