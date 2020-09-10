const { Pool } = require("pg");
const PG_CONNECTION_STRING =
  process.env.PG_CONNECTION_STRING ||
  "postgresql://postgres:dev_password@localhost:25432/postgres";
const pool = new Pool({
  connectionString: PG_CONNECTION_STRING,
});

pool.on("connect", () => {
  console.info(`Connected to database with URL: ${PG_CONNECTION_STRING}`);
});

const query = (text, params) => pool.query(text, params);

module.exports = {
  query,
};
