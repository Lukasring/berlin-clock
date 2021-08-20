require("readline")
    .createInterface({ input: process.stdin })
    .on("line", (line) => console.log(line + " => " + toBerlinClock(line)));

// const testCases = ["00:00:00", "00:00:01", "10:10:10", "22:23:18"];

function getBerlinSeconds(seconds) {
    return +seconds % 2 === 0 ? "." : "X";
}

function getBerlinHours(hours) {
    const currHour = +hours;
    const onesArr = Array.from(Array(4).keys()).map((_) => _ + 1);
    const fiveArr = Array.from(Array(4).keys()).map((_) => (_ + 1) * 5);
    const fiveHourArr = fiveArr.map((hour) => {
        if (currHour < hour) {
            return ".";
        }
        // currHour -= 5;
        return "X";
    });
    // const fiveHourString = fiveBerlinHours(+hours);
    const oneHourArr = onesArr.map((hour) => {
        if (currHour - hour * 5 < hour) {
            return ".";
        }
        // currHour -= 1;
        return "X";
    });
    return `${fiveHourArr.join("")} ${oneHourArr.join("")}`;
}

function getBerlinMinutes(minutes) {
    let currMinute = +minutes;
    const fiveArr = Array.from(Array(11).keys()).map((_) => (_ + 1) * 5);
    const onesArr = Array.from(Array(4).keys()).map((_) => _ + 1);

    const fiveMinuteArr = fiveArr.map((minute, index) => {
        const numb = index + 1;
        if (currMinute < minute) {
            return ".";
        }
        // currMinute -= 5;
        return numb % 3 === 0 ? "|" : "X";
    });
    const oneMinuteArr = onesArr.map((minute) => {
        if (currMinute < minute) {
            return ".";
        }
        // currMinute -= 1;
        return "X";
    });

    return `${fiveMinuteArr.join("")} ${oneMinuteArr.join("")}`;
}

function toBerlinClock(line) {
    const [hours, minutes, seconds] = line.split(":");
    return `${getBerlinSeconds(seconds)} ${getBerlinHours(
        hours
    )} ${getBerlinMinutes(minutes)}`;
    // return ". .... .... ........... ....";
}

// function runTests() {
//     // console.log(getBerlinHours("10"));
//     testCases.forEach((time) => console.log(toBerlinClock(time)));
// }

// runTests();
