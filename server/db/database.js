import mysql from "mysql2";
import { config } from "../config.js";
//import SQ from "sequelize";

//export const sequelize = new SQ.Sequelize();

const pool = mysql.createPool({
  host: config.db.host,
  user: config.db.user,
  database: config.db.database,
  password: config.db.password,
});

export const db = pool.promise();
