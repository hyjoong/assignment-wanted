import express from "express";
import "express-async-errors";
import * as boardRepository from "../data/board.js";
import * as boardController from "../controller/board.js";
import { isAuth } from "../middleware/auth.js";

const router = express.Router();

// 게시글 조회

// GET /boards & /boards?name=:name
router.get("/", isAuth, boardController.getBoards);

// /boards/:id
router.get("/:id", isAuth, boardController.getBoard);

// POST
router.post("/", isAuth, boardController.createBoard);

// PUT    /boards/:id
router.put("/:id", isAuth, boardController.updateBoard);

// DELETE  /boards/:id
router.delete("/:id", isAuth, boardController.deleteBoard);

export default router;
