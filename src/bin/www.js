const app = require('../app');
const { DEV_PORT } = require('../common/config');
const { connectToDB } = require('../common/db/mongodb');

const port = process.env.PORT || DEV_PORT;

app.listen(port, () =>
  console.log(`server listening at http://localhost:${port}`)
);

process.on('uncaughtException', (error) => {
  console.log(error);
  const exit = process.exit;
  exit(1);
});

process.on('unhandledRejection', (reason, origin) => {
  console.log(
    `unhandledRejection: ${reason}, origin: ${JSON.stringify(origin)}}`
  );
});

connectToDB();
