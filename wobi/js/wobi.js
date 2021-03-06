function setFontSize() {
    var winWidth = window.innerWidth;
    var fontSize = winWidth/320 * 16;
    document.getElementsByTagName("html")[0].style.fontSize=fontSize + "px";
}

window.onload = function(){
    setFontSize();
    var isCheck = false;
    var checkBox = document.getElementById("rechargeAgreementCheckbox");
    checkBox.onclick = function() {
        if (isCheck) {
            checkBox.style.backgroundImage="url('images/accountsdk_2_charge_ad_cb_unset.png')";
        } else {
            checkBox.style.backgroundImage="url('images/accountsdk_2_charge_ad_cb_set.png')";
        }
        isCheck = !isCheck;
        window.uniaccount.onSkipNextTimeChanged(isCheck);
    };

    document.getElementById("rechargeButton").onclick = function() {
        window.uniaccount.onRecharge();
    };

    document.getElementById("closeButton").onclick = function() {
        window.uniaccount.onClose();
    };

    window.addEventListener('orientationchange', function() {  
        setTimeout("setFontSize()", 300);  
    }, false); 
};