var name = prompt("You are welcome!!!. What is your name?");
document.getElementById('name').innerHTML = 'Welcome,'+ ' '+ name +'!';


var today = new Date();
document.getElementById('date').innerHTML = today;

function changeMoney(x) {
    //x.preventDefault();
   var moneyFunct = [ '', '', '', '', '', '', '', ''];

    for (var i=0; i<moneyFunct.length; i++){
        moneyFunct[i] = 0;
    }

    while(x >= 1000) {
    x-= 1000;
    moneyFunct[0]++;
    }
    while(x >= 500) {
    x-= 500;
    moneyFunct[1]++;
    }
    while(x >= 200) {
    x-= 200;
    moneyFunct[2]++;
    }
    while(x >= 100) {
    x-= 100;
    moneyFunct[3]++;
    }
    while(x >= 50) {
    x-= 50;
    moneyFunct[4]++;
    }
    while(x >= 20) {
    x-= 20;
    moneyFunct[5]++;
    }
    while(x >= 10) {
    x-= 10;
    moneyFunct[6]++;
    }
    while(x >= 5) {
    x-= 5;
    moneyFunct[7]++;
    }
    

    document.getElementById('hi1').innerHTML = moneyFunct[0];
    document.getElementById('hi2').innerHTML = moneyFunct[1];
    document.getElementById('hi3').innerHTML = moneyFunct[2];
    document.getElementById('hi4').innerHTML = moneyFunct[3];
    document.getElementById('hi5').innerHTML = moneyFunct[4];
    document.getElementById('hi6').innerHTML = moneyFunct[5];
    document.getElementById('hi7').innerHTML = moneyFunct[6];
    document.getElementById('hi8').innerHTML = moneyFunct[7];

    document.getElementById('money').innerHTML= document.getElementById('inputNumber').value;

    document.getElementById('inputNumber').value = null;

}
    









