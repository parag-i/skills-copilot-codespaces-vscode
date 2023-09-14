// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
// const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 8081;

// Middleware
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

// Routes
app.get('/status', (req, res) => {
  res.send({
    message: 'hello world'
  })
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

// mongoose.connect('mongodb://localhost:27017






 