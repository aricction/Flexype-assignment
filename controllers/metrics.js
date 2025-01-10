const express = require("express");
const FailedRequest = require("../models/FailedRequest");

const retrieveMetric = async (req, res)=> {
 try {
        const metrics = await FailedRequest.find().sort({ timestamp: -1 });
        res.status(200).json(metrics);
     } catch (error) {
       res.status(500).json({error: "failed to retrieve"});
       }   
 };

module.exports = { retrieveMetric };