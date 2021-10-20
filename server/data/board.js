let boards = [
  {
    id: "0",
    text: "Test ",
    name: "hyun",
  },
  {
    id: "1",
    text: "Test2sss ",
    name: "hyun2sz",
  },
  {
    id: "2",
    text: "Test3 ",
    name: "hyun3",
  },
];

export const getAllByName = (name) => {
  return boards.filter((board) => board.name === name);
};

export const getAll = () => {
  return boards;
};

export const getAllById = (id) => {
  return boards.find((board) => board.id === id);
};

export const create = (text, name) => {
  const board = {
    id: Date.now().toString(),
    text,
    name,
  };
  boards = [board, ...boards];
  return board;
};

export const update = (id, text) => {
  const board = boards.find((board) => board.id === id);
  if (board) {
    board.text = text;
  }
  return board;
};

export const remove = (id) => {
  boards = boards.filter((board) => board.id !== id);
};
