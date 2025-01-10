const mongoose = require("mongoose");

const uri = "mongodb+srv://govindpurty350:Kh9Lt4TiS2Kp2O0R@failedrequestmonitoring.9sdph.mongodb.net/?retryWrites=true&w=majority&appName=FailedRequestMonitoring";

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