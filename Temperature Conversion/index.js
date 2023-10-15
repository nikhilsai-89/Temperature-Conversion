
        function convertTemperature(source) {
            var celsius, fahrenheit, kelvin;

            if (source === 'celsius') {
                celsius = parseFloat(document.getElementById("celsius").value);
                fahrenheit = (celsius * 9/5) + 32;
                kelvin = celsius + 273.15;
                document.getElementById("fahrenheitC").textContent = fahrenheit.toFixed(2);
                document.getElementById("kelvinC").textContent = kelvin.toFixed(2);
            } else if (source === 'fahrenheit') {
                fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
                celsius = (fahrenheit - 32) * 5/9;
                kelvin = (fahrenheit - 32) * 5/9 + 273.15;
                document.getElementById("celsiusF").textContent = celsius.toFixed(2);
                document.getElementById("kelvinF").textContent = kelvin.toFixed(2);
            } else if (source === 'kelvin') {
                kelvin = parseFloat(document.getElementById("kelvin").value);
                celsius = kelvin - 273.15;
                fahrenheit = (kelvin - 273.15) * 9/5 + 32;
                document.getElementById("celsiusK").textContent = celsius.toFixed(2);
                document.getElementById("fahrenheitK").textContent = fahrenheit.toFixed(2);
            }
        }