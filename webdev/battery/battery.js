

    navigator.getBattery().then(function (battery){
    function updateAllBatteryInfo(){
        updateChargeInfo();
        updateLevelInfo();
        updateChargingInfo();
        updateDischarginInfo();
    }
updateAllBatteryInfo();
battery.addEventListener('chargingchange', function (){
    updateChargeInfo();

});
function updateChargeInfo(){
    console.log(battery.charging);
    if (battery.charging){
        document.querySelector('#status').innerHTML = 'Заряжается';
        document.querySelector('#battery-level').classList.add('battery-animation');
    } else{
        document.querySelector('#status').innerHTML = 'Разряжается';

        document.querySelector('#battery-level').classList.remove('battery-animation');
            }
        }
    })