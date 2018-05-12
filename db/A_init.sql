-- -- Get rid of the db if it exists
DROP DATABASE IF EXISTS sampledb;
-- -- Create the db
CREATE DATABASE sampledb;
-- Connect to the db
\c sampledb
-- Create users table
CREATE TABLE something (
  id SERIAL PRIMARY KEY,
  some_field text UNIQUE,
);