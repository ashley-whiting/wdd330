function getWeather() {
  let temperature = document.getElementById("temperature");
  let description = document.getElementById("description");
  let location = document.getElementById("location");
  
  let apiKey = '69a92c44dd3404902c78dbca14ec3673';
  let api = "https://api.openweathermap.org/data/2.5/weather"
  
  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    let url =
      api +
      "?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&appid=" +
      apiKey +
      "&units=imperial";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let temp = data.main.temp;
        temperature.innerHTML = temp + "° F";
        location.innerHTML =
          data.name + " (" + latitude + "°, " + longitude + "°)";
        description.innerHTML = data.weather[0].main;
        
      });
  }

  function error() {
    location.innerHTML = "Unable to retrieve your location";
  }
}

//getWeather();