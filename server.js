const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const compression = require("compression");
const morgan = require("morgan");


// Envronment variables destructuring
// const { mongoURI, the_port } = require("./config/key");
const mongoURI =
  "mongodb+srv://odongolera:DZs7oHnbsYJ0WzxR@cluster0.kha1r.mongodb.net/test?retryWrites=true&w=majority";
const the_port = 5000;

const Tweet = require("./modules/twitter");

const app = express();

// Body parser middleware
// app.use(bodyParser.json());

// const dev = app.get("env") !== "production";

// Connect to MongoDb
mongoose
  .connect(process.env.MONGODB_URI || mongoURI)
  .then(() => console.log("mongo DB connected.... and this is nice"))
  .catch((err) => console.log(err));

// Hello World

//app.get("/", (req, res) => {
// return res.send({ message: new Tweet().follow() });
//  return res.send({ message: "Welcome home" });
//});

let accidentRoute = require("./routes/accident.route");
// let itemRoute = require("./routes/item");
const { onAuthenticated } = require("./modules/twitter");

app.use("/api/v1", accidentRoute);

const port = process.env.PORT || the_port;
// Server static assets if in production

app.listen(port, () => console.log(`Server started on port ${port}`));
