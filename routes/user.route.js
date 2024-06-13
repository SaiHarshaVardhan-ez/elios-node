import express from "express";
import {
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";

const router = express.Router();
router.post("/create-user", createUser);
router.post("/update-user", updateUser);
router.get("/delete-user", deleteUser);

export default router;
