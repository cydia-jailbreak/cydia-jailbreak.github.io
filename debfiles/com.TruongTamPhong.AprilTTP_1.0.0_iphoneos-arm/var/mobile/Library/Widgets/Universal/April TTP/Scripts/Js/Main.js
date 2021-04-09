var checkSettings= function() {}
checkSettings();
document.documentElement.style.setProperty('--batCl', batCl);
document.documentElement.style.setProperty('--br', br + '%');
document.documentElement.style.setProperty('--bl', bl + 'px');
document.documentElement.style.setProperty('--bor', bor);
if(sh === 'ou'){
document.getElementById('Border').classList.remove('shadow-in');
document.getElementById('Border').classList.add('shadow-out');}
TTP = document.createElement('style')
TTP.innerHTML = "#City, #Condition, #Clock, #Amlich, #Calendar {background: -webkit-linear-gradient(top, "+ PrimaryColor +", "+ SecondaryColor +"); -webkit-background-clip: text; -webkit-text-fill-color: transparent;}";
document.body.appendChild(TTP);