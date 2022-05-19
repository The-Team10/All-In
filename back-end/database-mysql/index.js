

var mysql = require('mysql2');
require("dotenv").config()




var connection = mysql.createConnection({
  host     : 'localhost',
  user     : process.env.MYSQL_USERNAME,
  password : process.env.MYSQL_PASSWORD, // go to the env.js file and update your password
  database : 'all-in1'
});


connection.connect((err, success) => {
  err ? console.log("connection failed", err) : console.log("Database connected successfully")
})
module.exports = connection;










