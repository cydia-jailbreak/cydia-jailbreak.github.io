function mainUpdate(type){
if (type === "music"){checkMusic();
} else {
if (type === "weather"){checkWeather();}
else if (type === "battery"){updateBattery();}}
}

function checkWeather(){
document.getElementById("City").innerHTML = weather.city;
document.getElementById("Condition").innerHTML = condition[weather.conditionCode];
document.getElementById("Temp").innerHTML = weather.temperature + '&deg;';
document.getElementById("Humi").innerHTML = humtext + weather.humidity + '%' + ' ✫';
document.getElementById("Wind").innerHTML = windtext + weather.windSpeed + ' km/h' + ' ✫';
}
var activate = true;
function updateBattery() {
document.getElementById("Percentage").innerHTML = batteryPercent + '%';
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
if(batteryCharging === 1){
if(activate){
activate = false;
document.getElementById("BattCont").style.opacity = 0.1;
setTimeout(function (){
document.getElementById("BattCont").style.opacity = 1;
activate = true;}, 3000);}}}

function checkMusic(){
if (isplaying === 1) {		document.getElementById('PlayPause').classList.remove("zeek-buttonplay");		document.getElementById('PlayPause').classList.add("zeek-buttonpause");
} else {		document.getElementById('PlayPause').classList.remove("zeek-buttonpause");		document.getElementById('PlayPause').classList.add("zeek-buttonplay");
}

if(title === "(null)"){
document.getElementById('Artist').innerHTML = artisttext;
document.getElementById('Title').innerHTML = titletext;
} else {
document.getElementById('Artist').innerHTML = artist;
document.getElementById('Title').innerHTML = title;

if (checkOverflow(document.getElementById('Title')) === true){
document.getElementById('Title').classList.add("marquee");
} else {
document.getElementById('Title').classList.remove("marquee");}
}

if(album === "(null)"){
document.getElementById('Album').src = 'Scripts/Js/Music.js';
} else {		
var xhr = new XMLHttpRequest();
xhr.open('HEAD', "file:///var/mobile/Documents/Artwork.jpg", false);
xhr.send();

if (xhr.status === "404") {
document.getElementById('Album').src = 'Scripts/Js/Music.js';
} else {
document.getElementById('Album').src = "file:///var/mobile/Documents/Artwork.jpg?" + (new Date()).getTime();
}}}

function checkOverflow(el) {
var curOverflow = el.style.overflow;
if ( !curOverflow || curOverflow === "visible" ){
el.style.overflow = "hidden"; 
}

var isOverflowing = el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight;
el.style.overflow = curOverflow;
return isOverflowing; 
} 

function playPause() {
if(
document.getElementById('PlayPause').classList.contains("zeek-buttonplay")){ 
document.getElementById('PlayPause').classList.remove("zeek-buttonplay");
document.getElementById('PlayPause').classList.add("zeek-buttonpause");
} else { 
document.getElementById('PlayPause').classList.remove("zeek-buttonpause");
document.getElementById('PlayPause').classList.add("zeek-buttonplay");}

window.location = 'xeninfo:playpause';
document.getElementById('PlayPause').style.opacity = 0;
setTimeout(function (){
document.getElementById('PlayPause').style.opacity = 1;
}, 200);
}
		
function next() {
window.location = 'xeninfo:nexttrack';
document.getElementById('Next').style.opacity = 0;
setTimeout(function (){
document.getElementById('Next').style.opacity = 1;
}, 200);
}
			
function prev() {
window.location = 'xeninfo:prevtrack';
document.getElementById('Prev').style.opacity = 0;
setTimeout(function (){
document.getElementById('Prev').style.opacity = 1;
}, 200);
}