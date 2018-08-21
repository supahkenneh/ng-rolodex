const router = require('express').Router();
const User = require('../db/models/User');

router.get('/:id', (req, res) => {
  const id = req.params.id;
  return User
    .query({ where: { id } })
    .fetchAll()
    .then(user => {
      return res.json(user);
    })
});

module.exports = router;