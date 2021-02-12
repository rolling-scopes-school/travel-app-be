require('dotenv').config();
const express = require('express');
const { StatusCodes, ReasonPhrases } = require('http-status-codes');

const errorMiddleware = require('./middleware/error-middleware');
const requestLogMiddleware = require('./middleware/request-logger');

const app = express();

app.use(express.json());

app.use(requestLogMiddleware);

app.use((req, res) => {
  res.status(StatusCodes.NOT_IMPLEMENTED).send(ReasonPhrases.NOT_IMPLEMENTED);
});

app.use(errorMiddleware);

module.exports = app;
