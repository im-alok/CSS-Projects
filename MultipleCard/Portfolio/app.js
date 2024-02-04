let darkmode=document.querySelector("#for-theme-change");

darkmode.onclick=function(){
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains='dark-theme'){
        darkmode.src="dark theme icon/sun.png";
    }
    else{
        darkmode.src="dark theme icon/moon.png"
    }
    
}