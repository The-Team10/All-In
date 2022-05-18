const helpseekers = require('../database-mysql/models/helpseekers')
require("dotenv").config();
module.exports = {
    // getHelp: function (req, res) {
    //     helpseekers.getHelp((err, result)=>{
    //        if(err){res.send(err)} 
    //        res.status(200).send(result) 
    //      })
    //    }, 
    signupHelp : async function (req, res) {
        const {email,password,confirmPassword,first_name,last_name} = req.body
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
                        }  else if ( result.length>0){
                            res.send("this email exixt")
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
          return res.status(200).send({message:"Please fill all the fields"})
      } else {
          helpseekers.getAllEmails(email,(err,result)=>{
              if (err){
                  return res.status(200).send(err)
              } else if (! result.length){
                  return res.status(200).send({message:"help seekers not found"});
              } else{
                  helpseekers.getPasswordByEmail(email,(err,result)=>{
                      if (err){
                          return res.status(200).send(err)
                      } else if(!result.length){
                          return res.status(200).send({message:"worng password"})
                      } else if(result){
                          
                      }
                  })
              }
          })
      }
     }

}

