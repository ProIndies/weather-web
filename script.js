const apikey = "2fa9121772482abaf348a42a8f853cf6";
const formEl = document.querySelector("form");
const details = document.querySelector(".details");




formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  details.innerHTML = "<h1>Loading...</h1>";
  const location = e.target.location.value;
  weatherApp(location);
  formEl.reset();
});
async function weatherApp(location) {
  const result = await fetchAPI(location);
  generateHTML(result);
}

async function fetchAPI(location) {
  const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`;
   const res = await fetch(baseURL);
  const data = await res.json();
  console.log(data);
  return data;}
  
function generateHTML(data) {
  const html = `
  <div class="city">
  <h1>Weather In - ${data.name},${data.sys.country}</h1>
  </div>




  <div class="temp">
  <h1>Avg Temp: ${data.main.temp}Kelvin</h1>
  </div>
<div class="minmaxtemp">
  <h2>Feels Like: ${data.main.feels_like}</h2> 
  <h2>Max. Temp: ${data.main.temp}</h2>
</div>
<div class="note"> *Note Temperature is in Kelvin</div>
<div class="minmaxtemp1">
  <h2>Sky : ${data.weather[0].description}</h2> 
  <h2>Humidity : ${data.main.humidity}%</h2>
</div>
<div class="pi">
<a href="https://proindies.com"><img hight="40px" width="50%" src="https://proindies.com/img/proindies-logo.png"</a>
</div>
  `;
  details.innerHTML = html;
}
