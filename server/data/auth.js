import SQ from "sequelize";
import { sequelize } from "../db/database.js";

const DataTypes = SQ.DataTypes;

export const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
  },
  { timestamps: false }
);

export async function findByEmail(email) {
  return User.findOne({ where: { email } });
  // return db
  //   .execute("SELECT * FROM users WHERE email=?", [email])
  //   .then((result) => result[0][0]);
}

export async function findById(id) {
  return User.findByPk(id);
  // return db
  //   .execute("SELECT * FROM users WHERE id=?", [id]) //
  //   .then((result) => result[0][0]);
}

export async function createUser(user) {
  return User.create(user).then((data) => data.dataValues.id);
  // const { name, email, password } = user;
  // return db
  //   .execute("INSERT INTO users (name,email,password) VALUES (?,?,?)", [
  //     name,
  //     email,
  //     password,
  //   ])
  //   .then((res) => {
  //     res[0].insertId;
  //   });
}
