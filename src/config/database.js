const mongoose = require("mongoose")


const connectDB = async()=>{
   await mongoose.connect(
    "mongodb://developersimba4396_db_user:mongodb4396@ac-uhvk3we-shard-00-00.dgteggn.mongodb.net:27017,ac-uhvk3we-shard-00-01.dgteggn.mongodb.net:27017,ac-uhvk3we-shard-00-02.dgteggn.mongodb.net:27017/devTinder?ssl=true&replicaSet=atlas-11xbut-shard-0&authSource=admin&appName=Cluster0")
}

module.exports = connectDB
