// Set up MySQL connection.
const mysql = require("mysql");

const connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "Badminton1!",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
    if (err) {
      console.error("<----------------CONNECTION ERROR------------------>\n\n" + err.stack);
      return;
    }
    console.log("You are connected as id " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;