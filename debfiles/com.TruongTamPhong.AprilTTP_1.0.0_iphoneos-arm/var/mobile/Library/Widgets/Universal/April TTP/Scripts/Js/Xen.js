function mainUpdate(type){ 
if (type === "weather"){checkWeather();} else 
if (type === "battery"){updateBattery();}
function checkWeather(){
document.getElementById('City').innerHTML = weather.city;
document.getElementById("Condition").innerHTML = conditiontext + weather.temperature + '&deg ' + condition[weather.conditionCode] + '. <br>' + humtext + weather.humidity + "%. " + windtext + weather.windSpeed + ' km/h. ' + raintext + weather.chanceofrain + '%. <br>' + lotext + weather.low + '&deg;. ' + hitext + weather.high + '&deg;.';
document.getElementById('Weather').src = 'Scripts/Weather/' + IconSet + '/' + weather.conditionCode + '.png';}}
function updateBattery() {
document.getElementById("Percent").innerHTML = batteryPercent + '%';
document.getElementById("Charging").innerHTML = (batteryCharging) ? charging : notcharging;}