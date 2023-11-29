const app = require("./app.js");
const express = require('express');

require("dotenv").config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`LISTENING TO PORT ${PORT}`)
});