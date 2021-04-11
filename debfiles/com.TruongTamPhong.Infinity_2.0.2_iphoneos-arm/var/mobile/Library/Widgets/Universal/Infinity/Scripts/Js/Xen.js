function mainUpdate(type){ 
if (type === "weather"){checkWeather();} else 
if (type === "battery"){
updateBattery();}
function checkWeather(){
document.getElementById('City').innerHTML = weather.city;
document.getElementById("Condition").innerHTML = condition[weather.conditionCode];
document.getElementById('Weather').src = 'Scripts/Weather/' + IconSet + '/' + weather.conditionCode + '.png';
document.getElementById("Temp").innerHTML = weather.temperature + '&deg;';
document.getElementById("High").innerHTML = weather.high + '&deg;';
document.getElementById("Low").innerHTML = weather.low + '&deg;';}}
function updateBattery() {
document.getElementById("Percent").innerHTML = batteryPercent + '%';
if(batteryPercent > 90 && batteryPercent <= 100){
document.documentElement.style.setProperty('--batC', '#0094ae');}
if(batteryPercent > 80 && batteryPercent <= 90){
document.documentElement.style.setProperty('--batC', '#3e97cf');}
if(batteryPercent > 70 && batteryPercent <= 80){
document.documentElement.style.setProperty('--batC', '#3ba6a0');}
if(batteryPercent > 60 && batteryPercent <= 70){
document.documentElement.style.setProperty('--batC', '#8cba19');}
if(batteryPercent > 50 && batteryPercent <= 60){
document.documentElement.style.setProperty('--batC', '#ffe32f');}
if(batteryPercent > 40 && batteryPercent <= 50){
document.documentElement.style.setProperty('--batC', '#fec037');}
if(batteryPercent > 30 && batteryPercent <= 40){
document.documentElement.style.setProperty('--batC', '#fe7b23');}
if(batteryPercent > 20 && batteryPercent <= 30){
document.documentElement.style.setProperty('--batC', '#d16c34');}
if(batteryPercent >= 10 && batteryPercent <= 20){
document.documentElement.style.setProperty('--batC', '#e94345');}
if(batteryPercent >= 0 && batteryPercent <= 10){
document.documentElement.style.setProperty('--batC', '#e63e71');}
document.getElementById("Bl2").style.width = batteryPercent + "%";
document.getElementById("Charging").innerHTML = (batteryCharging) ? charging : notcharging;}