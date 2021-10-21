import express from "express";
import {} from "express-async-errors";
import jwt from "jsonwebtoken";
import * as authController from "../data/auth.js";

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);

export default router;
