/* places.js */

// Function to calculate wind chill (Celsius)
function calculateWindChill(tempC, windSpeedKph) {
  const windChillC = 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windSpeedKph, 0.16) + 0.3965 * tempC * Math.pow(windSpeedKph, 0.16);
  return windChillC;
}

// Static weather data (matching the HTML)
const temperatureC = 22; // Temperature in Celsius
const windSpeedKph = 15;   // Wind speed in km/h

// Get the wind chill display element
const windChillElement = document.getElementById("windchill");

// Check if wind chill should be calculated (Celsius conditions)
if (temperatureC <= 10 && windSpeedKph > 4.8) {
  const windChill = calculateWindChill(temperatureC, windSpeedKph);
  windChillElement.textContent = windChill.toFixed(2) + " °C"; // Display with 2 decimal places
} else {
  windChillElement.textContent = "N/A";
}

// Update the footer with the current year and last modified date
const currentYearElement = document.getElementById("currentYear");
const lastModifiedElement = document.getElementById("lastModified");

if (currentYearElement) {
  currentYearElement.textContent = new Date().getFullYear();
}

if (lastModifiedElement) {
  lastModifiedElement.textContent = document.lastModified;
}