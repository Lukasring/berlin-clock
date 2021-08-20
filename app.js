require("readline")
    .createInterface({ input: process.stdin })
    .on("line", (line) => console.log(line + " => " + toBerlinClock(line)));

// const testCases = ["00:00:00", "00:00:01", "10:10:10", "22:23:18"];

const getBerlinSeconds = (seconds) => (+seconds % 2 === 0 ? "." : "X");

const getBerlinString = (time, dec) =>
    time < dec ? "" : "X" + getBerlinString(time - dec, dec);

const formatString = (string, length) => string.padEnd(length, ".");

const formatFiveMinuteString = (string) =>
    formatString(string.replace(/(..)./g, "$1|"), 11);

const getBerlinHours = (hours) => {
    const fiveHourString = formatString(getBerlinString(hours, 5), 4);
    const oneHourString = formatString(getBerlinString(hours % 5, 1), 4);
    return `${fiveHourString} ${oneHourString}`;
};

const getBerlinMinutes = (minutes) => {
    const fiveMinuteString = formatFiveMinuteString(
        getBerlinString(minutes, 5)
    );
    const minuteString = formatString(getBerlinString(minutes % 5, 1), 4);
    return `${fiveMinuteString} ${minuteString}`;
};

const toBerlinClock = (line) => {
    const [hours, minutes, seconds] = line.split(":");
    return `${getBerlinSeconds(seconds)} ${getBerlinHours(
        +hours
    )} ${getBerlinMinutes(+minutes)}`;
};

// function runTests() {
//     // console.log(getBerlinHours("10"));
//     testCases.forEach((time) =>
//         console.log(`${time} => ${toBerlinClock(time)}`)
//     );
// }

// runTests();
