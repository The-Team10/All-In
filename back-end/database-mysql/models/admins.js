const connection = require("../index")

module.exports = {
    insertAdmin: function (req, res) {
        let { first_name, last_name, email, password, role } = req.body;
        const sql = `INSERT into Admins (first_name,last_name,email,password,role) values (?,?,?,?,?)`;
        db.query(
          sql,
          [first_name, last_name, email, password, role],
          (err, admin) => {
            if (err) res.status(500).send(err);
            else res.status(200).send(admin);
          }
        );
      },
    signup: function (first_name, last_name,email, password,role, callback) {
        const sql = "INSERT into Admins (first_name,last_name,email,password,role) values (?,?,?,?,?)";
        connection.query(sql, [first_name,last_name, email, password,role], (err, result) => {
          callback(err, result);
        });
      },
    getAllAdmins: function(email, callback){
        const sql = "SELECT * FROM `Admins` WHERE email = ?";
        connection.query(sql, [email], function(error, results){
            callback(error, results)
        })
    },

    signupAdmins: function (first_name, last_name, email,password, role){
        const sql = "INSERT INTO Admins (first_name, last_name, email,password, role) VALUES(?,?,?,?,?)"
        connection.query(sql, [first_name, last_name, email,password, role], (err,result)=>{
            callback(err,result)
        })
    },

     getAllFirstNames: function(first_name, callback){
         const sql = "SELECT * FROM Admins WHERE first_name = ?"
          connection.query(sql, [first_name], (err, result) => {
              callback(err, result);
          })
     },

     getAllLastNames: function(last_name, callback){
        const sql = "SELECT * FROM Admins WHERE Last_name = ?"
         connection.query(sql, [last_name], (err, result) => {
             callback(err, result);
         })
    },

    getAllEmails: function(emails, callback){
        const sql = "SELECT * FROM Admins WHERE email = ?"
        connection.query(sql, [emails], (err, result)=>{
            callback(err, result);
        })
    },

    getPasswordByEmail: (email, callback) => {
        const sql = "SELECT password FROM Admins WHERE email = ?"
        connection.query(sql, [email], (err, result)=>{
            callback(err, result)
        })
    },

    getAdminByRole: (email, callback) =>{
        const sql = "SELECT role FROM Admins WHERE email = ?";
        connection.query(sql, [email], (err, result) => {
            callback(err, result);
        })
    },
}