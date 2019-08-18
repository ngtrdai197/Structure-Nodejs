const express = require('express');
const bodyParser = require('body-parser');
const database = require('./config/database');
const user = require('./routes/user.route');
const auth = require('./routes/auth.route');

database.connection();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/user', user);
app.use('/api/auth', auth);

module.exports = app;