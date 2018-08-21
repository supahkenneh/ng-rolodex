const express = require('express');
const app = express();
const PORT = process.env.port || 3005;

app.get('/', (req, res) => {
  res.send('smoke test');
});

app.listen(PORT, () => {
  process.stdout.write(`Server started on port: ${PORT}`)
})