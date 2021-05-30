function TTP(){
checkSettings();
}

/*---- Avartar ----*/
document.getElementById('BgInput').addEventListener('change', function (e) {
var tw = e.target.files,
rd = new FileReader();
rd.onload = (function () {
return function (e) {
localStorage.newImage = e.target.result;
document.getElementById('Wallpaper').style.backgroundImage = 'url("' + localStorage.newImage + '")';
tw = null;
rd = null;};}(tw[0]));
rd.readAsDataURL(tw[0]);});
if (localStorage.newImage && localStorage.newImage != "null") {
document.getElementById('Wallpaper').style.backgroundImage = 'url("' + localStorage.newImage + '")';
}

/*---- Slide Time ----*/
let scrobbleIsDragging = false;
function TP() {
api.media.observeData(function (newData) {
if (newData.isStopped) {} 
handleVolume(newData.volume);
handleTrackTimes(newData.nowPlaying.elapsed, newData.nowPlaying.length, false);
handleScrobblePosition(newData.nowPlaying.elapsed, newData.nowPlaying.length);
});
api.media.observeElapsedTime(function (newElapsedTime) {
handleTrackTimes(newElapsedTime, api.media.nowPlaying.length, false);
handleScrobblePosition(newElapsedTime, api.media.nowPlaying.length);
});
handleVolume(api.media.volume);
}
function handleTrackTimes(elapsed, length, forceUpdate) {
if (scrobbleIsDragging && !forceUpdate) return;
const elapsedContent = length === 0 ? '--:--' : secondsToFormatted(elapsed);
document.getElementById('Elapsed').innerHTML = elapsedContent;
const lengthContent = length === 0 ? '--:--' : secondsToFormatted(length);
document.getElementById('Length').innerHTML = lengthContent;
document.getElementById('Playback-time').setAttribute('max', length);
document.getElementById('Playback-time').value = elapsed;
}
function handleScrobblePosition(elapsed, length) {
if (scrobbleIsDragging) return;
const scrobble = document.getElementById('Scrobble-slider');
scrobble.setAttribute('max', length);
scrobble.value = elapsed;
}
function handleVolume(level) {
document.getElementById('Volume-slider').setAttribute('value', level);
}
function secondsToFormatted(seconds) {
if (seconds === 0) return '0:00';
const isNegative = seconds < 0;
if (isNegative) return '0:00';
seconds = Math.abs(seconds);
const hours = Math.floor(seconds / 60 / 60);
const minutes = Math.floor(seconds / 60) - (hours * 60);
const secs = Math.floor(seconds - (minutes * 60) - (hours * 60 * 60));
if (hours > 0) {
return hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (secs < 10 ? '0' : '') + secs;
} else {
return minutes + ':' + (secs < 10 ? '0' : '') + secs;}
}
function onVolumeChanged(input) {
api.media.setVolume(input);
}
function onScrobbleUIChanged(input) {
scrobbleIsDragging = true;
handleTrackTimes(input, api.media.nowPlaying.length, true);
}
function onScrobbleChanged(input) {
api.media.seekToPosition(input);
handleTrackTimes(input, api.media.nowPlaying.length, true);
scrobbleIsDragging = false;
}

if (window.config.fontURL) {
var fontArray = window.config.fontURL.split(".");
var newStyle = document.createElement('style');
if ((window.config.fontURL) && (fontArray[fontArray.length - 1] === "ttf")) {
newStyle.appendChild(document.createTextNode("\
@font-face {\ font-family: CustomFont;\
src: url('" + window.config.fontURL + "') format('truetype');\
}\
"));
} else {
newStyle.appendChild(document.createTextNode("\
@font-face {\ font-family: CustomFont;\
src: url('" + window.config.fontURL + "') format('" + fontArray[fontArray.length - 1] + "');\
}\
"));}
document.head.appendChild(newStyle);
document.getElementById("body").style.fontFamily = "CustomFont";
}