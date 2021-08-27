Number.prototype.mod = function (number) {
    return this % number;
};

Number.prototype.divide = function (number) {
    return this / number;
};
Number.prototype.isEqual = function (number) {
    return this === number;
};

Number.prototype.isEven = function () {
    return this.mod(2).isEqual(0);
};

class Clock {
    constructor(time) {
        this.time = time;
        this.splitTime();
    }
    splitTime() {
        const [hours, minutes, seconds] = this.time.split(":");
        this.hours = +hours;
        this.minutes = +minutes;
        this.seconds = +seconds;
    }
}

class BerlinClock extends Clock {
    onString = "X";
    offString = ".";

    constructor(time) {
        super(time);
    }

    getEven() {
        return this.seconds.isEven() ? this.offString : this.onString;
    }

    padEndWithOffString(string, maxLenght) {
        return string.padEnd(maxLenght, this.offString);
    }

    getOnFives(number) {
        return this.onString.repeat(number.divide(5));
    }

    getOnOnes(number) {
        return this.onString.repeat(number.mod(5));
    }

    getBerlinHours() {
        return (
            this.getOnFives(this.hours).padEnd(4, this.offString) +
            " " +
            this.getOnOnes(this.hours).padEnd(4, this.offString)
        );
    }
    getBerlinMinutes() {
        return (
            this.getOnFives(this.minutes).padEnd(4, this.offString) +
            " " +
            this.getOnOnes(this.minutes).padEnd(4, this.offString)
        );
    }

    getFivesSeconds() {
        return this.getOnFives(this.seconds).replace(/(..)./g, "$1|");
    }

    getBerlinSeconds() {
        return (
            this.getFivesSeconds().padEnd(11, this.offString) +
            " " +
            this.getOnOnes(this.seconds).padEnd(4, this.offString)
        );
    }

    getBerlinTime() {
        return (
            this.getEven() +
            " " +
            this.getBerlinHours() +
            " " +
            this.getBerlinMinutes() +
            " " +
            this.getBerlinSeconds()
        );
    }
}

BerlinClock.prototype.toString = function () {
    return this.getBerlinTime();
};

const berlinClock = new BerlinClock("11:12:43");
console.log(berlinClock.toString());
