const express = require("express")

const app = express()

app.get("/user",(req,res)=>{
    res.send("User data")
})

app.post("/user",(req,res)=>{
    res.send("Data added succesfully")
})

app.patch("/user",(req,res)=>{
    res.send("Data updated succesfully")
})

app.delete("/user",(req,res)=>{
    res.send("Deleted succesfully")
})

app.listen(7777,()=>{
    console.log("Server running in port 7777...")
})