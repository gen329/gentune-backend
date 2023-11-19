const express = require("express");
const {
  getAllSongs,
  getOneSong,
  createSong,
  deleteSong,
  updateSong,
} = require("../queries/songs.js");

const songs = express.Router();

songs.use("/:id", async (req,res) => {
  const { id } = req.params
  const oneSong = await getOneSong(id);
  if (oneSong) {
    res.json(oneSong);
  } else {
    res.status(404).json({ error: "Song not found!" });
  }
});

songs.get("/", async (req,res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json({ sucess: true, data: {payload: allSongs} });
  } else {
    res.status(500).json({ sucess: false, data: { error: "SEVER ERROR - Can't get all movies!" },
  });
  }
});

songs.post("/", async (req,res) => {
  try {
    const createdSong = await createSong(req.body);
    res.json(createdSong)
  } catch (error) {
    res.status(400).json({ error: "Error creating a song" });
  }
});

songs.delete("/:id", async (req,res) => {
  try {
    const { id } = req.params;
    const deletedSong = await deleteSong(id);
    if (deletedSong) {
      res.status(200).json({ success: true, payload: { data: deletedSong }});
    } else {
      res.status(404).json({ error: "Song not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, data: { error: "Server Error - Did not delete "},
  });
  }
});

songs.put("/:id", async (req,res) => {
  const  { id } = req.params;
  const updatedMovie = await updatedSong(id, req.body);
  if (updatedSong.id) {
    res.status(200).json(updatedMovie);
  } else {
    res.status(404).json({ error: " No song found with that ID" });
  }
});

module.exports = songs;