/**
 * Человек.
 * @param {string} name
 * @param {object[]} watchedMovies
 */
class Person {
  constructor(name, watchedMovies = []) {
    this.name = name;
    this.watchedMovies = watchedMovies;
  }

  watchMovie(movie) {
    if (this.watchedMovies.some(({ title }) => title === movie.title)) return movie.play();

    this.watchedMovies.push(movie);
    return movie.play();
  };
}

Array.prototype.toString = function () {
  return this.reduce((acc, { title }, index) => `${acc.length ? `${acc} ` : ""}${index + 1} ${title}`, "");
};

module.exports = { Person };
