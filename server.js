const express = require('express');
const app = express();
const connectDB = require('./config/db');  
const { submitHandler } = require('./controllers/submitController');
const { retrieveMetric } = require('./controllers/metrics');
connectDB();

app.use(express.json());

app.get('/', (req, res) => res.send("Welcome to express server"));

app.post('/api/submit', submitHandler);
app.get("/metrics", retrieveMetric);

const port = process.env.PORT || 3000;

app.listen(port, () => 
  console.log(`Server running on http://localhost:${port}`)
);
