
function checkTitle(req, res, next) {
  const { title } = req.body;
  if (typeof title !== 'string' || title.trim() === '') {
    return res.status(400).json({ error: 'Title is required and must be a non-empty string' });
  }
  next();
}

function checkArtistName(req, res, next) {
  const { artist_name } = req.body;

  if (typeof artist_name !== 'string' || artist_name.trim() === '') {
    return res.status(400).json({ error: 'Artist name is required and must be a non-empty string' });
  }
  next();
}

function checkGenres(req, res, next) {
  const validGenres = ["R&B", "Hip-Hop", "Pop", "Salsa", "Urbano Latino", "Afrobeats", "Hip-Hop/Rap"];
  const { genres } = req.body;

  if (!Array.isArray(genres)) {
    return res.status(400).json({ error: 'Genres must be provided as an array' });
  }

  const invalidGenres = genres.filter(genre => !validGenres.includes(genre));
  if (invalidGenres.length > 0) {
    return res.status(400).json({ error: `${invalidGenres.join(', ')} are not valid genres` });
  }

  next();
}

function checkYear(req, res, next) {
  const { year_of_release } = req.body;

  if (!year_of_release || typeof year_of_release !== 'number' || year_of_release < 1900 || year_of_release > new Date().getFullYear()) {
    return res.status(400).json({ error: 'Year of release is required and must be a valid year' });
  }
  next();
}


module.exports = {
  checkTitle,
  checkArtistName,
  checkGenres,
  checkYear,
}
