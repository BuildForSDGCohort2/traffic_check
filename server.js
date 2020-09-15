const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const compression = require("compression");
const morgan = require("morgan");

// Envronment variables destructuring
const { mongoURI, the_port } = require("./config/key");

const Tweet = require("./modules/twitter");

const app = express();

// Body parser middleware
app.use(bodyParser.json());

const dev = app.get("env") !== "production";

// Connect to MongoDb
mongoose
  .connect(process.env.MONGODB_URI || mongoURI)
  .then(() => console.log("mongo DB connected.... and this is nice"))
  .catch((err) => console.log(err));

// Hello World

app.get("/", (req, res) => {
  // return res.send({ message: new Tweet().follow() });
  return res.send({ message: "Welcome home" });
});

let accidentRoute = require("./routes/accident.route");
let itemRoute = require("./routes/item");
const { onAuthenticated } = require("./modules/twitter");

app.use("/api/v1", accidentRoute);
app.use("/api/v1", itemRoute);

// Form submit user
/*
app.post('/user', (req, res)=>{
    if(!req.body){
      return res.send({message: "Error: Body can't be empty"})
    }
    return res.send({name: `Hello ${req.body.name}`});
  });
*/
const port = process.env.PORT || the_port;
// Server static assets if in production
if (!dev) {
  //Set static folder
  app.disable("x-powered-by");
  app.use(compression());
  app.use(morgan("common"));

  app.use(express.static(path.resolve(__dirname, "build")));
}
if (dev) {
  app.use(morgan("dev"));
}

app.listen(port, () => console.log(`Server started on port ${port}`));
