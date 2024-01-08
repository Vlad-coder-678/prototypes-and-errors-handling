/**
 * Человек.
 * @param {string} name
 * @param {object[]} watchedMovies
 */
function Person(name, watchedMovies = []) {
  this.name = name;
  this.watchedMovies = watchedMovies;
}

Person.prototype.watchMovie = function (movie) {
  if (this.watchedMovies.some(({ title }) => title === movie.title)) return movie.play();

  this.watchedMovies.push(movie);
  return movie.play();
};

Array.prototype.toString = function () {
  return this.reduce((acc, { title }, index) => `${acc} ${index + 1} ${title}`, "");
};

module.exports = { Person };
