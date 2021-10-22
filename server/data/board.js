import { db } from "../db/database.js";

const SELECT_JOIN =
  "SELECT board.id, board.text, board.createdAt, board.userId, users.name FROM board JOIN users ON board.userId=users.id ";
const ORDER_DESC = "ORDER BY board.createdAt DESC";

export const getAll = async () => {
  return db
    .execute(`${SELECT_JOIN} ${ORDER_DESC}`) //
    .then((result) => result[0]);
};

export const getAllByName = async (name) => {
  return db
    .execute(`${SELECT_JOIN} WHERE name=? ${ORDER_DESC}`, [name]) //
    .then((result) => result[0]);
};

export const getAllById = async (id) => {
  return db
    .execute(`${SELECT_JOIN} WHERE board.id=?`, [id]) //
    .then((result) => result[0][0]);
};

export const create = async (text, userId) => {
  return db
    .execute("INSERT INTO board (text,createdAt,userId) VALUES(?,?,?)", [
      text,
      new Date(),
      userId,
    ])
    .then((result) => result[0].insertId);
};

export const update = async (id, text) => {
  return db
    .execute("UPDATE board SET text=? WHERE id=?", [text, id])
    .then(() => getAllById(id));
};

export const remove = async (id) => {
  return db.execute("DELETE FROM board WHERE id=?", [id]);
};
