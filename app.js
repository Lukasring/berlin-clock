// require("readline")
//     .createInterface({ input: process.stdin })
//     .on("line", (line) => console.log(line + " => " + toBerlinClock(line)));

const testCases = ["00:00:00", "00:00:01", "10:10:10", "22:23:18"];

function getBerlinSeconds(seconds) {
    if (+seconds === 0) return ".";
    return +seconds % 2 === 0 ? "." : "X";
}

function getXDotArray(length, time, dec) {
    let currTime = +time;
    return Array.from(Array(length).keys()).map(() => {
        if (currTime < dec) {
            return ".";
        }
        currTime -= dec;
        return "X";
    });
}

// function fiveBerlinHours(hour) {
//     if (hour < 5) {
//         return ".";
//     }
//     return "X" + fiveBerlinHours(hour - 5);
// }

function getBerlinHours(hours) {
    let currHour = +hours;
    const arr = ["", "", "", ""];
    const fiveHourArr = arr.map((_, ind) => {
        if (currHour < 5) {
            return ".";
        }
        currHour -= 5;
        return "X";
    });
    const fiveHourString = fiveBerlinHours(+hours);
    const oneHourArr = arr.map(() => {
        if (currHour < 1) {
            return ".";
        }
        currHour -= 1;
        return "X";
    });
    return `${fiveHourString} ${oneHourArr.join("")}`;
}

function getBerlinMinutes(minutes) {
    let currMinute = +minutes;
    const fivesArr = Array.from(Array(11).keys());
    const onesArr = ["", "", "", ""];

    const fiveMinuteArr = fivesArr.map((_, index) => {
        const numb = index + 1;
        if (currMinute < 5) {
            return ".";
        }
        currMinute -= 5;
        return numb % 3 === 0 ? "|" : "X";
    });
    const oneMinuteArr = onesArr.map(() => {
        if (currMinute < 1) {
            return ".";
        }
        currMinute -= 1;
        return "X";
    });

    return `${fiveMinuteArr.join("")} ${oneMinuteArr.join("")}`;
}

function toBerlinClock(line) {
    const [hours, minutes, seconds] = line.split(":");
    return `${getBerlinSeconds(seconds)} ${getBerlinHours(
        hours
    )} ${getBerlinMinutes(minutes)}`;
    return ". .... .... ........... ....";
}

function runTests() {
    // console.log(getBerlinHours("10"));
    testCases.forEach((time) => console.log(toBerlinClock(time)));
}

runTests();
