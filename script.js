const apiKey = "949812c3454e7713102cc2a29afc1393"; 

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const resultDiv = document.getElementById("weatherResult");

  if (!city) {
    resultDiv.innerHTML = "Please enter a city name.";
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      if (data.cod === "404") {
        resultDiv.innerHTML = "City not found.";
      } else {
        const weather = `
          <strong>${data.name}</strong><br>
          🌡️ Temperature: ${data.main.temp}°C<br>
          💧 Humidity: ${data.main.humidity}%<br>
          🌥️ Condition: ${data.weather[0].description}
        `;
        resultDiv.innerHTML = weather;
      }
    })
    .catch(error => {
      console.error("Error fetching weather:", error);
      resultDiv.innerHTML = "Something went wrong.";
    });
}
