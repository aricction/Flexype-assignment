const mongoose = require("mongoose");
const uri = process.env.MONGO_URI;

const connectDB  = async ()=> {
  try {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
      });

      console.log("database connected ... ")
  } catch (error) {
    console.log(error.message)
    process.exit(1);
  }
}




module.exports = connectDB;