$(document).ready(function() {

		getWeatherInfo();
		
});



let date = new Date();
 let year = date.getFullYear() 
let month = date.getMonth();
let day = date.getDay();
let days = date.getDate();
let hour = date.getHours() % 12;
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let arryOfDays= ["Sun","Mon","Tues","Wed","Thrus","Fri","Sat"];
let arryOfMnths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let am_pm = hour >= 12 ? "pm" : "am";
let zero = minutes <= 9? "0" : "";
function getWeatherInfo(){
	let lagos ='https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=e43c60c1d74b3bccd1b3654eb8db80bd&lang=en&units=metric';
			fetch(`${lagos}`)
				.then(function(res) {
					return res.json();
				})
				.then(function(data) {
					let weather_info = '';
					console.log(data);
					weather_info += `
					<div class=text-center>
					<h2 class="time_days">${arryOfDays[day]} ${days} ${arryOfMnths[month]} ${year}</h2>
					<h2 class="time_days_two">${hour}:${zero}${minutes}${am_pm}</h2>
			<h3 class="name_city"> City: ${data.name}, <span>${data.sys.country}</span> </h4>
			<div class="section_transpratent mt-4 p-4">	
			<h4> Weather: ${data.weather[0].main}  </h4>
			
			<img src="https://api.openweathermap.org/img/w/${data.weather[0].icon}" alt="image"/>
			<h5>${data.main.temp}&#176;C </h5>
			<h5>${data.weather[0].description}</h5>
			
			<h5><strong> Humidity</strong>: ${data.main.humidity}%</h5>
			<h5><strong> Max Temp</strong>: ${data.main.temp_max}&#176;C</h5>
			<h5><strong> Min Temp</strong>: ${data.main.temp_min}&#176;C</h5>
			<h5><strong> Wind Speed</strong>: ${data.wind.speed} m/s</h5>
			</div>
			</div>
          `;
					$('#weather-info').html(weather_info);
					console.log(data)
				});
}
// https://unbeatable-abayomi.github.io/WeatherMapAPI/index.html