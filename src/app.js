const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/user.route');
const database = require('./config/database');

database.connection();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/user', routes)

module.exports = app;