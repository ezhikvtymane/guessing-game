class GuessingGame {
    constructor() {
        this.max = 0;
        this.min = 0;
        this.middle = 0;
        this.low = 0;
        this.gre = 0;
    }

    setRange(min, max) {
        this.max = max;
        this.min = min;
    }

    guess() {
        let res = 0;
        res = Math.floor((this.min + this.max) / 2);
        this.middle = res;
        return res;
    }

    lower() {

        let res = 0;
        this.max = this.middle + 1;
        res = Math.floor((this.min + this.max) / 2);
        this.middle = res;
        return res;
    }

    greater() {

        let res = 0;
        this.min = this.middle;
        res = Math.floor((this.min + this.max) / 2);
        this.middle = res + 1;
        return res;
    }
}

module.exports = GuessingGame;