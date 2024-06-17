function convertToCelsius() {
    let fahrenheit = document.getElementById("fahrenheit").value;
    if (fahrenheit === "") {
        alert("Please enter a value in Fahrenheit.");
        return;
    }
    let celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("result").innerText = `${fahrenheit}°F is ${celsius.toFixed(2)}°C`;
}

function convertToFahrenheit() {
    let celsius = document.getElementById("celsius").value;
    if (celsius === "") {
        alert("Please enter a value in Celsius.");
        return;
    }
    let fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("result").innerText = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
}
