import express from "express";
import { createUserProfile } from "../controllers/userProfile.controller.js";

import multer from "multer";
import path from 'path';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'uploads/profile_pics/');
  },
  filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

const router = express.Router();
router.post("/create-user-profile", upload.single('profile_pic'), createUserProfile);
export default router;