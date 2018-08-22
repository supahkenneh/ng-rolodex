const router = require('express').Router();
const users = require('./api/users/users');
const contacts = require('./api/contacts/contacts');

router.use('/', users);
router.use('/contacts', contacts);

module.exports = router;