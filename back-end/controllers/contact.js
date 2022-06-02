const contact = require("../database-mysql/models/contact");
require("dotenv").config();
module.exports={
    contact :  function (req,res) {
        const  {
            first_name, last_name,adressEmail, phone,adress,description
        }= req.body
        console.log(req.body);

     contact.postContact( first_name, last_name,adressEmail, phone,adress,description,(err,result)=>{
            if (err){
                res.send(err)
            } else {
                res.json('sended succsseful')
                console.log(result)
            } 
        })

    }
}