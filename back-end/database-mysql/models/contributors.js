const connection = require("../index");
module.exports = {
  signup: function (
    first_name, last_name,email,password,role,photo,anonyme,created_at,
    callback
  ) {
    const sql =
      "INSERT INTO contributors (first_name, last_name,email,password,role,photo,anonyme,created_at) VALUES (?,?,?,?,?,?,?,?)";
    connection.query(
      sql,
      [first_name, last_name,email,password,role,photo,anonyme,created_at],
      (err, result) => {
        callback(err, result);
      }
    );
  },
  getAllFirstName: function (first_name, callback) {
    const sql = "SELECT * FROM  Contributors WHERE first_name = ? ";
    connection.query(sql, [first_name], (err, result) => {
      callback(err, result);
    });
  },

  getRole: (email, callback) => {
    const sql = "SELECT role FROM contributors WHERE email =?";
    connection.query(sql, [email], (err, result) => {
      callback(err, result);
    });
  },
  getAllLastName: function (last_name, callback) {
    const sql = "SELECT * FROM  Contributors WHERE last_name = ? ";
    connection.query(sql, [last_name], (err, result) => {
      callback(err, result);
    });
  },
  getAllEmails: function (email, callback) {
    const sql = "SELECT * FROM  Contributors WHERE email = ? ";
    connection.query(sql, [email], (err, result) => {
      callback(err, result);
    });
  },

  getPasswordByEmail: (email, callback) => {
    const sql = "SELECT password FROM Contributors WHERE email = ?;";
    connection.query(sql, [email], (err, result) => {
      callback(err, result);
    });
  },
  updateContributor: (
    first_name,
    last_name,
    email,
    contributor_id,
    callback
  ) => {
    const sql =
      " UPDATE Contributors SET first_name=? , last_name=?, email=? WHERE contributor_id = ?;";
    connection.query(
      sql,
      [first_name, last_name,email ,contributor_id],
      (err, result) => {
        callback(err, result);
      }
    );
  },
};

