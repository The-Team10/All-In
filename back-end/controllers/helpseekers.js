const helpseekers = require('../database-mysql/models/helpseekers')
require("dotenv").config();
const bcrypt = require("bcrypt");



module.exports = {
    // getHelp: function (req, res) {
    //     helpseekers.getHelp((err, result)=>{
    //        if(err){res.send(err)} 
    //        res.status(200).send(result) 
    //      })
    //    }, 
    signupHelp : async function (req, res) {
        const {email,password,confirmPassword,first_name,last_name,role ,status} = req.body
        const created_at = new Date()
        if(!email || !password || !first_name || !last_name || !confirmPassword || !role){
            res.send('please fill all required fields')
        }
     if(confirmPassword !== password) {
        res.send("please confirm your password");
     } else {
        helpseekers.getAllFirstName(first_name,async(err,result)=>{
          if(err){
              res.send(err)
          } else if (result.length>0){
              res.send("this name exist")
          }  else {
              helpseekers.getAllLastName(last_name,async(err,result)=>{
                  if(err){
                      res.send(err)
                  } else if ( result.length>0){
                      res.send("this last name exist")
                  }
                  else{
                      helpseekers.getAllEmails(email,async(err,result)=>{
                        if (err){
                            res.send(err)
                        } if ( result.length>0){
                            res.send("this email exixt")
                        }else{
                            try {
                                      const salt = await bcrypt.genSalt();
                                      const hashedPassword = await bcrypt.hash(
                                        password,
                                        salt
                                      );
                                      helpseekers.signup(
                                       first_name,last_name,email,hashedPassword,role,
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
                      })
                  }
              })

          }
        } )   
     } 
     },


     loginHelp:function (req,res){
      const {email,password}=req.body
      if(! email || ! password){
          return res.send({message:"Please fill all the fields"})
      } else {
          helpseekers.getAllEmails(email,(err,result)=>{
              if (err){
                  return res.status(200).send(err)
              } if (result.length == 0){
                  return res.status(200).send({message:"email not found"});
              } else{
                try {
                    bcrypt.compare(
                      password,
                      result[0].password,
                      function (err, result) {
                        if (err) {
                          res.send(err);
                        }
                        if (result === false) {
                          res.send({message:"login failed"});
                        }
                        if (result === true) {
                          helpseekers.getRole(email, (err, result) => {
                            if (err) {
                              return res.send(err);
                            }
                              if (result[0].role === "help seekers") {
                                return res.send({message:" hi help seekers"});
                                // redierct to help seekers path
                              }if (result[0].role === 'help giver') {
                                return res.send("login successful  hg");
                                // redierct to help giver path
                                
                                helpseekers.getall(email, (err, result) => {
                                  if (err) {
                                    return res.send(err);
                                  } else {
                                    const user = {
                                      id: result[0].id,
                                      name: result[0].first_name,
                                      email: result[0].email,
                                    };
                                    // jwt.sign(
                                    //   { user },
                                    //   process.env.JWT_SECRET_KEY,
                                    //   (err, token) => {
                                    //     if (err) {
                                    //       return res.send(err);
                                    //     }
                                    //     res.send(token);
                                    //   }
                                    // );
                                  }
                                });
                              }else{
                                  res.send('lol')
                              }
                          });
                        }
                      }
                    );
                  } catch (err) {
                    res.send(err);
                  }
              }
          })
      }
     }

}

