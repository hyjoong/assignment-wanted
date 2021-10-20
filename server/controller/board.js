import * as boardRepository from "../data/board.js";

export const getBoards = (req, res) => {
  const name = req.query.name;
  const data = name
    ? boardRepository.getAllByName(name)
    : boardRepository.getAll();
  res.status(200).json(data);
};

export const getBoard = (req, res, next) => {
  const id = req.params.id;
  const board = boardRepository.getAll(id);
  if (board) {
    res.status(200).json(board);
  } else {
    res
      .status(404)
      .josn({ message: `id가 ${id}인 게시글을 찾지 못 하였습니다. ` });
  }
};

export const createBoard = (req, res, next) => {
  const { text, name } = req.body;
  const board = boardRepository.create(text, name);
  res.status(201).json(board);
};

export const updateBoard = (req, res, next) => {
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
};

export const deleteBoard = (req, res, next) => {
  const id = req.params.id;
  boardRepository.remove(id);
  res.sendStatus(204);
};
