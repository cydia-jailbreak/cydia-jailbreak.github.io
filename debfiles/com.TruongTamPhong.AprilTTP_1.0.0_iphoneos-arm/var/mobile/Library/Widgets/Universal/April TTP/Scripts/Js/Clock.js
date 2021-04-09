window.requestAnimFrame = (function () {return window.requestAnimationFrame || window.webkitRequestAnimationFrame;}());
function clock(options) {
var getTimes = function () {
var d = new Date(),
funcs = {
hour: function () {var hour = (options.twentyfour === false) ? d.getHours() : (d.getHours() + 11) % 12 + 1;
hour = (options.padzero === false) ? (hour < 10 ? "0" + hour : "" + hour) : hour;
return hour;},
minute: function () {return (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();},
ampmstrict: function () {
var ampm = (d.getHours() > 11) ? "pm" : "am";
return ampm;},
am: function () {if (options.twentyfour === false) {
return ' ';}
return (d.getHours() > 11) ? "pm" : "am";},
datepadded: function () {return (d.getDate() < 10) ? "0" + d.getDate() : d.getDate();},
day: function () {return d.getDay();},
month: function () {return d.getMonth();}};
options.success(funcs);
setTimeout(function () {
window.requestAnimFrame(getTimes);}, options.refresh);};
getTimes();}