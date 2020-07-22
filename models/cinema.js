const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listOfTitles = function() {
  return this.films.map((film) => film.title);
}

Cinema.prototype.findFilmByTitle = function(title) {
  return this.films.find((film) => film.title === title);
}

Cinema.prototype.listByGenre = function(genre) {
  return this.films.filter(film => film.genre === genre);
}

Cinema.prototype.filmFromYear = function(year) {
  return this.films.some(film => film.year === year);
}

Cinema.prototype.filmLength = function(length) {
  return this.films.every(film => film.length > length);
}

Cinema.prototype.totalRunningTime = function() {
  return this.films.reduce((total, film) => total + film.length, 0);
}

Cinema.prototype.filmsByProperty = function(property, value) {
  return this.films.filter(film => property === value)
  //property film.year
  //value 2017
}



module.exports = Cinema;
