const connection = require("../index");
module.exports = {
  signup: function (
    first_name,
    last_name,
    email,
    password,
    role,
    created_at,
    callback
  ) {
    const sql =
      "INSERT INTO Admins (first_name, last_name,email,password,role,created_at) VALUES (?,?,?,?,?,?)";
    connection.query(
      sql,
      [first_name, last_name, email, password, role, created_at],
      (err, result) => {
        callback(err, result);
      }
    );
  },
  getAllFirstName: function (first_name, callback) {
    const sql = "SELECT * FROM  Admins WHERE first_name = ? ";
    connection.query(sql, [first_name], (err, result) => {
      callback(err, result);
    });
  },

  getRole: (email, callback) => {
    const sql = "SELECT role FROM Admins WHERE email =?";
    connection.query(sql, [email], (err, result) => {
      callback(err, result);
    });
  },
  getAllLastName: function (last_name, callback) {
    const sql = "SELECT * FROM  Admins WHERE last_name = ? ";
    connection.query(sql, [last_name], (err, result) => {
      callback(err, result);
    });
  },
  getAllEmails: function (email, callback) {
    const sql = "SELECT * FROM  Admins WHERE email = ? ";
    connection.query(sql, [email], (err, result) => {
      callback(err, result);
    });
  },
  signupWithoutimg: (username, email, password, callback) => {
    const sql =
      "INSERT INTO Admins (first_name,last_name,email,password,role) VALUES (?,?,?,?,?)";
    connection.query(sql, [username, email, password], (err, result) => {
      callback(err, result);
    });
  },
  getPasswordByEmail: (email, callback) => {
    const sql = "SELECT password FROM Admins WHERE email = ?;";
    connection.query(sql, [email], (err, result) => {
      callback(err, result);
    });
  },
};
