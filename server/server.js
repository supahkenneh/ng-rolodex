const express = require('express');
const app = express();
const PORT = process.env.port || 3005;
const bodyParser = require('body-parser');

const routes = require('./routes');

app.use(bodyParser.json());
app.use(express.static('../public'));
app.use('/api', routes);

app.listen(PORT, () => {
  process.stdout.write(`Server started on port: ${PORT}\n`)
});