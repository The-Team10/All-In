const connection = require("../index")
module.exports ={ 
    postContact : function(
        
        first_name,
        last_name,
        adressEmail,
        phone,
        adress,
        description,
        callback 
    )
    {const sql = 
        "INSERT INTO Contact (first_name, last_name, adressEmail,phone,adress, description) Values (?,?,?,?,?,?)";
        connection.query(
            sql,
            [first_name, last_name,adressEmail, phone,adress,description],
                 (err, result) => {
            callback(err, result)
        }
        );
      },
    }  
 