const app = require('express')();
const { db } = require('./db');

app.get('/api/hello', (req, res) => {
  res.send('Hello!');
});

app.get('/api/cards', (req, res) => {
  res.send('Hello!');
});

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Listening on port ${port}`));