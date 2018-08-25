const router = require('express').Router();
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('../../../db/models/User')
const bcrypt = require('bcrypt');
const saltedRounds = 12;

//serialize user
passport.serializeUser((user, done) => {
  return done(null, {
    id: user.id,
    username: user.username.toLowerCase()
  });
});

//deserialize user
passport.deserializeUser((user, done) => {
  new User({ id: user.id }).fetch()
    .then(user => {
      if (!user) {
        return done(null, false);
      } else {
        user = user.toJSON();
        return done(null, {
          id: user.id,
          username: user.username.toLowerCase()
        });
      }
    })
    .catch(err => {
      console.log(err);
      return done(err);
    });
});

//localstrategy
passport.use(new LocalStrategy(function (username, password, done) {
  return new User({ username: username }).fetch()
    .then(user => {
      if (user === null) {
        return done(null, false, { message: 'Invalid username or password' });
      } else {
        user = user.toJSON();
        bcrypt.compare(password, user.password)
          .then(samePassword => {
            if (samePassword) { return done(null, user); }
            else {
              return done(null, false, { message: 'Invalid username or password' });
            }
          })
      }
    })
    .catch(err => {
      return done(err);
    });
}));

/**** REGISTRATION ****/
router.post('/register', (req, res) => {
  let {
    username,
    name,
    email,
    address
  } = req.body;
  bcrypt.genSalt(saltedRounds, (err, salt) => {
    if (err) { return res.status(500); }
    bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
      if (err) { return res.status(500); }
      return new User({
        username: username.toLowerCase(),
        password: hashedPassword,
        name,
        email,
        address
      })
        .save()
        .then((result) => {
          res.json(result.attributes.username);
        })
        .catch(err => {
          res.json({ message: 'username already exists' })
        });
    })
  })
});

/**** USER LOGIN ****/
router.post('/login', (req, res, next) => {
  req.body.username = req.body.username.toLowerCase();
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.json(info)
    } else if (!user) {
      return res.json(info);
    } else {
      req.login(user, (err) => {
        if (err) { return next(err); }
        else {
          res.json({ username: user.username })
        }
      });
    }
  })(req, res, next);
});

router.get('/logout', (req, res) => {
  req.logout();
  res.json({ sucess: true })
});

module.exports = router;