// require("readline")
//     .createInterface({ input: process.stdin })
//     .on("line", (line) => console.log(line + " => " + toBerlinClock(line)));

const testCases = ["00:00:00", "00:00:01", "10:10:10", "22:23:18"];

function getBerlinSeconds(seconds) {
    return +seconds % 2 === 0 ? "." : "X";
}

function getBerlinString(time, dec) {
    if (time < dec) return "";
    return "X" + getBerlinString(time - dec, dec);
}

function formatString(string, length) {
    return string.padEnd(length, ".").slice(0, length);
}

function formatFiveMinuteString(string) {
    return formatString(
        string
            .split("")
            .map((char, i) => ((i + 1) % 3 === 0 ? "|" : char))
            .join(""),
        11
    );
}

function getBerlinHours(hours) {
    const fiveHourString = formatString(getBerlinString(hours, 5), 4);
    const oneHourString = formatString(getBerlinString(hours % 5, 1), 4);
    return `${fiveHourString} ${oneHourString}`;
}

function getBerlinMinutes(minutes) {
    const fiveMinuteString = formatFiveMinuteString(
        getBerlinString(minutes, 5)
    );
    const minuteString = formatString(getBerlinString(minutes % 5, 1), 4);
    return `${fiveMinuteString} ${minuteString}`;
}

function toBerlinClock(line) {
    const [hours, minutes, seconds] = line.split(":");
    return `${getBerlinSeconds(seconds)} ${getBerlinHours(
        +hours
    )} ${getBerlinMinutes(+minutes)}`;
}

function runTests() {
    // console.log(getBerlinHours("10"));
    testCases.forEach((time) =>
        console.log(`${time} => ${toBerlinClock(time)}`)
    );
}

runTests();
