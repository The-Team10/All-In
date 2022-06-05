const connection = require("../index");
module.exports = {
  postMateriels: function (
    first_name,
    last_name,
    Donation_name,
    type,
    adress,
    image_url,
    phone,
    description,
    created_at,
    callback
  ) {
    const sql =
      "INSERT INTO donationsMaterial(first_name, last_name, Donation_name,type,adress,image_url, phone ,description,created_at ) Values (?,?,?,?,?,?,?,?,?)";
    connection.query(
      sql,
      [
        first_name,
        last_name,
        Donation_name,
        type,
        adress,
        image_url,
        phone,
        description,
        created_at,
      ],
      (err, result) => {
        callback(err, result);
      }
    );
  },
  postFinanciel: function (
    first_name,
    last_name,
    typeAmount,
    amount,
    category,
    created_at,
    phone,
    description,
    callback
  ) {
    const sql =
      "INSERT INTO donationsFinancial (first_name,last_name,typeAmount,amount, category, created_at,phone,description)Values (?,?,?,?,?,?,?,?)";
    connection.query(
      sql,
      [
        first_name,
        last_name,
        typeAmount,
        amount,
        category,
        created_at,
        phone,
        description,
      ],
      (err, result) => {
        callback(err, result);
      }
    );
  },
  listNeeds: (callback) => {
    const sql = "SELECT *FROM postNeeds "
    connection.query(sql,(err, result)=>{
      callback(err, result);
    })
  },
};
