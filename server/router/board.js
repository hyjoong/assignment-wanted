import express from "express";
import "express-async-errors";
import * as boardRepository from "../data/board.js";

const router = express.Router();

// 게시글 조회

// GET /boards & /boards?name=:name
router.get("/", (req, res, next) => {
  const name = req.query.name;
  const data = name
    ? boardRepository.getAllByName(name)
    : boardRepository.getAll();
  res.status(200).json(data);
});

// /boards/:id
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const board = boardRepository.getAll(id);
  if (board) {
    res.status(200).json(board);
  } else {
    res
      .status(404)
      .josn({ message: `id가 ${id}인 게시글을 찾지 못 하였습니다. ` });
  }
});

// POST
router.post("/", (req, res, next) => {
  const { text, name } = req.body;
  const board = boardRepository.create(text, name);
  boards = [board, ...boards];
  res.status(201).json(board);
});

// PUT    /boards/:id
router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  const board = boardRepository.update(id, text);
  if (board) {
    res.status(200).json(board);
  } else {
    res
      .status(404)
      .josn({ message: `id가 ${id}인 게시글을 찾지 못 하였습니다. ` });
  }
});

// DELETE  /boards/:id
router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  boardRepository.remove(id);
  res.sendStatus(204);
});

export default router;
