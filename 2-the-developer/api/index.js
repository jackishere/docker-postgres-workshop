const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser());
const db = require("./db");
const PORT = process.env.PORT || 3000;
const { name, version, description } = require("./package.json");
console.info(
  `Service: name:${name} ,version: ${version} ,description:${description}`
);

app.get("/", (req, res) => {
  console.info(req.method, req.url, req.query);
  res.send("Hello api!");
});

const getUserById = async function (id) {
  const { rows } = await db.query("SELECT * FROM users WHERE id = $1", [id]);
  return rows[0];
};

app.get("/api/users", async (req, res) => {
  const result = await db.query("SELECT * FROM users");
  console.info(req.method, req.url, req.query, result.rows);
  res.send(result.rows);
});

app.get("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  const user = await getUserById(id);
  console.info(req.method, req.url, req.query, req.params, user);
  res.send(user);
});

app.listen(PORT, () => console.info(`Listening to port:${PORT}`));
