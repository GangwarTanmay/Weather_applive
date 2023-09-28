const apiurl="https://api.openweathermap.org/data/2.5/weather?appid=385a3d9c0274cfb2bcaa2f12679a2f61&units=metric&q=";

function c() {
    var city = document.querySelector('#city_name').value;
    weather(city);
}

async function weather(city){
const res = await fetch(apiurl+city);
const data = await res.json();
console.log(data);
console.log(data.main.temp);
document.querySelector('#temp').innerHTML = Math.round(data.main.temp)+" °C";
    document.querySelector('#city').innerHTML = data.name;
    document.querySelector('#feelslike').innerHTML = "Feels Like : " + data.main.feels_like + " °C";
    document.querySelector('#visibility').innerHTML = data.weather[0].main;
    document.querySelector('#mintemp').innerHTML = data.main.temp_min + " °C";
    document.querySelector('#maxtemp').innerHTML = data.main.temp_max + " °C";
    document.querySelector('#windspeed').innerHTML = data.wind.speed +" km/h";
    document.querySelector('#humidity').innerHTML = data.main.humidity + " %";

}
