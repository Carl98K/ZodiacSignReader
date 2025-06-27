const zodiacForm = document.getElementById("zodiacForm");
const zodiacInput = document.getElementById("zodiacInput");
const zodiacName = document.getElementById("zodiacName");
const dateRange = document.getElementById("dateRange");
const desc = document.getElementById("desc");

zodiacName.style.visibility = "hidden";
dateRange.style.visibility = "hidden";
desc.style.visibility = "hidden";

let name = "";
let date_range = "";
let description = "";

zodiacForm.addEventListener("submit", event => {

    event.preventDefault();

    const zodiacSignInput = zodiacInput.value;

    let zodiacSignNumber = assignZodiacSign(zodiacSignInput);

    fetchData(zodiacSignNumber);
});

async function fetchData(zodiacSignNumber) {

    let response = await fetch("zodiac_signs.json");

    if (!response.ok) {
        throw new Error("Could not fetch resource");
    }

    let data = await response.json();

    const {
        name: zodiacSign,
        date_range: zodiacDate,
        description: zodiacDesc
    } = data[zodiacSignNumber];

    setData(zodiacSign, zodiacDate, zodiacDesc);
}

function assignZodiacSign(zodiacSignInput) {

    switch (zodiacSignInput.toLowerCase()) {
        case "aries":
            return 0;
        case "taurus":
            return 1;
        case "gemini":
            return 2;
        case "cancer":
            return 3;
        case "leo":
            return 4;
        case "virgo":
            return 5;
        case "libra":
            return 6;
        case "scorpio":
            return 7;
        case "sagittarius":
            return 8;
        case "capricorn":
            return 9;
        case "aquarius":
            return 10;
        case "pisces":
            return 11;
        default:
            alert("Please enter a valid zodiac sign");
            return null;
    }
}

function setData(zodiacName, dateRange, description) {

    this.zodiacName.textContent = zodiacName;
    this.dateRange.textContent = dateRange;
    this.desc.textContent = description;

    this.zodiacName.style.visibility = "visible";
    this.dateRange.style.visibility = "visible";
    this.desc.style.visibility = "visible";
}
