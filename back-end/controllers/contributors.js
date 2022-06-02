const contributors = require("../database-mysql/models/contributors");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");
module.exports = {
  signupHelp: async function (req, res) {
  console.log("test register controller");
    const { first_name, last_name, email, password, role, photo, anonyme } =
      req.body;
    console.log(req.body);
    const created_at = new Date();
    if (!email || !password || !first_name || !last_name || !role) {
      res.send("please fill all required fields");
    } else {
      contributors.getAllFirstName(first_name, (err, result) => {
        // console.log(result,'result');
        if (err) {
          res.send(err);
        } else if (result.length > 0) {
          res.send("this name exist");
        } else {
          contributors.getAllLastName(last_name, (err, result) => {
            
            if (err) {
              res.send(err);
            } else if (result.length > 0) {
              res.send("this last name exist");
            } else {
              contributors.getAllEmails(email, async (err, result) => {
                if (err) {
                  res.send(err);
                } else if (result.length > 0) {
                  res.send("this email exixt");
                } else {
                  try {
                    const salt = await bcrypt.genSalt();
                    const hashedPassword = await bcrypt.hash(password, salt.toString());
                  
                  
                    contributors.signup(first_name,
                      last_name,
                      email,
                      hashedPassword,
                      role,
                      photo,
                      anonyme,
                      created_at, (err) => {
                      if (err) {
                       
                        res.send(err);
                      } else {
                       
                        res.send("signup successful");
                        
                      }
                    });
                  } catch (err) {
                    res.send(err);
                  }
                }
              });
            }
          });
        }
      });
    }
  },
  loginHelp: async function (req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.send("Please fill all the fields");
    } else {
      contributors.getAllEmails(email, (err, result) => {
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
                  res.send("login failed");
                }
                if (result === true) {
                  contributors.getRole(email, (err, result) => {
                    if (err) {
                      return res.send(err);
                    }
                    if (result[0].role === "help seekers") {
                      return res.send(" hi help seekers");
                    }
                    if (result[0].role == "help giver") {
                      return res.send("hi hel giver  hg");
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

  decodeToken: (req, res) => {
    let token = req.headers.token;
    var decoded = jwt.decode(token);
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, result) => {
      if (err) {
        return res.send(err);
      } else {
        const sql = "select * from Contributors WHERE email =?";
        contributors.getAllEmails(decoded.user.email, (err, result) => {
          if (err) {
            return res.send(err);
          } else {
            res.send(result);
          }
        });
      }
    });
  },

  updateContributor: async function (req, res) {
    const { first_name, last_name, email } = req.body;
    const { contributor_id } = req.params;

    contributors.updateContributor(
      first_name,
      last_name,
      email,
      contributor_id,
      (err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.send("updated successful");
        }
      }
    );
  },
};
