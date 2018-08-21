const router = require('express').Router();
const Contact = require('../db/models/Contact');
const User = require('../db/models/User');

router.get('/:username', (req, res) => {
  const username = req.params.username
  return User
    .query({ where: { username } })
    .fetchAll()
    .then(user => {
      let id = user.models[0].id;
      return Contact
        .where({ created_by: id })
        .fetchAll()
        .then(contacts => {
          return res.json(contacts);
        });
    });
});

module.exports = router;