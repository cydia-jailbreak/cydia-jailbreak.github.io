function mainUpdate(type){ 
	if(type === "weather"){
		checkWeather();
	}else if (type === "battery"){
		updateBattery();	  	
	}else if (type === "music"){
		if(mu === 1)
			checkMusic();}
}
function checkWeather(){
	document.getElementById('Ảnh_Thời_Tiết').src = 'Scripts/Weather/' + weather.conditionCode + '.png';

	if(one === 1){
		document.getElementById('weatherIconMus').src = 'Scripts/Weather/' + weather.conditionCode + '.png';
	}	
	document.getElementById('condition').innerHTML = weather.condition;	
	document.getElementById('Nhiệt_Độ_Hiện_Tại').innerHTML = weather.temperature;	
      document.getElementById('hightemp').innerHTML = weather.high;
      document.getElementById('lowtemp').innerHTML = weather.low;
}
function updateBattery() {
	"use strict";
	document.getElementById("Phần_Trăm_Pin").innerHTML = 'Battery level ' + batteryPercent + '%';	
	document.getElementById("bl2").style.width = batteryPercent + '%';	
}