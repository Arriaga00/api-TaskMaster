import { Router } from "express";
import { changePassword } from "../controller/changePassword.js";

const router = Router();

router.post("/chagnge-password", changePassword);

export default router;
