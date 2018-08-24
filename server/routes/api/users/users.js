const router = require('express').Router();
const User = require('../../../db/models/User');

//get user profile
router.get('/profile', (req, res) => {
  let username = req.user.username
  return User
    .query({ where: { username } })
    .fetch(['username', 'name', 'email', 'address'])
    .then(user => {
      let profileUser = {
        username: user.attributes.username,
        name: user.attributes.name,
        email: user.attributes.email,
        address: user.attributes.address
      }
      return res.json(profileUser);
    })
    .catch(err => console.log(err))
});

//edit user profile
router.put('/users/:id', (req, res) => {
  const id = req.params.id;
  let {
    name,
    email,
    address
  } = req.body
  return new User({ id })
    .save({ name, email, address })
    .then(user => {
      return res.json(user);
    })
    .catch(err => console.log(err))
});

module.exports = router;