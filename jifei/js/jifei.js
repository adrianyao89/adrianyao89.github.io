function setFontSize() {
    var winWidth = window.innerWidth;
    var fontSize = winWidth/400 * 16;
    document.getElementsByTagName("html")[0].style.fontSize=fontSize + "px";
}

window.onload = function(){
    setFontSize();
};