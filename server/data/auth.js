import { db } from "../db/database.js";

export async function findByEmail(email) {
  return db
    .execute("SELECT * FROM users WHERE email=?", [email])
    .then((result) => result[0][0]);
}

export async function findById(id) {
  return db
    .execute("SELECT * FROM users WHERE id=?", [id]) //
    .then((result) => result[0][0]);
}

export async function createUser(user) {
  const { name, email, password } = user;
  return db
    .execute("INSERT INTO users (name,email,password) VALUES (?,?,?)", [
      name,
      email,
      password,
    ])
    .then((res) => {
      res[0].insertId;
    });
}
