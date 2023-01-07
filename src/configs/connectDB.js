// get the client
import mysql from "mysql2/promise";

// create the connection to database
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "nodebasic",
});

// simple query
// connection.query("SELECT * FROM `users` ", function (err, results, fields) {
//   console.log(results); // results contains rows returned by server
// });

export default pool;
