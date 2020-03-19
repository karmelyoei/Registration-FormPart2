'use strict';

const bycrpt = require('bcrypt');

const hashPassword = password => bycrpt.hash(password, 10);

module.exports = hashPassword;
