const helpseekers = require('../database-mysql/models/helpseekers')
require("dotenv").config();
module.exports = {
    helpseekers :  function (req,res) {
        const  {
            first_name,last_name,CIN,description,phone,adress,date,region,categorie,
        }= req.body
        const created_at = new Date();
        helpseekers.postNeeds( first_name,last_name,CIN,description,phone,adress,date,region,categorie,created_at,(err,result)=>{
            if (err){
                res.send(err)
            } else {
                res.json('sended succsseful')
            } 
        })
    }
}