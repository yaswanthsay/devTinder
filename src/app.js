const express = require("express")
const {userAuth} = require("./middlewares/auth")

const app = express()

app.get("/user",userAuth,(req,res,next)=>{
    res.send("Route handler 1")
})

app.listen(7777,()=>{
    console.log("Server running in port 7777...")
})