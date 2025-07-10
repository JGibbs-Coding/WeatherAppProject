let form = document.querySelector("form"); // Select the form
form.addEventListener("submit", updateCity);

function updateCity(event) {
  event.preventDefault(); // Prevent form from reloading the page
  let input = document.querySelector("#search-input"); // Get input field
  let cityElement = document.querySelector("#current-city"); // Get h1
  cityElement.innerHTML = input.value; // Set h1 to input value
}

let date = new Date();

let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = weekdays[date.getDay()];
let hours = date.getHours();
let minutes = date.getMinutes();

let fullDate = `${day} ${hours}:${minutes}`;

// Display it in the HTML
let currentDetails = document.querySelector(".current-details");
currentDetails.innerHTML = `${fullDate}, moderate rain <br />
     Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>`;
