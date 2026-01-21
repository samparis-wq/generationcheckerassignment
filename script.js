function checkGeneration() {
    let year = document.getElementById("birthYear").value;
    let result = document.getElementById("result");
    let currentYear = new Date().getFullYear();

    if (!/^\d{4}$/.test(year) || year > currentYear || year < 1900) {
        result.style.color = "red";
        result.innerHTML = "Invalid year entered.";
        return;
    }

    year = parseInt(year);
    let generation = "";

    if (year >= 2013) {
        generation = "Gen Alpha";
    } else if (year >= 1997) {
        generation = "Gen Z";
    } else if (year >= 1981) {
        generation = "Millennials (Gen Y)";
    } else if (year >= 1965) {
        generation = "Gen X";
    } else if (year >= 1946) {
        generation = "Baby Boomers";
    } else {
        generation = "Silent Generation";
    }

    result.style.color = "green";
    result.innerHTML = "You are: " + generation;
}
