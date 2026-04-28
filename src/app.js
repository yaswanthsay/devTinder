const express = require("express")
const connectDB = require("./config/database")
const {userAuth} = require("./middlewares/auth")
const User = require("./models/user")

const app = express()


app.post("/signup",async(req,res)=>{
   const user = new User({
     firstName:"Yaswanth",
     lastName:"krishna",
     emailId:"yaswanth@gmail.com",
     password:"yaswanth@123"
   })

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


