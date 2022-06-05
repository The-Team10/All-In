const connection = require("../index")
module.exports ={ 
    postNeeds : function(
      first_name,
      last_name,
        CIN,
        description,
        phone,
        adress,
        date,
        region,
        categorie,
      created_at ,
      callback 
    )
    {const sql = 
        "INSERT INTO postneeds (first_name,last_name, CIN,description,phone,adress,date,region,categorie,created_at) Values (?,?,?,?,?,?,?,?,?,?)";
        connection.query(
            sql,
            [first_name,last_name,CIN,description,phone,adress,date,region,categorie,created_at],
                 (err, result) => {
            callback(err, result)
        }
        );
      },
    }  
    