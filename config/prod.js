const SECRET =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNjczMTM5Yjk1YzM4MjlhMDYxY2U0OCIsImlhdCI6MTYwMDYwNjA1OX0.6l3euPPO-Dy4YFiwRVLa_Hl94SVC8-olHdTGjyBfvT0";

module.exports={
  MONGOURI:process.env.MONGODB_URI,
  JWT_SECRET: SECRET ,
  SENDGRID_API:process.env.SENDGRID_API,
  EMAIL:process.env.EMAIL, 
  PORT: process.env.PORT
}