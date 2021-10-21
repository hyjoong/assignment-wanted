import express from "express";
import {} from "express-async-errors";
import { body } from "express-validator";
import { validate } from "../middleware/validator.js";
import * as authController from "../controller/auth.js";

const router = express.Router();

const validateCredential = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("name should be at least 5 characters"),
  body("password")
    .trim()
    .isLength({ min: 5 })
    .withMessage("password should be at least 5 characters"),
  validate,
];
const validateSignup = [...validateCredential, validate];

router.post("/signup", authController.signup);

router.post("/login", authController.login);

export default router;
