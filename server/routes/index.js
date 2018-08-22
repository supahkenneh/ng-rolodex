const router = require('express').Router();
const users = require('./api/users/users');
const auth = require('./api/users/auth')
const contacts = require('./api/contacts/contacts');

router.use('/', users, auth);
router.use('/contacts', contacts);

module.exports = router;