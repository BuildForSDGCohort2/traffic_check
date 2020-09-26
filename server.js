const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const compression = require("compression");
const morgan = require("morgan");
const envs = require("./config");
const cors = require("cors");

// Envronment variables destructuring
// const { mongoURI, the_port } = require("./config/key");

const Tweet = require("./modules/twitter");

const app = express();

// Body parser middleware
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// const dev = app.get("env") !== "production";

// Connect to MongoDb
mongoose
  .connect(process.env.MONGODB_URI || envs.mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("mongo DB connected.... and this is nice"))
  .catch((err) => console.log(err));

// Hello World

//app.get("/", (req, res) => {
// return res.send({ message: new Tweet().follow() });
//  return res.send({ message: "Welcome home" });
//});

let routes = require("./routes");

const { onAuthenticated } = require("./modules/twitter");

app.use("/api/v1", routes);

const port = process.env.PORT || envs.PORT;
// Server static assets if in production

app.listen(port, () => console.log(`Server started on port ${port}`));
