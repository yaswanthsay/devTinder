const express = require("express")
const connectDB = require("./config/database")
const {userAuth} = require("./middlewares/auth")
const User = require("./models/user")

const app = express()

app.use(express.json())

app.post("/signup",async(req,res)=>{
   const user = new User(req.body)
   try{
    await user.save()
   res.send("Signed up succesfully")
   }catch(err){
    console.error(err)
   }

})

connectDB()
.then(()=>{
    console.log("Database connection established")
    app.listen(7777,()=>{
    console.log("Server running in port 7777...")
})
}).catch((err)=>{
    console.error(err)
})


