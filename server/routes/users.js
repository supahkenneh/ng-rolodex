const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('users routes');
})

module.exports = router;