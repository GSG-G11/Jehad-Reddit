require('env2')('.env');
const { Pool } = require('pg');

const {
  NODE_ENV,
  TEST_DB_URL,
  DEV_DB_URL,
  DATABASE_URL,
} = process.env;

let dbURL = '';
let SSL = '';

if (NODE_ENV === 'test') {
  dbURL = TEST_DB_URL;
  SSL = false;
} else if (NODE_ENV === 'dev') {
  dbURL = DEV_DB_URL;
  SSL = false;
} else if (NODE_ENV === 'production') {
  dbURL = DATABASE_URL;
  SSL = { rejectUnauthorized: false };
} else {
  throw new Error('There is no DB URL');
}

const connection = new Pool({
  connectionString: dbURL,
  ssl: SSL,
});

module.exports = connection;
