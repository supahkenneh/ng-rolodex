const router = require('express').Router();
const Contact = require('../../../db/models/Contact');
const User = require('../../../db/models/User');

//get all contacts for logged in user
router.get('/', (req, res) => {
  let username = req.user.username
  return User
    .query({ where: { username } })
    .fetch()
    .then(user => {
      let id = user.attributes.id
      return Contact
        .where({ created_by: id })
        .orderBy('name')
        .fetchAll()
        .then(contacts => {
          return res.json(contacts);
        });
    })
    .catch(err => console.log(err));
});

//get all contacts that match search term
router.get('/search/:term', (req, res) => {
  const search = req.params.term;
  const id = req.user.id
  return new Contact()
    .query(qb => {
      qb.where({ created_by : id })
        .andWhereRaw(`LOWER(name) LIKE ?`, [`%${search}%`])
    })
    .fetchAll()
    .then(result => {
      return res.json(result);
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
    github
  } = req.body;
  let created_by = req.user.id
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
  let username = req.body.created_by;
  return User
    .query({ where: { username } })
    .fetch()
    .then(user => {
      created_by = user.attributes.id;
      return Contact
        .query({ where: { id } })
        .fetchAll()
        .then(contact => {
          return new Contact({ id })
            .save({ name, address, mobile, work, home, email, twitter, instagram, github, created_by })
            .then(editedContact => {
              return res.json(editedContact);
            })
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