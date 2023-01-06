const APIkey = "9d51c6c59ee624f1b23b19738545b0b0";

function ok(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector('#weather span:first-child');
            const weather = document.querySelector('#weather span:last-child');
            city.innerText = `🌏${data.name}, `; 
            weather.innerText = `🌥️${data.weather[0].main}, 🌡️${Math.round(data.main.temp)}°C`;
        });
}

function error(){
    alert("Can't find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(ok,error);
