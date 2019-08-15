//player
let statusBarPlayerOne = document.querySelector("#progres-bar-one");
let statusBarPlayerTwo = document.querySelector("#progres-bar-two");
let actualPlayer;

function normalAttack(toPlayer) {
    setActualPlayer(toPlayer)
    let attack = getRandomInt(5, 10);
    console.log( " Attack to player " +toPlayer +" : DMG = ["+ attack+"]");
    setStatusBar(attack, actualPlayer);
}

function healAttack(toPlayer) {
    setActualPlayer(toPlayer)
    let heal = getRandomInt(-15,-10);
    console.log( " Heal to player " +toPlayer +" : HEAL = ["+ heal+"]");
    setStatusBar(heal,actualPlayer)
}

function superAttack(toPlayer) {
    setActualPlayer(toPlayer);
    let supera = getRandomInt(1,30);
    if(supera > 25){
        console.log( " Super attack to player " +toPlayer +" : CRITICAL = ["+ supera+"]");
    }else{
        console.log( " Super attack to player " +toPlayer +" : DMG = ["+ supera+"]");
    }
    setStatusBar(supera,actualPlayer)
}

function setStatusBar(value, player) {
    let actualLife = parseInt(player.style.width);
    let attack = parseInt(value);
    let newLife = actualLife - attack;

    player.style.width = newLife + "%";
    player.innerHTML = newLife + "%";

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Add players
function setActualPlayer(nroPlayer) {
    switch (nroPlayer) {
        case "one":
            actualPlayer = statusBarPlayerOne;
            break;
        case "two":
            actualPlayer = statusBarPlayerTwo;
            break;
        default:
            break;
    }
}