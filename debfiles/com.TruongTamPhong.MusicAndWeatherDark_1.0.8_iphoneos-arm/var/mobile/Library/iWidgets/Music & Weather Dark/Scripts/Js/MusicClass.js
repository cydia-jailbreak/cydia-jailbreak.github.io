function checkMusic(){
	if (isplaying === 1) {
	document.getElementById('playPause').classList.remove("zeek-buttonplay");
		document.getElementById('playPause').classList.add("zeek-buttonpause");
	}else{
	document.getElementById('playPause').classList.remove("zeek-buttonpause");
		document.getElementById('playPause').classList.add("zeek-buttonplay");
	}
	if(title === "(null)"){
		document.getElementById('Tên_Nghệ_Sĩ').innerHTML = 'No Artist';
		document.getElementById('Tên_Bài_Nhạc').innerHTML = 'No Title';
		if(muP === 1){
			document.getElementById('_musCont').style.display = 'none';
			document.getElementById('musicArtGen').style.display = 'none';
			if(mus.classList.contains('open')){
				openWid();}
		}
	}else{
		document.getElementById('Tên_Nghệ_Sĩ').innerHTML = artist;
		document.getElementById('Tên_Bài_Nhạc').innerHTML = title;
		if(muP === 0){
			document.getElementById('_musCont').style.display = 'block';
			document.getElementById('musicArtGen').style.display = 'block';
		}
		if (checkOverflow(document.getElementById('Tên_Bài_Nhạc')) === true){
	document.getElementById('Tên_Bài_Nhạc').classList.add("marquee");
		} else {
       document.getElementById('Tên_Bài_Nhạc').classList.remove("marquee");}
	}
		
	if(album === "(null)"){
		document.getElementById('Ảnh_Bìa_Bài_Nhạc').src = 'Scripts/Js/Music.js';
		if(one === 1){
			document.getElementById('musicArtGen').src ='Scripts/Js/Music.js';
		}
	}else{
		var xhr = new XMLHttpRequest();
		xhr.open('HEAD', "file:///var/mobile/Documents/Artwork.jpg", false);
		xhr.send();
		if (xhr.status === "404") {
			document.getElementById('Ảnh_Bìa_Bài_Nhạc').src = 'Scripts/Js/Note.png';
			if(one === 1){
				document.getElementById('musicArtGen').src ='Scripts/Js/Note.png';
			}
		}else{
			document.getElementById('Ảnh_Bìa_Bài_Nhạc').src = "file:///var/mobile/Documents/Artwork.jpg?" + (new Date()).getTime();
			if(one === 1){
				document.getElementById('musicArtGen').src = "file:///var/mobile/Documents/Artwork.jpg?" + (new Date()).getTime();}}}	
}
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
	if ( document.getElementById('playPause').classList.contains("zeek-buttonplay")){ 
		document.getElementById('playPause').classList.remove("zeek-buttonplay");
		document.getElementById('playPause').classList.add("zeek-buttonpause");
	}else{ 
		document.getElementById('playPause').classList.remove("zeek-buttonpause");
		document.getElementById('playPause').classList.add("zeek-buttonplay");
	}
	window.location = 'xeninfo:playpause';
	document.getElementById('playPause').style.opacity = 0.8;
	setTimeout(function (){
		document.getElementById('playPause').style.opacity = 1;
	}, 200);
}		
function next() {
	window.location = 'xeninfo:nexttrack';
	document.getElementById('next').style.opacity = 0.8;
	setTimeout(function (){
		document.getElementById('next').style.opacity = 1;
	}, 200);
}			
function prev() {
	window.location = 'xeninfo:prevtrack';
	document.getElementById('prev').style.opacity = 0.8;
	setTimeout(function (){
		document.getElementById('prev').style.opacity = 1;
	}, 200);
}