const Admins = require("../database-mysql/models/Admins");
require("dotenv").config();
const bcrypt = require("bcrypt");

module.exports = {
  signupAdmins: async function (req, res) {
    const {
      first_name,
      last_name,
      email,
      password,
      confirmPassword,
      role
      } = req.body;
    console.log(req.body);
    const created_at = new Date();
    if (
      !email ||
      !password ||
      !first_name ||
      !last_name ||
      !confirmPassword ||
      !role
    ) {
      res.send("Welcome On Board");
    } else {
      if (confirmPassword !== password) {
        res.send("please confirm your password");
      } else {
        Admins.getAllFirstName(first_name, async (err, result) => {
          console.log(result);
          if (err) {
            res.send(err);
          } else if (result.length > 0) {
            res.send("this name exist");
          } else {
            Admins.getAllLastName(last_name, async (err, result) => {
              if (err) {
                res.send(err);
              } else if (result.length > 0) {
                res.send("this last name exist");
              } else {
                Admins.getAllEmails(email, async (err, result) => {
                  if (err) {
                    res.send(err);
                  } else if (result.length > 0) {
                    res.send("this email exixt");
                  } else {
                    try {
                      const salt = await bcrypt.genSalt();
                      const hashedPassword = await bcrypt.hash(password, salt);
                      Admins.signup(
                        first_name,
                        last_name,
                        email,
                        hashedPassword,
                        role,
                        created_at,
                        async (err) => {
                          if (err) {
                            res.send(err);
                          } else {
                            res.send("signup successful");
                            return;
                          }
                        }
                      );
                    } catch {
                      res.status(500);
                    }
                  }
                });
              }
            });
          }
        });
      }
    }
  },

  loginAdmins: function (req, res) {
    const { email, password } = req.body;
    console.log(req.body);
    if (!email || !password) {
      return res.send("Please fill all the fields");
    } else {
      Admins.getAllEmails(email, (err, result) => {
        if (err) {
          return res.status(200).send(err);
        }
        if (result.length === 0) {
          return res.send("email not found");
        } else {
          try {
            bcrypt.compare(
              password,
              result[0].password,
              function (err, result) {
                if (err) {
                  res.send(err);
                }
                if (result === false) {
                  res.send({ message: "login failed" });
                }
                if (result === true) {
                  Admins.getRole(email, (err, result) => {
                    if (err) {
                      return res.send(err);
                    }
                    if (result[0].role === "Admins") {
                      return res.send(" hi Admins");
                    }
                    if (result[0].role == "Staff Member") {
                      return res.send("hi Staff Member");
                    } else {
                      res.send("login successful");
                    }
                  });
                }
              }
            );
          } catch (err) {
            res.send(err);
          }
        }
      });
    }
  },
};
