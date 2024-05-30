import express from "express";
import {
  getCategories,
  saveCategory,
  updateCategory,
  deleteCategory,
} from "../controller/categories.js";

const router = express.Router();

router.get("/consult-categories/:id", getCategories);
router.post("/save-category", saveCategory);
router.put("/update-category", updateCategory);
router.delete("/delete-category/:id", deleteCategory);

export default router;
