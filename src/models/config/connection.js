const { Pool } = require('pg');
const dotEnv = require('dotenv');

dotEnv.config();

const connectionString = process.env.DATABASE_URL;

if (!connectionString) throw new Error('failed to connect with the database');

module.exports = new Pool({
  connectionString,
  ssl: !connectionString.includes('localhost')
});
