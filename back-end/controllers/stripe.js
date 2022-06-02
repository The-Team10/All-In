require("dotenv").config();
const router = require("express").Router();
require("dotenv").config();
const jwt = require("jsonwebtoken");

const stripe = require("stripe")(process.env.STRIPE_API_SECRET_KEY);


const helpgiver =  require("../database-mysql/models/helpgiver")
const bcrypt = require("bcrypt");
require("dotenv").config();
module.exports = {

    payFinancial: async (req, res) => {
        const {first_name, last_name,amount,phone}=req.body;
        if(!first_name || !last_name || !amount || !phone){
            res.send("fill all the field");
        } else {
                    const session = await stripe.checkout.sessions.create({
                      payment_method_types: ["card"],
                      line_helpgiver: [
                        {
                          price_data: {
                            currency: "eur",
                            product_data: {
                              name: first_name
                             },
                            unit_amount: amount * 100,
                          },
                          last_name: last_name,
                          quantity: quantity,
                        },
                      ],
                   
                      mode: "payment",
                      success_url: "http://localhost:3000",
                      cancel_url: "http://localhost:3000",
                    });
                    res.send(session);
                  }
            },
            verify: function (req, res, next) {
                const bearerHeader = req.headers["authorization"];
                if (typeof bearerHeader !== "undefined") {
                  const bearer = bearerHeader.split(" ");
                  const bearerToken = bearer[1];
                  req.token = bearerToken;
                  next();
                } else {
                  res.sendStatus(403);
                }
              },
        }

    


