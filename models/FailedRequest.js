const mongoose = require("mongoose");

const failedRequestSchema = new mongoose.Schema({
    ip:{type: String, required: true},
    reason:{type: String, required: true},
    timestamp: {type: Date, default: Date.now ,expires: 600 },
});

module.exports = mongoose.model("FailedRequest", failedRequestSchema);