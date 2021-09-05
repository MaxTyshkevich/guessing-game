class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.range = this.max - this.min;
    this.center = this.min + Math.ceil(this.range / 2);
    return this.center;
  }

  lower() {
    this.max = this.center;
  }

  greater() {
    this.min = this.center;
  }
}

module.exports = GuessingGame;
