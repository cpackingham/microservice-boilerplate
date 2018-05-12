// Initialize our server by requiring and invoking express
const app = require('express')();

// Grab the connected db object from our db file
const { db } = require('./db');

// A test route
app.get('/api/ping', (req, res) => {
  res.send('pong');
});

// Grab cards from the database
app.get('/api/cards', (req, res) => {
  res.send('Hello!');
});

// If a port is assigned in the environment variables, use it,
// otherwise default to 3001
const port = process.env.PORT || 3001;

// Listen on the given port and log success
app.listen(port, () => console.log(`Listening on port ${port}`));