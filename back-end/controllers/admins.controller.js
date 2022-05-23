const db = require("../database-mysql");
const admins = require("../database-mysql/models/admins");
require("dotenv").config();
const bcrypt = require("bcrypt");
var cloudinar = require("cloudinary").v2;
const jwt = require("jsonwebtoken");
require("dotenv").config();

//////////

module.exports = {
  signupAdmins: async function (req, res) {
    const { email, password, confirmPassword, first_name, last_name, role } =
      req.body;
    const created_at = new Date();
    if (
      !email ||
      !password ||
      !first_name ||
      !last_name ||
      !confirmPassword ||
      !role
    ) {
      res.send("please fill all required fields");
    } else if (confirmPassword !== password) {
      res.send("please confirm your password");
    } else {
      admins.getAllFirstNames(first_name, async (err, result) => {
        if (err) {
          res.send(err);
        } else if (result.length > 0) {
          res.send("this name exist");
        } else {
          admins.getAllLastNames(last_name, async (err, result) => {
            console.log(result);
            if (err) {
              res.send(err);
            } else if (result.length > 0) {
              res.send("this last name exist");
            } else {
              admins.getAllEmails(emails, async (err, result) => {
                if (err) {
                  res.send(err);
                }
                if (result.length) {
                  res.send("this email exist");
                } else {
                  try {
                    const salt = await bcrypt.genSalt();
                    const hashedPassword = await bcrypt.hash(password, salt);
                    admins.signup(
                      first_name,
                      last_name,
                      email,
                      hashedPassword,
                      role,
                      async (err) => {
                        if (err) {
                          res.send(err);
                        } else {
                          res.send("signup successful");
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
  },

  loginAdmins: function (req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.send({ message: "Please fill all the fields" });
    } else {
      admins.getAllEmails(emails, (err, result) => {
        if (err) {
          return res.status(200).send(err);
        }
        if (result.length == 0) {
          return res.status(200).send({ message: "email not found" });
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
                  admins.getRole(email, (err, result) => {
                    if (err) {
                      return res.send(err);
                    }
                    if (result[0].role === "admins") {
                      return res.send({ message: " welome on boards" });
                      // redierct to help seekers path
                    }
                    if (result[0].role === "staff member") {
                      return res.send("logged in successfully");
                      // redierct to help giver path

                      admins.getall(email, (err, result) => {
                        if (err) {
                          return res.send(err);
                        } else {
                          const user = {
                            id: result[0].id,
                            name: result[0].first_name,
                            email: result[0].email,
                          };
                          jwt.sign(
                            { user },
                            process.env.JWT_SECRET_KEY,
                            (err, token) => {
                              if (err) {
                                return res.send(err);
                              }
                              res.send(token);
                            }
                          );
                        }
                      });
                    } else {
                      res.send("hello");
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
  //  signupAdmin: async function (req, res) {
  //     const { email, password, confirmPassword, username, role } = req.body;
  //     if (!email || !password || !confirmPassword || !username || !role) {
  //       res.status(500).send("fill all the field");
  //     } else {
  //       if (confirmPassword != password) {
  //         return res.status(500).send("confirm your password");
  //       }
  //       admins.getAllNames(username, async (err, result) => {
  //         if (err) {
  //           res.status(500).send(err);
  //         } else if (result.length > 0) {
  //           return res.status(400).send("username already exist");
  //         } else {
  //           admins.getAllEmails(email, async (err, result) => {
  //             if (err) {
  //               res.status(500).send(err);
  //             } else if (result.length > 0) {
  //               return res.status(400).send("email already exist");
  //             } else {
  //               const salt = await bcrypt.genSalt();
  //               const hashedPassword = await bcrypt.hash(password, salt);
  //               admins.signupAdmin(
  //                 username,
  //                 email,
  //                 hashedPassword,
  //                 role,
  //                 (err, result) => {
  //                   if (err) res.status(500).send(err);
  //                   else {
  //                     res.status(200).send("signup successfully ");
  //                   }
  //                 }
  //               );
  //             }
  //           });
  //         }
  //       });
  //     }
  //   },
  //   getAdminByRole: function (req, res) {
  //     const email = req.body.email;
  //     admins.getAdminByRole(email, (err, result) => {
  //       if (err) {
  //         res.status(500).send(err);
  //       }
  //       if (!result.length) {
  //         res.send("not found");
  //       } else if (result[0].role === null) {
  //         res.send("user");
  //       } else {
  //         res.send(result[0].role);
  //       }
  //     });
  //   },
};
