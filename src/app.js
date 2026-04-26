const express = require("express")

const app = express()

app.get("/user",
(req,res,next)=>{
    res.send("Route handler 1")
    next()
},
(req,res,next)=>{
    res.send("Route handler 2")
    next()
},
(req,res)=>{
    res.send("Route handler 3")
})

app.listen(7777,()=>{
    console.log("Server running in port 7777...")
})