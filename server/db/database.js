import mysql from "mysql2";
import SQ from "sequelize";

export const sequelize = new SQ.Sequelize();

const pool = mysql.createPool({
  host,
  user,
  database,
  password,
});

export const db = pool.promise();
