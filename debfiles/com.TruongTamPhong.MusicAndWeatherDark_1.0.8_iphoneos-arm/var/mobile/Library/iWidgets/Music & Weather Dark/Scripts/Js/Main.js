window.addEventListener("load", function() { 
}, false);
function init(){
	updateClock();
	setInterval("updateClock();", 5000);
	checkSettings();}
function checkSettings(){	
	document.documentElement.style.setProperty('--br', br + 'px');
	document.documentElement.style.setProperty('--bl', bl + 'px');
	if(tM === 0){
		document.documentElement.style.setProperty('--d', 'rgba(219,236,255,0)');
	}
	if(tMp === 0){
		document.documentElement.style.setProperty('--dp', 'rgba(219,236,255,0)');
	}
	if(dM === 1 && autoD === 0){
		setDark();
	}
	if(dM === 0 && autoD === 0){
		setLight();
	}
	if(autoD === 1){
		var x = window.matchMedia("(prefers-color-scheme: dark)");
		var y = window.matchMedia("(prefers-color-scheme: light)");
		dark(x); 
		x.addListener(dark);
		light(y); 
		y.addListener(light);
	}
	if(we === 0 && one === 0){
		document.getElementById('_genCont').style.display = 'none';
	}
	if(we === 1 && one === 0){
		document.documentElement.style.setProperty('--wW', wW + 'px');
	}
	if(one === 1){
		document.documentElement.style.setProperty('--wW', mW + 'px');
		document.documentElement.style.setProperty('--wH', '120px');		
		document.getElementById('musicArtGen').style.display = 'block';
		document.getElementById('weatherIconMus').style.display = 'block';
	}
	document.documentElement.style.setProperty('--wX', wX + '%');
	document.documentElement.style.setProperty('--wY', wY + 'px');
	if(mu === 0 && one === 0){
		document.getElementById('_musCont').style.display = 'none';
	}
	document.documentElement.style.setProperty('--mW', mW + 'px');
	if(mu === 1 && one === 0){
		document.documentElement.style.setProperty('--mX', mX + '%');
		document.documentElement.style.setProperty('--mY', mY + 'px');
	}
	if(one === 1){
		document.getElementById('_musCont').style.zIndex = -1;
		document.getElementById('_musCont').style.opacity = 0;
		document.getElementById('_musCont').style.display = 'none';		
		document.getElementById('mArt').classList.add('closed');
		document.getElementById('infoCont').classList.add('closed');
		document.getElementById('controls').classList.add('closed');
		
		document.getElementById('_musCont').style.bottom = 'calc(100% - 120px - ' + wY + 'px)';
		document.documentElement.style.setProperty('--mX', wX + '%');
	}
	if(ac === 0){
		document.getElementById('appsCont').style.display = 'none';
	}
	document.documentElement.style.setProperty('--aW', aW + 'px');
	document.documentElement.style.setProperty('--aH', aH + 'px');
	document.documentElement.style.setProperty('--aX', aX + '%');
	document.documentElement.style.setProperty('--aY', aY + 'px');
	document.documentElement.style.setProperty('--abr', abr + 'px');	
	if(ac2 === 1){
		document.getElementById('appsCont2').style.display = 'block';
	}
	document.documentElement.style.setProperty('--a2W', a2W + 'px');
	document.documentElement.style.setProperty('--a2H', a2H + 'px');
	document.documentElement.style.setProperty('--a2X', a2X + '%');
	document.documentElement.style.setProperty('--a2Y', a2Y + 'px');
	document.documentElement.style.setProperty('--a2br', a2br + 'px');
	if(ac3 === 1){
	document.getElementById('appsCont3').style.display = 'block';
	}
	document.documentElement.style.setProperty('--a3W', a3W + 'px');
	document.documentElement.style.setProperty('--a3H', a3H + 'px');
	document.documentElement.style.setProperty('--a3X', a3X + '%');
	document.documentElement.style.setProperty('--a3Y', a3Y + 'px');
	document.documentElement.style.setProperty('--a3br', a3br + 'px');
	}
