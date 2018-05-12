// Require pg to connect to the database
const pg = require('pg');

// Assign db to a new pg client
const db = new pg.Client();

// IIFE connecting to the db service, logging success or failure
(async () => {
  try {
    await db.connect();
    console.log(`Connected To ${db.database} at ${db.host}:${db.port}`);
  } catch (err) {
    console.log('Could not connect to the database!', err);
  }
})();

// Export the db object with a key of db
module.exports.db = db;