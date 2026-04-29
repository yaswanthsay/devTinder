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

// app.get("/user",async(req,res)=>{

//     const userEmail = req.body.emailId
//     try{
//     const user = await User.find({emailId:userEmail})
//     if(!user){
//         res.status(404).send("User not found")
//     }else{
//     res.send(user)
//     }
//     }catch(err){
//         console.error(err)
//     }
// })

app.get("/feed",async(req,res)=>{
    try{
        const user = await User.find()
        if(!user){
            res.status(404).send("User not found")
        }else{
            res.send(user)
        }
    }catch(err){
        console.error(err)
    }
})

app.get("/user",async(req,res)=>{
    const userId = req.body._id
    try{
       const user = await User.findById({_id:userId})
       if(!user){
        res.status(404).send("User not found")
       }else{
        res.send(user)
       }
    }catch(err){
        console.error(err)
    }
})

app.patch("/user", async (req, res) => {
  const { userId, ...data } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      data,
      {
        new: true,
        runValidators: true
      }
    );

    res.json({
      message: "User updated successfully",
      user: updatedUser
    });

  } catch (err) {
    res.status(400).json({
      message: err.message
    });
  }
});

app.delete("/user",async(req,res)=>{
       const userId = req.body.userId
       try{
         await User.findByIdAndDelete({_id:userId})
         res.send("User deleted succefully")
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


