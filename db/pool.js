const { Pool } = require("pg");


module.exports = new Pool({
  host: "localhost", 
  user: "postgres",
  database: "ia",
  password: "arsh",
  port: 5432 
});