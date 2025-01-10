const express = require("express");
const bodyParser = require("body-parser");
const FailedRequest = require('../models/FailedRequest');
const { sendAlertEmail } = require("../utils/sendAlertEmail");
const {ALERT_THRESHOLD, WINDOW_DURATION} = process.env;

const app = express();
app.use(bodyParser.json());


 const  submitHandler = async (req , res) => {
    const ip = req.ip;
    const accessToken = req.headers["access-token"];

    if(!accessToken || accessToken !== "valid-token"){
        

        const threshold = parseInt(ALERT_THRESHOLD,10) || 5;
        const window = parseInt(WINDOW_DURATION,10)* 60 * 1000;

        await FailedRequest.create({ip, reason: "invalid token"});
             
        const count = await FailedRequest.countDocuments(ip);
        
        if(count >= threshold){
            console.log(`alert : IP ${ip} exceeded threshold with ${count} attempts`);
            await sendAlertEmail(ip, count);
        }

        res.status(401).json({error: "invalid token"});
        return;
    }

    res.status(200).json({message:"request sucessful"});
};

module.exports = { submitHandler };