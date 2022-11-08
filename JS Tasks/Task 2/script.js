/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
money = 0;
moneyup = 1;
msec = 0;
function addcomma(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
function myTimer() {
  money += msec;
document.getElementById("btn__state").innerHTML =+ addcomma(money);
}
setInterval(myTimer, 1000);

//what happens when button is clicked
function clicked() {
money += moneyup;
document.getElementById("btn__state").innerHTML =+ addcomma(money);
}
