class GuessingGame {
  constructor() {}
  setRange(min, max) {
    this.min = min;
    this.max = max;
  }
  guess() {
    let number = Math.round((this.max + this.min) / 2);
    return number;
}
  lower()   {this.setRange(this.min, this.guess())}
  greater() {this.setRange(this.guess(), this.max)}
}
module.exports = GuessingGame;
