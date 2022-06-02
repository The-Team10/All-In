const rev = require("../database-mysql/models/reviews");
const cloudinary = require("../utils/cloudinary");
var cloudinar = require("cloudinary");
var cloudinar = require("cloudinary").v2;
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  getReviews: function (req,res){
rev.getReviews((err, result) =>{
  if(err){return res.send(err)}
  res.send(result)
})
  },
  postReview: async function (req, res) {
    const { first_name, last_name, description, adress, image } = req.body;
    
    const created_at = new Date();
    if (!first_name || !last_name || !description || !adress) {
      res.send("fill all the field");
    } else {
      try {
        const response = await cloudinar.uploader.upload(
          image,
          async function (err, result) {
            if (err) {
              res.send(err);
            } else {
              const url = result.secure_url;
              rev.postReviews(
                first_name,
                last_name,
                description,
                url,
                adress,
                created_at,

                async (err, result) => {
                  if (err) {
                    res.send(err);
                  }
                   res.send(" your review matter");
                  console.log(result)
                }
              );
            }
          }
        );
      } catch (err) {
        res.send({ err: "you have an error with the server" });
      }
    }
  },
  updateReview: async (req, res)=> {
    const review_id = req.params.id;
    const { first_name, last_name, description, adress, image } = req.body;
    const created_at = new Date();
    if (!first_name || !last_name || !description || !adress) {
      res.send("fill all the field");
    } else {
      const response = await cloudinar.uploader.upload(
        image,
        async function (error, result) {
          if (error) {
            res.send(error);
          }
          const image = result.secure_url;
          rev.updateReview(
            first_name,
            last_name,
            description,
            image,
            adress,
            created_at,
            review_id,
            (err, result) => {
              if (err) {
                res.send(err);
              }
              res.send("items updated successfully");
            }
          );
        }
      );
    }
    
  },
  deleteReview: function (req, res) {
      const id = req.params.id;
      rev. deleteReview(id,(err,result)=>{
          if (err){
              return res.send(err);
          }
          res.send("review deleted successfully");
      })
   
    },

};
