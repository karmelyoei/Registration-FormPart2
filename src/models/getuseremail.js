const connection = require('./config/connection');

const getUserByEmail = email => {
  const sql = {
    text: 'SELECT * FROM users WHERE email = $1;',
    values: [`${email}`]
  };

  return connection.query(sql.text, sql.values);
};

module.exports = getUserByEmail;
