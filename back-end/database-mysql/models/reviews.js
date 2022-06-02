const connection = require("../index");
module.exports = {

  getReviews: function(callback){
    const sql ="SELECT * FROM review ";
    connection.query(sql,(err, result) =>{ callback(err, result)}
    );
  },
  postReviews: function (
    first_name,
    last_name,
    description,
    image,
    adress,
    created_at,
    callback
  ) {
    const sql =
      "INSERT INTO review  ( first_name,last_name,description,image,adress,created_at)  Values (?,?,?,?,?,?) ";
    connection.query(
      sql,
      [first_name, last_name, description, image, adress, created_at],
      (err, result) => callback(err, result)
    );
  },
  deleteReview: (id, callback) => {
    const sql = "DELETE FROM review WHERE review_id = ?;";
    connection.query(sql, id, (err, result) => {
      callback(err, result);
    });
  },


  updateReview: (
    first_name,
    last_name,
    description,
    image,
    adress,
    created_at,
    review_id,
    callback
  ) => {
    const sql =
      " UPDATE review SET first_name=? , last_name=?, description=?, image =?, adress=?,created_at=? WHERE review_id = ?;";
    connection.query(
      sql,
      [first_name, last_name, description, image, adress,created_at, review_id],
      (err, result) => {
        callback(err, result);
      }
    );
  },
};
