const connection = require("../index")


module.exports = {
    // getOne: function (id,callback) {
    //     const sql="SELECT * FROM Events where id=?";
    //     conn.query(sql, id,function (err,result){
    //         callback(err,result)
    //     });
    //   }, 
    //   selectManyById: function ( id, callback) {
    //     const sql = "SELECT * FROM Events t1 INNER JOIN users t2 ON t1.user_id = t2.id and t2.id =?";
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

    // add: function (event, callback) {
    //     const sql = "INSERT INTO Events SET ?";
    //     conn.query(sql, event, function (error, results) {
    //         callback(error, results);
    //     });
    // },
    // modifOne: function (event, id, callback) {
    //     const sql = "UPDATE events SET ? WHERE id=?";
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