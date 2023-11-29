const db = require("../db/dbCongif");

const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs
  } catch(error) {
    return { error: "Songs not found!" };
  }
};

const getOneSong = async (id) => {
  try {
    const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id)
    return oneSong
  } catch(error) {
    return { error: "Song not found!" };
  }
};

const createSong = async (song) => {
  try {
    const createdSong = await db.one(
      "INSERT INTO songs (title, artist_name, album, year_of_release, genre) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [song.title, song.artist, song.album, song.year, song.genre]
    );
    return createdSong;
  } catch (error) {
    return { error: "Song not created!" };
  }
};

const deleteSong = async (id) => {
  try {
    await db.none("DELETE FROM songs WHERE id = $1", id);
    return {message: "Song deleted successfully" };
  } catch (error) {
    return { error: "Song not deleted!" };
  }
};

const updateSong = async (id,song) => {
  try {
    const { title, artist_name, album, year_of_release, genre, is_favorite } = song;
    const updatedSong = await db.one("UPDATE song SET title=$1, artist_name=$2, album=$3, year_of_release=$4, genre=$5, is_favorite=$6, WHERE id=$7", [title,artist_name,album,year_of_release,genre,is_favorite]);
    return updatedSong
  } catch(error) {
    return { error: "Song not updated!" }
  }
};

module.exports = {
  getAllSongs,
  getOneSong,
  createSong,
  deleteSong,
  updateSong
}