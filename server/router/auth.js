import express from "express";
import {} from "express-async-errors";
import { body } from "express-validator";
import { validate } from "../middleware/validator.js";
import * as authController from "../controller/auth.js";
import { isAuth } from "../middleware/auth.js";

const router = express.Router();

const validateCredential = [
  body("email").notEmpty().withMessage("email is missing"),
  body("password")
    .trim()
    .isLength({ min: 5 })
    .withMessage("password should be at least 5 characters"),
  validate,
];
const validateSignup = [
  ...validateCredential,
  body("name")
    .trim()
    .notEmpty()
    .withMessage("name should be at least 5 characters"),
  validate,
];

router.post("/signup", validateSignup, authController.signup);

router.post("/login", validateCredential, authController.login);
router.get("/me", isAuth, authController.me);
export default router;
