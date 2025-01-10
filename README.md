
# Alerting system for monitoring failed POST request
This project is a simple Node.js-based application that tracks failed requests and sends alert emails when the number of failed requests exceeds a threshold. It uses MongoDB for logging failed requests and Nodemailer for sending email alerts.




## Features
Logs failed requests to a MongoDB collection.

Sends email alerts when the number of failed requests from a specific IP exceeds the defined threshold.

Threshold and time window for monitoring can be configured via environment variables.
## Tech stack

Node.js - JavaScript runtime used for backend development.

MongoDB - Set up a MongoDB database. Use MongoDB Atlas for cloud-based hosting.

Express - web framework for nodejs.

Nodemailer - library for sending emails in nodejs. 

## Installation

1. Clone this repository: 
        
        git clone https://github.com/<username>/Flexype-assignment.git

2. Navigate to the project directory:  
    
       cd flexpe

3. Install dependencies: 

       npm Install

4.Create a .env file in the root directory and add the following:
    
    PORT=3000
    MONGO_URI=<your-mongo-db-uri>
    ALERT_THRESHOLD=3  # Number of failed requests to trigger alert
    WINDOW_DURATION=10 # Time window in minutes
    SMTP_USER=<your-email@gmail.com>
    SMTP_PASS=<your-app-password>
    SEND_TO_MAIL = <to-sendemail@gmail.com>

Replace the placeholders with your actual MongoDB URI, Redis URL, and email credentials.

## Usage
1. Start the server
    
       node server.js

2. The server will start on localhost:3000



## Test the API on Postman

Once the server is running, you can test the /api/submit endpoint by sending a POST request with the following details:
  
     URL: http://localhost:3000/api/submit
 
  Headers:
   access-token: invalid-token (or leave it blank to test the      invalid token scenario)

 1. Valid Request:

        URL: http://localhost:3000/api/submit  
        Header: access-token: valid-token  
        Method: POST  
        Expected Response:  
        message: "request successful"

2. Invalid Request:
    
       URL: http://localhost:3000/api/submit
       Header: access-token: invalid-token (or without the header)
       Method: POST
       Expected Response: 401 Unauthorized 
       error: "invalid token"

If the access-token is invalid, the server will:
Log the failed request to MongoDB.
Send an alert email when the failed request count exceeds the threshold.       

      Alert email sent successfully to recipient@example.com


3. Test retrieve metrics
 
        URL: http://localhost:3000/metrics  
        Method: GET  
        
Expected Response:
  
    [  {
        "_id": "67812dfd78f581774bf1ec24",
        "ip": "::1",
        "reason": "invalid token",
        "timestamp": "2025-01-10T14:26:05.201Z",
        "__v": 0
        }, ]
        
