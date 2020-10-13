const jwt = require('jsonwebtoken')
//const {JWT_SECRET} = require('../config/keys')
const mongoose = require('mongoose')
const User = mongoose.model("User")
const JWT_SECRET =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNjczMTM5Yjk1YzM4MjlhMDYxY2U0OCIsImlhdCI6MTYwMDYwNjA1OX0.6l3euPPO-Dy4YFiwRVLa_Hl94SVC8-olHdTGjyBfvT0";

module.exports = (req,res,next)=>{
    // const {authorization} = req.headers
    //authorization === Bearer ewefwegwrherhe
    let token = req.headers["x-access-token"];
    if(!token){
       return res.status(401).json({error:"you must be logged in"})
    }
    // const token = authorization.replace("Bearer ","")
    jwt.verify(token,JWT_SECRET,(err,payload)=>{
        if(err){
         return   res.status(401).json({error:"you must be logged in"})
        }

        const {_id} = payload
        User.findById(_id).then(userdata=>{
            req.user = userdata
            next()
        })
        
        
    })
}