
function checkTitle(req, res, next) {
  const { title } = req.body;
  if (typeof title !== 'string' || title.trim() === '') {
    return res.status(400).json({ error: 'Title is required and must be a non-empty string' });
  }
  next();
}

function checkArtistName(req, res, next) {
  const { description } = req.body;

  if(typeof description != 'string' || description.trim() === ''){
    return res.status(400).json({error: 'Description is required and must be a non-empty string'});
  }
  next();
}

function checkGenres(req, res, next) {
  const validGenres = [ "R&B", "Hip-Hop", "Pop", "Salsa", "Urbano Latino", "Afrobeats", "Hip-Hop/Rap"];
  const { genres } = req.body;

  if(!Array.isArray(genres)) {
    return res.status(400).json({error: 'Genres must be provided as an array'});
  }

  for (const genre of genres) {
    if (!validGenres.includes(genre)) {
      return res.status(400).json({ error: `${genre} is not a valid genre` });
    }
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
