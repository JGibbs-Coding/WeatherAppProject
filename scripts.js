function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

function displayCity(response) {
  console.log(response);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  let tempElement = document.querySelector(".current-temperature-value");
  tempElement.innerHTML = Math.round(response.data.temperature.current);
}
function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;

  let apiKey = "7fftc541dbabc3018759foaa254e09a2";
  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(url).then(displayCity);
}
