window.onload = function(){
    var winWidth = window.screen.width;
    var fontSize = winWidth/320 * 16; 
    document.getElementById("container").style.fontSize=fontSize + "px";
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
        window.uniaccount.closeButton();
    };
};