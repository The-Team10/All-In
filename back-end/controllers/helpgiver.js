const donationsMaterial = require("../database-mysql/models/helpgiver");
const donationFinanciel = require("../database-mysql/models/helpgiver");
const listNeeds = require("../database-mysql/models/helpgiver")
var cloudinar = require("cloudinary");
const cloudinary = require("../utils/cloudinary");
require("dotenv").config();
module.exports = {
  donnationsMaterial:async (req, res)=> {
    const {
      first_name,
      last_name,
      Donation_name,
      type,
      adress,
      image_url,
      phone,
      description
    } = req.body;
    if (
      !first_name ||
      !last_name ||
      !Donation_name ||
      !type ||
      !adress ||
      !phone
    ) {
      res.send("please fill all required fields");
    } else {
        const created_at = new Date();
try{
    const response = await cloudinar.uploader.upload(
        image_url,
         function (result, err) {
          if (err) {
            res.send(err);
          } else {
            const image_url = result.secure_url;
           donationsMaterial.postMateriels(
             first_name,
             last_name,
             Donation_name,
             type,
             adress,
             image_url,
             created_at,
             phone,
             description,
              (err, results) => {
               if (err) {
                 res.send(err);
               }
               res.send("successfully");
             }
           );
          }
        }
      );
    
}catch{
res.send("err")
}
       
    }
  },

  postFinanciel: async function (req, res) {
    let {
      first_name,
      last_name,
      typeAmount,
      amount,
      category,
      phone,
      description,
    } = req.body;
    const created_at = new Date();
    if (
      !first_name ||
      !last_name ||
      !typeAmount ||
      !amount ||
      !category ||
      !phone 
    ) {
      res.send("please fill all required fields");
    } else {
      donationFinanciel.postFinanciel(
        first_name,
        last_name,
        typeAmount,
        amount,
        category,
        phone,
        description,
        created_at,
        async (err, result) => {
          if (err) {
            res.send(err);
          }
          res.send("financiel added successfully");
        }
      );
    }
  },
  listNeeds: function (req, res) {
    listNeeds.listNeeds((err, result)=>{
       if(err){res.send(err)} 
       res.send(result) 
     })
   },

};
