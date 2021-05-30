function checkSettings(){
// on off
if(!config.music){
document.getElementById('MuCont').style.display = 'none';
}
if(!config.HumiWind){
document.getElementById('BgHumi').style.display = 'none';
document.getElementById('BgWind').style.display = 'none';
}

// color
document.documentElement.style.setProperty('--infoCl', config.infoCl);
document.documentElement.style.setProperty('--teCl', config.teCl);

// blur
document.documentElement.style.setProperty('--musicBgBlur', config.musicBgBlur + 'px');

// images
document.getElementById("Statusbar").src="Scripts/Js/Shadow.js";
document.getElementById('Overlay').src = 'Scripts/Images/Overlay.png';

// location
document.documentElement.style.setProperty('--huwiY', config.huwiY + '%');

// font size
document.documentElement.style.setProperty('--tbFontS', config.tbFontS + 'px');
}