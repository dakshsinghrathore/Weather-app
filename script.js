
const apiKey = "b3a92fcfe17356cc9cbc5c21593930d4";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML =
      data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src =
        "https://github.com/dakshsinghrathore/Brighter-Beginnings/assets/115932772/224cd285-4b56-461d-a747-fcddf4c03088";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src =
        "https://github.com/dakshsinghrathore/Brighter-Beginnings/assets/115932772/b38c5530-9caf-4fe2-97ba-65ec321fbf69";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src =
        "https://github.com/dakshsinghrathore/Brighter-Beginnings/assets/115932772/1ed8b530-50e4-4bf0-874a-5fa151030726";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src =
        "https://github.com/dakshsinghrathore/Brighter-Beginnings/assets/115932772/437719f8-f93c-4332-8cc8-80296b539ba0";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src =
        "https://github.com/dakshsinghrathore/Brighter-Beginnings/assets/115932772/d04be3dc-b362-4f96-8e76-c2cc1fbb7f18";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
