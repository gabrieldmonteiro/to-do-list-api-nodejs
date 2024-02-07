require("dotenv").config();
const { Client } = require("pg");

const client = new Client({
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: process.env.POSTGRES_PORT,
});

client.connect(function (err) {
  if (err) throw err;
  console.log(`Connected to PostgreSQL. Port:${client.port}`);
});

module.exports = client;
