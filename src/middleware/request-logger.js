const morgan = require('morgan');
const logger = require('../common/logging/logger');

morgan.token('requestId', (request) => request.id);

const format = process.env.NODE_ENV === 'production' ? 'combined' : 'dev';
const options = {
  stream: {
    write: (message) => logger.info(message.trim()),
  },
};

module.exports = morgan(format, options);
