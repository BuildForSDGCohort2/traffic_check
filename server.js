const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Envronment variables destructuring
const { mongoURI, PORT } = require("./config/key");

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
  return res.send({ message: new Tweet().follow() });
});

let accidentRoute = require("./routes/accident.route");
const { onAuthenticated } = require("./modules/twitter");

app.use("/api/v1", accidentRoute);

// Form submit user
/*
app.post('/user', (req, res)=>{
    if(!req.body){
      return res.send({message: "Error: Body can't be empty"})
    }
    return res.send({name: `Hello ${req.body.name}`});
  });
*/

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
