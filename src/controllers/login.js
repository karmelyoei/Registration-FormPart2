const router = require('express').Router();
const path = require('path');
const compareHashed = require('./comparehashed');
const validation = require('../helper/validation');
const getUserByEmail = require('../models/getuseremail');
const jwt = require('jsonwebtoken');
const dotEnv = require('dotenv');

dotEnv.config();

const secretKey = process.env.secretKey;

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'login.html'));
});

router.post('/login', (req, res) => {
  const data = req.body;

  const { error } = validation.logInValidation(data);

  if (typeof error !== 'undefined') {
    return res.send(`<h1>${error.toString().replace('ValidationError:', '')}`);
  }

  // get the data from the database if exist
  // compare the passwords
  getUserByEmail(data.userEmail)
    .then(result => {
      if (result.rowCount === 0) {
        return res.send('<h1>No such a user with these Data</h1>');
      }
      const user = result.rows[0];
      if (user !== null) {
        compareHashed(data.userPassword, user.password)
          .then(hash => {
            // jwt cooike redirect profile
            console.log(hash);
            if (!hash) {
              return res.sendFile(
                path.join(__dirname, '..', '..', 'public', 'forbiden.html')
              );
            }
            let token = jwt.sign({ useremail: data.userEmail }, secretKey, {
              expiresIn: '30m'
            });
            res.cookie('login', token);
            res.redirect('/profile');
          })
          .catch(err => {
            res.sendFile(
              path.join(__dirname, '..', '..', 'public', 'forbiden.html')
            );
          });
      }
    })
    .catch(err => console.log('There is no such a user', err));
});

module.exports = router;
