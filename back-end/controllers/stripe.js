require("dotenv").config();
const router = require("express").Router();
// require("dotenv").config();
const jwt = require("jsonwebtoken");

const stripe = require("stripe")(process.env.STRIPE_API_SECRET_KEY);

const helpgiver = require("../database-mysql/models/helpgiver");
const bcrypt = require("bcrypt");
require("dotenv").config();
module.exports = {
  payFinancial: async (req, res) => {
    
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 1099, //lowest denomination of particular currency
        currency: "usd",
        payment_method_types: ["card"], //by default
      });
  
      const clientSecret = paymentIntent.client_secret;
  
      res.json({
        clientSecret: clientSecret,
      });
    } catch (e) {
      console.log(e.message);
      res.json({ error: e.message });
    }
  }
  // payFinancial: async (req, res) => {
  //   const { first_name, last_name, amount } = req.body;
  //   console.log(req.body,"msg")
  //   if (!first_name || !last_name || !amount) {
  //     res.send("fill all the field");
  //   } else {
  //     const session = await stripe.checkout.sessions.create({
  //       payment_method_types: ["card"],
        // line_helpgiver: [
        //   {
        //     price_data: {
        //       currency: "eur",
        //       product_data: {
        //         name: first_name,
        //       },
        //       unit_amount: amount * 100,
        //     },
            // last_name: last_name,
            // quantity: quantity,
        //   },
        // ],
  //       mode: "payment",
  //       success_url: "http://192.168.11.163:3000",
  //       cancel_url: "http://192.168.11.163:3000",
  //     });
  //     res.send(session);
  //   }
  // },
  // verify: function (req, res, next) {
  //   const bearerHeader = req.headers["authorization"];
  //   if (typeof bearerHeader !== "undefined") {
  //     const bearer = bearerHeader.split(" ");
  //     const bearerToken = bearer[1];
  //     req.token = bearerToken;
  //     next();
  //   } else {
  //     res.sendStatus(403);
  //   }
  // },
};
