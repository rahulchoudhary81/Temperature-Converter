const CelsiusE1 = document.getElementById("Celsius");
const FahrenheitE1 = document.getElementById("Fahrenheit");
const KelvinE1 = document.getElementById("Kelvin");

CelsiusE1.addEventListener("input", computeTemp);
FahrenheitE1.addEventListener("input", computeTemp);
KelvinE1.addEventListener("input", computeTemp);

function computeTemp(event) {
    const currentValue = +event.target.value;

    switch (event.target.name) {
        case "Celsius":
            KelvinE1.value = (currentValue + 273.15).toFixed(2);
            FahrenheitE1.value = ((currentValue * 9 / 5) + 32).toFixed(2);
            break;
        case "Fahrenheit":
            CelsiusE1.value = ((currentValue - 32) * 5 / 9).toFixed(2);
            KelvinE1.value = ((currentValue - 32) * 5 / 9 + 273.15).toFixed(2);
            break;
        case "Kelvin":
            CelsiusE1.value = (currentValue - 273.15).toFixed(2);
            FahrenheitE1.value = ((currentValue - 273.15) * (9 / 5) + 32).toFixed(2);
            break;
        default:
            break;
    }
}

