const express = require("express");
const router = express.Router();
require("dotenv").config();
const { postReview,updateReview, deleteReview,getReviews} = require("../controllers/reviews")

router.post("/postreview", postReview);
router.delete('/deletereview/:id', deleteReview);
router.put('/updatereview/:id', updateReview);
router.get('/get',getReviews)
module.exports = router;
