const pg = require('pg');

const db = new pg.Client();
(async () => {
  try {
    await db.connect();
    console.log(`Connected To ${db.database} at ${db.host}:${db.port}`);
  } catch (err) {
    console.log('Could not connect to the database!', err);
  }
})();

module.exports.db = db;