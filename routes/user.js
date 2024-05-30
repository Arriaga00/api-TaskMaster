import { Router } from "express";
import {
  getUsers,
  saveUser,
  updateUser,
  deleteUser,
} from "../controller/user.js";
import multer from "multer";

const upload = multer({ dest: "/uploads" });

const router = Router();

router.get("/consult-users", getUsers);
router.post("/save-user", upload.single("image"), saveUser);
router.put("/update-user", updateUser);
router.delete("/delete-user", deleteUser);

export default router;
