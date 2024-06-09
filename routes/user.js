import { Router } from "express";
import {
  getUsers,
  saveUser,
  updateUser,
  deleteUser,
  getUser,
} from "../controller/user.js";
import multer from "multer";

const upload = multer({ dest: "/uploads" });

const router = Router();

router.get("/consult-users", getUsers);
router.get("/get-user/:id", getUser);
router.post("/save-user", upload.single("image"), saveUser);
router.put("/update-user", updateUser);
router.delete("/delete-user/:id", deleteUser);

export default router;
