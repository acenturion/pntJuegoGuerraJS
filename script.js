//player
let statusBarPlayerOne = document.querySelector("#progres-bar-one");
let statusBarPlayerTwo = document.querySelector("#progres-bar-two");
let actualPlayer;
let counterOne = document.querySelector("#counter-one");
let countertwo = document.querySelector("#counter-two");

function normalAttack(toPlayer) {
    setActualPlayer(toPlayer)
    let attack = getRandomInt(5, 10);
    console.log(" Attack to player " + toPlayer + " : DMG = [" + attack + "]");
    setStatusBar(attack, actualPlayer);

}

function healAttack(toPlayer) {
    setActualPlayer(toPlayer)
    let heal = getRandomInt(-15, -10);
    console.log(" Heal to player " + toPlayer + " : HEAL = [" + heal + "]");
    setStatusBar(heal, actualPlayer)
}

function superAttack(toPlayer) {
    setActualPlayer(toPlayer);
    let supera = getRandomInt(1, 30);
    if (supera > 25) {
        console.log(" Super attack to player " + toPlayer + " : CRITICAL = [" + supera + "]");
    } else {
        console.log(" Super attack to player " + toPlayer + " : DMG = [" + supera + "]");
    }
    setStatusBar(supera, actualPlayer)
}

function setStatusBar(value, player) {
    let actualLife = parseInt(player.style.width);
    let attack = parseInt(value);
    let newLife = actualLife - attack;

    if (newLife < 0) { newLife = 0; }
    else if (newLife > 100) { newLife = 100 };

    player.style.width = newLife + "%";
    player.innerHTML = newLife + "%";

    if (newLife == 0) { setWinner(); }
}

function setWinner() {
  
    if (actualPlayer.id == "progres-bar-one") {
        setAlertMessage("Ganador jugador 1")
        setCounter(countertwo);
    }
    else {
        setAlertMessage("Ganador jugador 2")
        setCounter(counterOne);
    }
    reset();
}

function setAlertMessage(message){
    var alert = document.querySelector("#alert-winner");
    alert.innerHTML = (message)
    alert.classList.remove("d-none");
}

function setCounter(counterPlayer) {
    let points = parseInt(counterPlayer.innerHTML);
    points++;
    counterPlayer.innerHTML = points;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function swap() {
    var statusBarAuxWidth = statusBarPlayerOne.style.width;
    var statusBarAuxInnerHTML = statusBarPlayerOne.innerHTML;

    statusBarPlayerOne.style.width = statusBarPlayerTwo.style.width;
    statusBarPlayerOne.innerHTML = statusBarPlayerTwo.innerHTML;

    statusBarPlayerTwo.style.width = statusBarAuxWidth
    statusBarPlayerTwo.innerHTML = statusBarAuxInnerHTML
}

//Add players
function setActualPlayer(nroPlayer) {
    switch (nroPlayer) {
        case "one":
            actualPlayer = statusBarPlayerOne;
            setStatusButton("two")
            setStatusButton("one");
            break;
        case "two":
            actualPlayer = statusBarPlayerTwo;
            setStatusButton("one");
            setStatusButton("two");
            break;
        default:
            break;
    }
}

function setStatusButton(player, status) {
    var content = document.getElementById(player);
    var kbButtons = content.querySelectorAll("button");
    kbButtons.forEach(button => button.disabled = !button.disabled)
}
//todo 
function reset() {

    statusBarPlayerOne.style.width = 100 + "%";
    statusBarPlayerOne.innerHTML = 100 + "%";

    statusBarPlayerTwo.style.width = 100 + "%";
    statusBarPlayerTwo.innerHTML = 100 + "%";
}

function surrender(player) {
    if (player === "one") {
        setAlertMessage("Ganador jugador 2")
        setCounter(countertwo);
        setWinner();
        setActualPlayer("two")
    } else {
        setAlertMessage("Ganador jugador 1")
        setCounter(counterOne);
        setWinner();
        setActualPlayer("one")
    }
    reset();
}
//init
actualPlayer = "one";
setStatusButton("two", true)