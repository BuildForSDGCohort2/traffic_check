const { parsed: envs } = require("dotenv").config();
module.exports={
    MONGOURI:envs.MONGODB_URI,
    JWT_SECRET:envs.JWT_SECRET,
    SENDGRID_API:envs.SENDGRID_API,
    EMAIL:envs.EMAIL,
    PORT: envs.PORT
  }

  


