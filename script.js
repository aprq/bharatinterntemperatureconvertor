// script.js

// Get references to the HTML elements
const celsiusInput = document.getElementById("celsius");
const convertButton = document.getElementById("convertBtn");
const resultParagraph = document.getElementById("result");

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Function to handle the conversion when the button is clicked
function handleConversion() {
  // Get the value entered in the Celsius input
  const celsiusValue = parseFloat(celsiusInput.value);

  // Check if the input is a valid number
  if (!isNaN(celsiusValue)) {
    // Convert Celsius to Fahrenheit
    const fahrenheitValue = celsiusToFahrenheit(celsiusValue);
    
    // Display the result
    resultParagraph.textContent = `${celsiusValue} Celsius is equal to ${fahrenheitValue.toFixed(2)} Fahrenheit.`;
  } else {
    // Display an error message if the input is not a valid number
    resultParagraph.textContent = "Please enter a valid temperature in Celsius.";
  }
}

// Add a click event listener to the Convert button
convertButton.addEventListener("click", handleConversion);
