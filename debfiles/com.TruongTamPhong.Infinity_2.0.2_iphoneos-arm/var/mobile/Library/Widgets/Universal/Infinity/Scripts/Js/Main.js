var checkSettings= function() {}
checkSettings();
document.documentElement.style.setProperty('--batCl', batCl);
document.documentElement.style.setProperty('--bl', bl + 'px');
document.documentElement.style.setProperty('--bor', bor);
document.documentElement.style.setProperty('--blCl', blCl);
document.documentElement.style.setProperty('--charCl', charCl);

if(bo === 0){
document.getElementById('BorderWrap1').style.display = 'none';
document.getElementById('BorderWrap2').style.display = 'none';}

if(sh === 'ou'){
document.getElementById('Border1').classList.remove('shadow-in1');
document.getElementById('Border1').classList.add('shadow-out1');
document.getElementById('Border2').classList.remove('shadow-in2');
document.getElementById('Border2').classList.add('shadow-out2');
document.getElementById('Charging').classList.remove('shadow-in3');
document.getElementById('Charging').classList.add('shadow-out3');
}
TTP = document.createElement('style')
TTP.innerHTML = "#City, #Condition, #Clock, #Amlich, #Calendar, #Temp, #High, #Low {background: -webkit-linear-gradient(top, "+ PrimaryColor +", "+ SecondaryColor +"); -webkit-background-clip: text; -webkit-text-fill-color: transparent;}";
document.body.appendChild(TTP);