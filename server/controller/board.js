import * as boardRepository from "../data/board.js";

export const getBoards = async (req, res) => {
  const name = req.query.name;
  const data = await (name
    ? boardRepository.getAllByName(name)
    : boardRepository.getAll());
  res.status(200).json(data);
};

export const getBoard = async (req, res, next) => {
  const id = req.params.id;
  const board = await boardRepository.getAll(id);
  if (board) {
    res.status(200).json(board);
  } else {
    res.status(404).josn({ message: `Board ${id}id(${id}) not found ` });
  }
};

export const createBoard = async (req, res, next) => {
  const { text } = req.body;
  const board = await boardRepository.create(text, req.userId);
  res.status(201).json(board);
};

export const updateBoard = async (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  const board = await boardRepository.getAllById(id);
  if (!board) {
    return res.status(404).json({ message: `Board not found: ${id}` });
  }
  if (board.userId !== req.userId) {
    return res.sendStatus(403);
  }
  const updated = await boardRepository.update(id, text);
  res.status(200).json(updated);
};

export const deleteBoard = async (req, res, next) => {
  const id = req.params.id;
  const board = await boardRepository.getAllById(id);
  if (!board) {
    return res.status(404).json({ message: `Board not found: ${id}` });
  }
  if (board.userId !== req.userId) {
    return res.sendStatus(403);
  }
  await boardRepository.remove(id);
  res.sendStatus(204);
};
