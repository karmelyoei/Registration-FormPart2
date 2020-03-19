// use bcrypt to compare the passwords and return a boolean asynchronously just only to check sth this file means nth for this code
const bcrypt = require('bcrypt');
const compareHashed = (password, hashedpassword) => {
  return bcrypt.compare(password, hashedpassword);
};

module.exports = compareHashed;
