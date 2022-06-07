const connection = require("../index")
module.exports ={ 
    getHealth: function(callback){
        const sql ="SELECT * FROM categories";
        connection.query(sql,(err, result) =>{ callback(err, result)}
        );
      },
    postHealth : function(
      nameCategorie,
     callback 
    )
    {const sql = 
        "INSERT INTO categories( nameCategorie) Values (?)";
        connection.query(
            sql,
            [ nameCategorie],
                 (err, result) => {
            callback(err, result)
        }
        );
      },
      getEduction: function(callback){
        const sql ="SELECT * FROM education";
        connection.query(sql,(err, result) =>{ callback(err, result)}
        );
      },
      postEducation : function(
        nameCategorie,
       callback 
      )
      {const sql = 
          "INSERT INTO education( nameCategorie) Values (?)";
          connection.query(
              sql,
              [ nameCategorie],
                   (err, result) => {
              callback(err, result)
          }
          );
        },
        getSocial: function(callback){
            const sql ="SELECT * FROM social ";
            connection.query(sql,(err, result) =>{ callback(err, result)}
            );
          },
        postSocial: function(
            nameCategorie,
           callback 
          )
          {const sql = 
              "INSERT INTO social( nameCategorie) Values (?)";
              connection.query(
                  sql,
                  [ nameCategorie],
                       (err, result) => {
                  callback(err, result)
              }
              );
            },
    }  
    