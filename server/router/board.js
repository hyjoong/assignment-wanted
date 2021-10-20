import express from "express";
import "express-async-errors";

const boards = [
  {
    id: "0",
    text: "Test ",
    name: "hyun",
  },
  {
    id: "1",
    text: "Test2 ",
    name: "hyun2",
  },
  {
    id: "2",
    text: "Test3 ",
    name: "hyun3",
  },
];

const router = express.Router();

// 게시글 조회
router.get("/", (req, res, next) => {
  const name = req.query.name;
  const data = name ? boards.filter((board) => board.name === name) : boards;
  res.status(200).json(data);
});

export default router;
