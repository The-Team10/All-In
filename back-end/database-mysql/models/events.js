const connection = require("../index")
module.exports ={ 
  getEvents: function(callback){
    const sql ="SELECT * FROM Events ";
    connection.query(sql,(err, result) =>{ callback(err, result)}
    );
  },
    postEvent : function(
        eventName,
        category,
        description,
        date,
        amount,
      callback 
    )
    {const sql = 
        "INSERT INTO Events (eventName,category,description,date,amount) Values (?,?,?,?,?)";
        connection.query(
            sql,
            [eventName,category,description,date,amount],
                 (err, result) => {
            callback(err, result)
        }
        );
      },
    }  