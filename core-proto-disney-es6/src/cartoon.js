/**
 * Мультфильм.
 * @param {string} title - Name of the cartoon
 * @param {number} year - When it released (1990)
 * @param {boolean} forChildren - true/false
 * @param {string} beginning - Several words from the beginning of the cartoon
 */
class Cartoon {
  constructor(title, year, forChildren = true, beginning = 'Long, long ago...') {
    this.title = title;
    this.year = year;
    this.forChildren = forChildren;
    this.beginning = beginning;
  }

  getDescription() {
    return this.title;
  };

  play() {
    return `${this.studio} ${this.studioLogo} ${this.title} ${this.beginning}`
  };
};

/**
 * Мульт студии Walt Disney.
 */
class DisneyCartoon extends Cartoon {
  constructor(title, year, forChildren, beginning = "Long, long ago in a faraway land..."){
    super(title, year, forChildren, beginning);
    this.studio = "Walt Disney";
    this.studioLogo = "🏰🌠";
  }
}

/**
 * Мульт студии DreamWorks.
 */
class DreamWorksCartoon extends Cartoon {
  constructor(title, year, forChildren, beginning) {
    super(title, year, forChildren, beginning);
    this.studio = 'DreamWorks';
    this.studioLogo = "🌙";
  }
}

module.exports = { Cartoon, DisneyCartoon, DreamWorksCartoon };
