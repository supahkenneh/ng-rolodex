const router = require('express').Router();
const User = require('../../../db/models/User');

//get user profile
router.get('/profile', (req, res) => {
  console.log('get');
  // const id = req.query.user
  // return User
  //   .query({ where: { id } })
  //   .fetchAll()
  //   .then(user => {
  //     return res.json(user);
  //   })
  //   .catch(err => console.log(err))
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