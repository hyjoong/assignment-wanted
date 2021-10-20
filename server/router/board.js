import express from "express";
import "express-async-errors";
import * as boardRepository from "../data/board.js";
import * as boardController from "../controller/board.js";

const router = express.Router();

// 게시글 조회

// GET /boards & /boards?name=:name
router.get("/", boardController.getBoards);

// /boards/:id
router.get("/:id", boardController.getBoard);

// POST
router.post("/", boardController.createBoard);

// PUT    /boards/:id
router.put("/:id", boardController.updateBoard);

// DELETE  /boards/:id
router.delete("/:id", boardController.deleteBoard);

export default router;
