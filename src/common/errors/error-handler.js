const { InternalServerError, MongoDuplicateError } = require('./errors-list');

module.exports = (err, path) => {
  console.log(err);

  // Handle mongoose duplicate errors
  if (err.code === 11000) {
    err = new MongoDuplicateError(
      `'${Object.keys(err.keyValue)}' already used`
    );
  }

  if (!err.reason) {
    err = new InternalServerError();
  }

  const response = {};
  const { reason, statusText, status } = err;

  response.status = status;
  response.data = {
    status,
    error: statusText,
    detail: reason,
    path,
  };

  return response;
};
