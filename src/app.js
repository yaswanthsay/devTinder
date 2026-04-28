const express = require("express")
const connectDB = require("./config/database")
const {userAuth} = require("./middlewares/auth")

const app = express()

connectDB()
.then(()=>{
    console.log("Database connection established")
    app.listen(7777,()=>{
    console.log("Server running in port 7777...")
})
}).catch((err)=>{
    console.error(err)
})


