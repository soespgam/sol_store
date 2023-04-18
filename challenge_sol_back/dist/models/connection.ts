const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "34.136.39.237",
  user: "root",
  password: "moar2314",
  database: "liteth",
});
module.exports = {
  connection,
};
