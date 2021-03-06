// require("readline")
//     .createInterface({ input: process.stdin })
//     .on("line", (line) => console.log(line + " => " + toBerlinClock(line)));

function toBerlinClock(line) {
    const berlinClock = new BerlinClock(line);
    return berlinClock.toString();
}

Number.prototype.mod = function (number) {
    return this % number;
};

Number.prototype.divide = function (number) {
    return this / number;
};
Number.prototype.isEqual = function (number) {
    return +this === number;
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

    setTime(time) {
        this.splitTime(time);
    }
}

class BerlinClock extends Clock {
    onString = "X";
    offString = ".";

    constructor(time) {
        super(time);
    }

    getEven() {
        // console.log(this.seconds.isEven());
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

    getFivesMinutes() {
        return this.getOnFives(this.minutes).replace(/(..)./g, "$1|");
    }

    getBerlinMinutes() {
        return (
            this.getFivesMinutes().padEnd(11, this.offString) +
            " " +
            this.getOnOnes(this.minutes).padEnd(4, this.offString)
        );
    }

    getBerlinTime() {
        return (
            this.getEven() +
            " " +
            this.getBerlinHours() +
            " " +
            this.getBerlinMinutes()
        );
    }
}

BerlinClock.prototype.toString = function () {
    return this.getBerlinTime();
};

// console.log(berlinClock);
// console.log(berlinClock.toString());
// console.log(toBerlinClock("01:58:57"));
