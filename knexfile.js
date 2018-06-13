var config = require('./config');

module.exports = {
  development: {
    client: 'pg',
    connection: config.connection,
  },
  production: {
    client: 'pg',
    connection: config.connection,
  },
};
