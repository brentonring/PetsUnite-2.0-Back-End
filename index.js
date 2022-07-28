// Modules and Globals
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const methodOverride = require("method-override");
// const path = require("path");

const PORT = process.env.PORT; //PORT 5000

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(bodyParser.json());

//serve static front end in production mode
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, 'client', 'build')));
// }

//routes to adoption, events and services controllers
app.use("/adoption", require("./controllers/adoption_ctr"));
app.use("/events", require("./controllers/events_ctr"));
app.use("/services", require("./controllers/services_ctr"));

// Default
app.get('/', (req, res) => {
  res.json('Hello to my app')
})

// Listens for connections. Confirgured for PORT 5000
app.listen(PORT || 3500, () => {
  console.log("Up and running!");
});
