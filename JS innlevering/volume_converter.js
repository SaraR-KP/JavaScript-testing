// An event listener to the 'convert-button' triggers the function when clicked
document.getElementById("convert-button").addEventListener("click", function () {

  // Gets the input value (converts it to a float for numeric calculations)
  const inputValue = parseFloat(document.getElementById("input-value").value);

  // Unit selected by the user
  const inputUnit = document.getElementById("measurement-in").value;

  // The output measurement selected by the user
  const outputUnit = document.getElementById("measurement-out").value;

  // Get the element where the result will be displayed
  const outputElement = document.getElementById("result");

  // Check if the input value is not a valid number
  if (isNaN(inputValue)) {
    // If the input is invalid, display an error message
    outputElement.textContent = "Please enter a valid number.";
    return; // Exit the function if the input is invalid
  }

  // This const defines the conversion rates
  const conversionRates = {
    L: { L: 1, mL: 1000, cup: 4.227, gal: 0.264, oz: 33.814, tbs: 67.628 },   
    mL: { L: 0.001, mL: 1, cup: 0.004227, gal: 0.000264, oz: 0.033814, tbs: 0.067628 }, 
    cup: { L: 0.236588, mL: 236.588, cup: 1, gal: 0.0625, oz: 8, tbs: 16 },   
    gal: { L: 3.78541, mL: 3785.41, cup: 16, gal: 1, oz: 128, tbs: 256 },    
    oz: { L: 0.0295735, mL: 29.5735, cup: 0.125, gal: 0.0078125, oz: 1, tbs: 2 }, 
    tbs: { L: 0.0147868, mL: 14.7868, cup: 0.0625, gal: 0.00390625, oz: 0.5, tbs: 1 }, 
  };

  // Conversion rate here is based on the selected input and output units
  const conversionRate = conversionRates[inputUnit][outputUnit];

  // coversion is being multiplied by the input value with the conversion rate
  const convertedValue = inputValue * conversionRate;

  // Displays the converted value rounded to two decimal places in the result element
  outputElement.textContent = `${convertedValue.toFixed(2)} ${outputUnit}`;
});
