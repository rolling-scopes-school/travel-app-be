const mongoose = require('mongoose');
const { MONGO_CONNECTION_STRING } = require('../config');

const connectToDB = () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .catch((err) => console.log(err));

  const db = mongoose.connection;
  db.once('open', () => {
    console.log('Mongo connection successfully!');
  });
};

module.exports = { connectToDB };
