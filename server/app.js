require('env2')('.env');
const { join } = require('path');
const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const router = require('./router');

const app = express();

app.set('port', process.env.PORT || 7000);

app.disable('x-powered-by');
app.use(cookieParser());
app.use(compression());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(join(__dirname, '..', 'public')));

app.use(router);

module.exports = app;