function dark(x) {
  if (x.matches) { 
	setDark();
  }
}
function light(y) {
  if (y.matches) { 
	setLight();
  }
}
function setDark(){
	if(tM === 1){
		document.documentElement.style.setProperty('--d', dbg);
	}
	if(tMp === 1){
		document.documentElement.style.setProperty('--dp', dbgp);
	}
	document.documentElement.style.setProperty('--primary', C1);
	document.documentElement.style.setProperty('--secondary', C2);
	if(sh === 'ou'){
document.getElementById('appsCont').classList.remove('morph');
document.getElementById('appsCont2').classList.remove('morph');
document.getElementById('appsCont3').classList.remove('morph');
document.getElementById('_genCont').classList.remove('morph');
document.getElementById('bl1').classList.remove('morph');
document.getElementById('_musCont').classList.remove('morph');
document.getElementById('prev').classList.remove('morph');
document.getElementById('playPause').classList.remove('morph');
document.getElementById('next').classList.remove('morph');
document.getElementById('appsCont').classList.remove('morph-light-out');
document.getElementById('appsCont2').classList.remove('morph-light-out');
document.getElementById('appsCont3').classList.remove('morph-light-out');
document.getElementById('_genCont').classList.remove('morph-light-out');
document.getElementById('bl1').classList.remove('morph-light-out');
document.getElementById('_musCont').classList.remove('morph-light-out');
document.getElementById('prev').classList.remove('morph-light-out');
document.getElementById('playPause').classList.remove('morph-light-out');
document.getElementById('next').classList.remove('morph-light-out');
document.getElementById('appsCont').classList.add('morph-dark-out');
document.getElementById('appsCont2').classList.add('morph-dark-out');
document.getElementById('appsCont3').classList.add('morph-dark-out');
document.getElementById('_genCont').classList.add('morph-dark-out');
document.getElementById('bl1').classList.add('morph-dark-out');
document.getElementById('_musCont').classList.add('morph-dark-out');
document.getElementById('prev').classList.add('morph-dark-out');
document.getElementById('playPause').classList.add('morph-dark-out');
document.getElementById('next').classList.add('morph-dark-out');
	}
}
function setLight(){
	if(tM === 1){
		document.documentElement.style.setProperty('--d', lbg);
	}
	if(tMp === 1){
		document.documentElement.style.setProperty('--dp', lbgp);
	}
	document.documentElement.style.setProperty('--primary', C3);
	document.documentElement.style.setProperty('--secondary', C4);
	if(sh === 'ou'){
document.getElementById('appsCont').classList.remove('morph');
document.getElementById('appsCont2').classList.remove('morph');
document.getElementById('appsCont3').classList.remove('morph');
document.getElementById('_genCont').classList.remove('morph');
document.getElementById('bl1').classList.remove('morph');
document.getElementById('_musCont').classList.remove('morph');
document.getElementById('prev').classList.remove('morph');
document.getElementById('playPause').classList.remove('morph');
document.getElementById('next').classList.remove('morph');
document.getElementById('appsCont').classList.remove('morph-dark-out');
document.getElementById('appsCont2').classList.remove('morph-dark-out');
document.getElementById('appsCont3').classList.remove('morph-dark-out');
document.getElementById('_genCont').classList.remove('morph-dark-out');
document.getElementById('bl1').classList.remove('morph-dark-out');
document.getElementById('_musCont').classList.remove('morph-dark-out');
document.getElementById('prev').classList.remove('morph-dark-out');
document.getElementById('playPause').classList.remove('morph-dark-out');
document.getElementById('next').classList.remove('morph-dark-out');
document.getElementById('appsCont').classList.add('morph-light-out');
document.getElementById('appsCont2').classList.add('morph-light-out');
document.getElementById('appsCont3').classList.add('morph-light-out');
document.getElementById('_genCont').classList.add('morph-light-out');
document.getElementById('bl1').classList.add('morph-light-out');
document.getElementById('_musCont').classList.add('morph-light-out');
document.getElementById('prev').classList.add('morph-light-out');
document.getElementById('playPause').classList.add('morph-light-out');
document.getElementById('next').classList.add('morph-light-out');}
}
function updateClock() { 
	var currentTime = new Date();
	var currentHours = currentTime.getHours();
	var currentMinutes = currentTime.getMinutes();
	var currentMinutes1 = currentTime.getMinutes();
	var currentMinutesunit = currentTime.getMinutes();
	var currentSeconds = currentTime.getSeconds() < 10 ? '0' + currentTime.getSeconds() : currentTime.getSeconds();
	var currentDate = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
	var currentYear = currentTime.getFullYear();
	var Time24 = 1;
	if(Time24 === 1){
		Clock = "24h";
	}else{
		Clock = "12h";
	}
	if (Clock === "24h"){
		currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
		currentMinutes1= ( currentMinutes1< 10 ? "0" : "" ) + currentMinutes1;
	}
	if (Clock === "12h"){
		currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
		currentHours = ( currentHours == 0 ) ? 12 : currentHours;
		currentMinutes1= ( currentMinutes1< 10 ? "0" : "" ) + currentMinutes1;
	}
	document.getElementById("Đồng_Hồ").innerHTML = currentHours + "." + currentMinutes1;
	document.getElementById("Tháng").innerHTML = shortmonths[currentTime.getMonth()];
	document.getElementById("Ngày").innerHTML = currentDate;
	document.getElementById("Thứ").innerHTML = shortdays[currentTime.getDay()];
	
}
function openApp(){
	window.location = 'xeninfo:openapp:' + mb;
}
var mus = document.getElementById('_musCont');
var gen = document.getElementById('_genCont');
function openWid(){
	if(one === 1){
		if(mus.classList.contains('closed')){
			mus.classList.remove('closed');
			mus.classList.add('open');
			gen.classList.remove('open');
			gen.classList.add('closed');
			mus.style.zIndex = 0;
			gen.style.zIndex = -1;
			mus.style.display = 'block';
			TweenMax.to(mus, 0.5, {alpha:1});
			TweenMax.to(gen, 0.5, {alpha:0, onComplete:function(){
			gen.style.display = 'none';	
			}});
document.getElementById('mArt').classList.remove('closed');
document.getElementById('infoCont').classList.remove('closed');
document.getElementById('controls').classList.remove('closed');
document.getElementById('_date').classList.add('closed');
document.getElementById('weaCont').classList.add('closed');
document.getElementById('_batCont').classList.add('closed');
			return;
		}else{
			mus.classList.add('closed');
			mus.classList.remove('open');
			gen.classList.remove('closed');
			gen.classList.add('open');
			mus.style.zIndex = -1;
			gen.style.zIndex = 0;
			gen.style.display = 'block';
			TweenMax.to(gen, 0.5, {alpha:1});
			TweenMax.to(mus, 0.5, {alpha:0, onComplete:function(){
			mus.style.display = 'none';	
			}});
document.getElementById('_date').classList.remove('closed');
document.getElementById('weaCont').classList.remove('closed');
document.getElementById('_batCont').classList.remove('closed');
document.getElementById('mArt').classList.add('closed');
document.getElementById('infoCont').classList.add('closed');
document.getElementById('controls').classList.add('closed');
return;}}
}


