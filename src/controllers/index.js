'use strict';

const router = require('express').Router();
const registration = require('./registration');
const logIn = require('./login');
const welcome = require('./welcome');

router.use('/', registration);
router.use('/', logIn);
router.use('/', welcome);

module.exports = router;
