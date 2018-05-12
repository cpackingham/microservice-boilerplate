const app = require('express')();
const { db } = require('./db');

app.get('/', (req, res) => {
  res.send('Hello!');
});

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Listening on port ${port}`));