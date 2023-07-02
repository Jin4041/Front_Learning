const API_KEY = "546fcbb5e1e00413477c345d6c73099d";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  //console.log("You live in", lat, lon); //내 경도, 위도 확인
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `/ ${data.weather[0].main} / ${data.main.temp} ℃`;
    })
  );
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
