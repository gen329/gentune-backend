const express = require("express");
const cors = require("cors");
const app = express();
const songsController = require("./controllers/songsController");

app.use(cors());
app.use(express.json());
app.use("/songs", songsController);

app.get("/", (req,res) => {
  res.send("WELCOME TO GENTUNE!!!")
});

app.get("*", (req,res) => {
  res.status(404).json({ sucess: false, data: {error: "page not found"}});
});

module.exports = app;