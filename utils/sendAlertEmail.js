const nodemailer = require("nodemailer");
const {SMTP_USER ,SEND_TO_MAIL } = process.env;


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

    try {  
        //email information 
        const mailOption = {
            from: SMTP_USER,
            to: SEND_TO_MAIL,
            subject: `alert: Excessive failed request`,
            text:`the IP ${ip} has made ${count} failed request within the time window ` ,
        };
        // send mail
        await transporter.sendMail(mailOption);
      
        console.log(`Alert email sent successfully to ${mailOption.to}`);
    
    
     } catch (error) {
     console.log('error sending alert email',error);
    }
   }

module.exports = { sendAlertEmail };