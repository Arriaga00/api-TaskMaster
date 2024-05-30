import { Router } from "express";
import { login } from "../controller/auth.js";
const router = Router();

router.post("/register", login);

export default router;
