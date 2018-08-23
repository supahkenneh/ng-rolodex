const express = require('express');
const session = require('express-session');
const Redis = require('connect-redis')(session);
const passport = require('passport');
const app = express();
const PORT = process.env.port || 3005;
const bodyParser = require('body-parser');

const routes = require('./routes/index');

app.use(bodyParser.json());
app.use(express.static('../public'));

app.use(session({
  store: new Redis(),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());


app.use('/api', routes);

app.listen(PORT, () => {
  process.stdout.write(`Server started on port: ${PORT}\n`)
});