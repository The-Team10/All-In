const events = require('../database-mysql/models/events')
require("dotenv").config();
module.exports = {
    getEvents: function (req,res){
        events.getEvents((err, result) =>{
          if(err){return res.send(err)}
          res.send(result)
        })
          },
    postEvent :  function (req,res) {
        const  {
            eventName,category,description,date,amount,
        }= req.body
        
      events.postEvent(eventName,category,description,date,amount,(err,result)=>{
            if (err){
                res.send(err)
            } else {
                res.json(' event sended succsseful')
            } 
        })
    }
}