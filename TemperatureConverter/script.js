document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.getElementById("celsius");
    const resultSpan = document.getElementById("result");
    const convertButton = document.getElementById("convert");

    convertButton.addEventListener("click", function () {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            resultSpan.textContent = fahrenheit.toFixed(2) + " °F";
        } else {
            resultSpan.textContent = "Invalid input";
        }
    });
});
