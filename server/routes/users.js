const router = require('express').Router();
const User = require('../db/models/User');

router.get('/:name', (req, res) => {
  const username = req.params.name;
  return User
    .query({ where: { username } })
    .fetchAll()
    .then(user => {
      return res.json(user);
    })
    .catch(err => console.log(err))
});

router.put('/:name', (req, res) => {
  const username = req.params.name;
  let {
    name,
    email,
    address
  } = req.body
  return User
    .query({ where: { username } })
    .fetchAll()
    .then(user => {
      let id = user.models[0].id
      return new User ({ id })
      .save({ name, email, address })
    })
    .then(user => {
      return res.json(user);
    })
    .catch(err => console.log(err))
});

module.exports = router;