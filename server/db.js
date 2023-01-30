const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Focus93!2",
  host: "localhost",
  port: 5432,
  database: "Review-Residences",
});

module.exports = pool;
