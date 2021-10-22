import SQ from "sequelize";
import { sequelize } from "../db/database.js";
import { User } from "./auth.js";
//import { db } from "../db/database.js";

const DataTypes = SQ.DataTypes;
const Sequalize = SQ.Sequelize;

const Board = sequelize.define("board", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Board.belongsTo(User);

// const SELECT_JOIN =
//   "SELECT board.id, board.text, board.createdAt, board.userId, users.name FROM board JOIN users ON board.userId=users.id ";
//const ORDER_DESC = "ORDER BY board.createdAt DESC";

const INCLUDE_USER = {
  attributes: [
    "id",
    "text",
    "createdAt",
    "userId",
    [Sequalize.col("user.name"), "name"],
  ],
  include: {
    model: User,
    attributes: [],
  },
};
const ORDER_DESC = {
  order: [["createdAt", "DESC"]],
};

export const getAll = async () => {
  return Board.findAll({ ...INCLUDE_USER, ...ORDER_DESC });

  // return db
  //   .execute(`${SELECT_JOIN} ${ORDER_DESC}`) //
  //   .then((result) => result[0]);
};

export const getAllByName = async (name) => {
  return Board.findAll({
    ...INCLUDE_USER,
    ...ORDER_DESC,
    include: {
      ...INCLUDE_USER.include,
      where: { name },
    },
  });
  // return db
  //   .execute(`${SELECT_JOIN} WHERE name=? ${ORDER_DESC}`, [name]) //
  //   .then((result) => result[0]);
};

export const getById = async (id) => {
  return Board.findOne({
    where: { id },
    ...INCLUDE_USER,
  });
  // return db
  //   .execute(`${SELECT_JOIN} WHERE board.id=?`, [id]) //
  //   .then((result) => result[0][0]);
};

export const create = async (text, userId) => {
  return Board.create({ text, userId }) //
    .then((data) => this.getById(data.dataValues.id));

  // return db;
  //   .execute("INSERT INTO board (text,createdAt,userId) VALUES(?,?,?)", [
  //     text,
  //     new Date(),
  //     userId,
  //   ])
  //   .then((result) => result[0].insertId);
};

export const update = async (id, text) => {
  return Board.findByPk(id, INCLUDE_USER) //
    .then((board) => {
      board.text = text;
      return board.save();
    });
  // return db
  //   .execute("UPDATE board SET text=? WHERE id=?", [text, id])
  //   .then(() => getById(id));
};

export const remove = async (id) => {
  return Board.findByPk(id) //
    .then((board) => {
      board.destroy();
    });
};
