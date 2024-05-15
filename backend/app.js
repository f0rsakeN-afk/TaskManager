const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const taskRoutes=require('./routes/taskRoutes');

//ROUTES
app.use('/api/v1/taskhub',taskRoutes);

module.exports = app;