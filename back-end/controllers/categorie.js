const categorie = require('../database-mysql/models/categorie')
require("dotenv").config();
module.exports = {
    postHealth :  function (req,res) {
        const  {
            nameCategorie ,
        }= req.body
        categorie.postHealth( nameCategorie,(err,result)=>{
            if (err){
                res.send(err)
            } else {
                res.json('sended succsseful')
            } 
        })
    },
    getHealth: function (req,res){
        categorie.getHealth((err, result) =>{
          if(err){return res.send(err)}
          res.send(result)
        })
          },
          postEducation : function (req,res) {
            const  {
                nameCategorie ,
            }= req.body
            categorie.postEducation( nameCategorie,(err,result)=>{
                if (err){
                    res.send(err)
                } else {
                    res.json('sended succsseful')
                } 
            })
        },
        getEducation: function (req,res){
            categorie.getEduction((err, result) =>{
              if(err){return res.send(err)}
              res.send(result)
            })
              },
              postSocial :  function (req,res) {
                const  {
                    nameCategorie ,
                }= req.body
                categorie.postSocial( nameCategorie,(err,result)=>{
                    if (err){
                        res.send(err)
                    } else {
                        res.json('sended succsseful')
                    } 
                })
            },
            getSocial: function (req,res){
                categorie.getSocial((err, result) =>{
                  if(err){return res.send(err)}
                  res.send(result)
                })
                  },
}