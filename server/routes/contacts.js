const router = require('express').Router();
const Contact = require('../db/models/Contact');
const User = require('../db/models/User');

//get all contacts for logged in user
router.get('/users/:username', (req, res) => {
  const username = req.params.username;
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
    })
    .catch(err => console.log(err));
});

//get all contacts that match search term
router.get('/search/:term', (req, res) => {
  const contact = req.params.term;
  return Contact
    .query('where', 'name', 'LIKE', `%${contact}%`)
    .fetchAll()
    .then(contact => {
      return res.json(contact);
    })
    .catch(err => console.log(err));
});

//post a new contact
router.post('/', (req, res) => {
  let {
    name,
    address,
    mobile,
    work,
    home,
    email,
    twitter,
    instagram,
    github,
    created_by
  } = req.body;
  return new Contact({ name, address, mobile, work, home, email, twitter, instagram, github, created_by })
    .save()
    .then(newContact => {
      return res.json(newContact);
    })
    .catch(err => console.log(err));
});

//get specific contact
router.get('/:id', (req, res) => {
  let id = req.params.id;
  return Contact
    .query({ where: { id } })
    .fetchAll()
    .then(contact => {
      res.json(contact);
    })
    .catch(err => console.log(err));
});

//change specific contact
router.put('/:id', (req, res) => {
  let id = req.params.id;
  let {
    name,
    address,
    mobile,
    work,
    home,
    email,
    twitter,
    instagram,
    github,
    created_by
  } = req.body;
  return Contact
    .query({ where: { id } })
    .fetchAll()
    .then(contact => {
      return new Contact({ id })
        .save({ name, address, mobile, work, home, email, twitter, instagram, github, created_by })
        .then(contact => {
          return res.json(contact);
        })
    })
    .catch(err => console.log(err));
});

//delete a specific contact
router.delete('/:id', (req, res) => {
  let id = req.params.id;
  return new Contact({ id })
    .destroy()
    .then(result => {
      return res.status(200).json('success')
    })
})

module.exports = router;