const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    service: "gmail",
    auth: {
        user:"govindpurty350@gmail.com",
        pass:"fmey guto yvet rhki",
    },
    tls:{
        rejectUnauthorized:false ,
    },
});

async function sendAlertEmail(ip, count){
    const mailOption = {
        from: "govindpurty350@gmail.com",
        to:"govindpurty736@gmail.com",
        subject: `alert: Excessive failed request`,
        text:`the IP ${ip} has made ${count} failed request within the time window ` ,
    };

    await transporter.sendMail(mailOption);
  
    console.log(`Alert email sent successfully to ${mailOption.to}`);
}

module.exports = { sendAlertEmail };