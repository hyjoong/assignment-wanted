let users = [
  {
    id: "1",
    name: "ssssss",
    password: "123456",
  },
];

export async function findByName(name) {
  return users.find((user) => user.name === name);
}

export async function findById(id) {
  return users.find((user) => user.id === id);
}

export async function createUser(user) {
  const created = { ...user, id: Date.now().toString() };
  users.push(created);
  return created.id;
}
