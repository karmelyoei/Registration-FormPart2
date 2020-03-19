const path = require('path');
const fs = require('fs');
const connection = require('./connection');

const dbSql = fs
  .readFileSync(path.join(__dirname, 'sql', 'fakedata.sql'))
  .toString();

connection
  .query(dbSql)
  .then(data => console.log('database has been inserted'))
  .catch(err => console.log(err));
