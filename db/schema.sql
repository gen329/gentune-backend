DROP DATABASE IF EXISTS songs_dev;

CREATE DATABASE songs_dev;

\c songs_dev;

CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  artist_name TEXT NOT NULL,
  album TEXT,
  year_of_release INTEGER,
  genre TEXT[],
  is_favorite BOOLEAN );
  