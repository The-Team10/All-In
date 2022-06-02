const connection = require("../index")


module.exports = {
    // getOne: function (id,callback) {
    //     const sql="SELECT * FROM Events where id=?";
    //     conn.query(sql, id,function (err,result){
    //         callback(err,result)
    //     });  
    //   }, 
    //   selectManyById: function ( id, callback) {
    //     const sql = "SELECT * FROM Events WHERE id =?";
    //     conn.query(sql, [id], function (error, results) {
    //         callback(error, results);
    //     });
    // },
    
    // select: function (callback) {
    //     const sql="SELECT * FROM Events";
    //     conn.query(sql, function (err,result){
    //         callback(err,result)
    //     });
    //   },

    add: function (eventName,category,description,date,socialMedia,amount, callback) {
        const sql = "INSERT INTO Events WHERE id = ?";
        conn.query(sql, eventName,category,description,date,socialMedia,amount, function (error, results) {
            callback(error, results);
        });
    },
    // modifyOne: function (event, id, callback) {
    //     const sql = "UPDATE events WHERE id=?";
    //     conn.query(sql, [event, id], function (error, results) {
    //         callback(error, results);
    //     });
    // },
    // deleteOne: function (id, callback) {
    //     const sql = "DELETE FROM events WHERE id = ?";
    //     conn.query(sql, id, function (error, results) {
    //         callback(error, results);
    //     });
    // }
};
// exports.selectManyById(1,(err,result)=>{
//     console.log(result);
// })