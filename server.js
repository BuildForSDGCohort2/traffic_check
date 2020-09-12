const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

// Envronment variables destructuring
const { mongoURI, the_port } = require("./config/key");

const Tweet = require("./modules/twitter");

const app = express();

// Body parser middleware
app.use(bodyParser.json());

// Connect to MongoDb
mongoose
  .connect(mongoURI)
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

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const port = process.env.PORT || the_port;
app.listen(port, () => console.log(`Server started on port ${port}`));
