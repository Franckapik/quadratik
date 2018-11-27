var config = require('./config');

module.exports = {
  development: {
    client: 'pg',
    connection: config.connectiondev,
    pool: { min: 0, max: 7 }
  },
  production: {
    client: 'pg',
    connection: config.connection,
    pool: { min: 0, max: 7 }
  },
};
