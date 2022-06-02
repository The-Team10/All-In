var express = require("express");
const cors = require("cors");
const dotenv = require("dotenv")
const bodyParser = require("body-parser");
const db = require('../back-end/database-mysql/index')
const contact = require ("./routes/contact")
const contributorsRoutes = require('./routes/contributors')
const helpseekersRoutes =require('./routes/helpseekers')
const eventsRoutes = require('./routes/events')
const reviews = require("./routes/reviews");
const helpgiverRoutes = require ('./routes/helpgiver')
const payment = require('./routes/stripe')
const ResetPassword = require('./routes/ResetPassword')

// const payment = require("./routes/stripe");
//Create an Express App and define the port
const app = express();
const port = 3000;


//Middleware to parse incoming requests with JSON and urlencoded payloads

app.use(cors({ origin: "*" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());

//Add Routes to the middleware handling path, specifying the respective URL path

// app.use('/api/admins',adminsRoutes)
app.use('/api/contributors',contributorsRoutes)
app.use('/api/helpseekers',helpseekersRoutes)
app.use('api/events',eventsRoutes)
app.use("/api/review", reviews);
app.use('/api/helpgiver',helpgiverRoutes)
app.use('/api/payment',payment)
app.use('/api/contact',contact)
app.use('/api/',ResetPassword )
// app.use('/api/',helpgiverRoutes)

//Listening on port 3000 for connections



/////////////

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


module.exports = app; // export the express app for testing purpose.
