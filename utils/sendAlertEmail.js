const nodemailer = require("nodemailer");
const {SMTP_USER } = process.env;

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    service: "gmail",
    auth: {
        user:SMTP_USER,
        pass:"fmey guto yvet rhki",
    },
    tls:{
        rejectUnauthorized:false ,
    },
});

async function sendAlertEmail(ip, count){
    const mailOption = {
        from: SMTP_USER,
        to:"govindpurty736@gmail.com",
        subject: `alert: Excessive failed request`,
        text:`the IP ${ip} has made ${count} failed request within the time window ` ,
    };

    await transporter.sendMail(mailOption);
  
    console.log(`Alert email sent successfully to ${mailOption.to}`);
}

module.exports = { sendAlertEmail };