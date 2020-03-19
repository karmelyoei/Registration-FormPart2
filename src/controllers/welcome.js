const router = require('express').Router();
const path = require('path');
const jwt = require('jsonwebtoken');
const dotEnv = require('dotenv');
dotEnv.config();

const secretKey = process.env.secretKey;

function authontication(token) {
  try {
    jwt.verify(token, secretKey);
    return true;
  } catch (err) {
    return false;
  }
}

function userLogIn(req) {
  const token = req.cookies.login;
  return authontication(token);
}

router.get('/profile', (req, res) => {
  if (userLogIn(req)) {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'welcome.html'));
  } else {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'forbiden.html'));
  }
});

router.post('/profile', (req, res) => {
  res.clearCookie('login');
  res.redirect('/');
});

module.exports = router;
