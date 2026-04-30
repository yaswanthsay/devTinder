const mongoose = require("mongoose")
const validator = require("validator")

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:4,
        maxLength:50
    },
    lastName:{
        type:String
    },
    emailId:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email address" + value)
            }
        }
    },
    password:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("Enter a strong password")
            }
        }
    },
    age:{
        type:Number,
        min:18
    },
    gender:{
        type:String,
         validate: {
           validator: function (value) {
           const allowed = ["male", "female", "other"];
           return allowed.includes(value.toLowerCase());
      },
      message: "Gender must be male, female, or other"
  }
    },
    about: {
        type: String,
        default: "This is a default description"
},
 photoUrl:{
    type:String,
    validate(value){
            if(!validator.isURL(value)){
                throw new Error("Add a valid photoUrl")
            }
        }
 },
    skills:[String]
},
{timestamps:true})

const User = mongoose.model("User", userSchema);

module.exports = User;