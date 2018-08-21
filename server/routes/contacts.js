const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    res.send('contacts routes');
  })

module.exports = router;