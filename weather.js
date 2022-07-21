//Complete the Weather API Backend part using openweathermap api

let search = document.querySelector(".search-box");
let temperature = document.querySelector(".temp");
let high_low = document.querySelector(".hi-low");
let city = document.querySelector(".city");
let date = document.querySelector(".date");
let weather = document.querySelector(".weather");

function getData() {
    const apiKey = "49d638e593e8b636d01a48bb960fce97";
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + search.value + "&appid=" + apiKey + "&units=metric";
    fetch(url)
        .then(res => res.json())
        .then(data => {
            var nameVal = data.name;
            // console.log(nameVal);
            var tempVal = data.main.temp;
            var countryVal = data.sys.country;
            var highVal = data.main.temp_max;
            var lowVal = data.main.temp_min;
            var descVal = data.weather[0].description;
            var dateVal = new Date(data.dt * 1000);
            // console.log(dateVal);
            let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

            city.innerHTML = nameVal + ", " + countryVal;
            date.innerHTML = dateVal.toLocaleString('en-US', options);
            temperature.firstChild.innerHTML = Math.round(tempVal) + "°C";
            weather.innerHTML = descVal.charAt(0).toUpperCase() + descVal.slice(1);
            high_low.innerHTML = Math.round(highVal) + " °C &nbsp;/&nbsp; " + Math.round(lowVal) + " °C";
        })
}