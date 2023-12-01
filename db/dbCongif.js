const pgp = require("pg-promise")();
require('dotenv').config();

const cn = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USER,
  password: process.env.LOCAL_PASSWORD || 'j7YIQgNuar8eNTNSV9sglFrCdkvgjwyk',
  database: process.env.LOCAL_DB || 'postgres://gen329:j7YIQgNuar8eNTNSV9sglFrCdkvgjwyk@dpg-clkjaqeaov6s73880eq0-a/song_dev'
};

const db = pgp(cn);

module.exports = db;