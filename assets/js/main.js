let correctNumber;
let history = [];

// onload viene eseguito quando la pagina viene ricaricata
window.onload = function(){
    initGame();
    document.getElementById("number-submit").addEventListener("click", playGame)
    document.getElementById("number-reset").addEventListener("click", initGame)
}

function playGame(){
    let numberInput = document.getElementById("number-guess").value;
    console.log("value " + numberInput);
    if(numberInput){
        saveHistory(numberInput);
        showHistory();
        check(numberInput);
    } else {
        errorInput();
    }
}

function saveHistory(element){
    history.push(element);
}
function showHistory(){
    let index = history.length - 1 ;
    list = "<ul class='list-group'>";
    while(index >= 0){
        console.log();
        list += "<li class='list-group-item'>";
        list += "La tua risposta " + history[index];
        list += "</li>";
        index -= 1;
    }
    list += "</ul>";
    document.getElementById("history").innerHTML = list;
}

function check(numberInput){
    if(numberInput > correctNumber){
        showErrorHight();
    } else if (numberInput < correctNumber){
        showErrorLow();
    } else {
        showWin();
    }
}

function showWin(){
    let text = counterInput();
    text += "Eccellente! Hai indovinato";
    let alertError = generateAlert("success", text);
    document.getElementById("result").innerHTML = alertError;
}

function showErrorLow(){
    let text = counterInput();
    text += "La tua risposta è troppo BASSA";
    let alertError = generateAlert("warning", text);
    document.getElementById("result").innerHTML = alertError;
}

function showErrorHight(){
    let text = counterInput();
    text += "La tua risposta è troppo ALTA";
    let alertError = generateAlert("warning", text);
    document.getElementById("result").innerHTML = alertError;
}

function initGame(){
    correctNumber = getNumberRandom();
    console.log(correctNumber);
    history = [];
    showHistory();
    resetResult();
}

function resetResult(){
    document.getElementById("result").innerHTML = "";
    document.getElementById("number-guess").value = "";
}

function counterInput(){
    return `<h5>Tentativo numero ${history.length}</h5>`;
}

/* Stampa un numero da 1 a 100 */
function getNumberRandom() {
    return correctNumber = Math.floor(Math.random() * 100 + 1 );
}

function errorInput() {
    let text = "Inserire un numero";
    let alertError = generateAlert("error", text);
    document.getElementById("result").innerHTML = alertError;
}

function generateAlert(type, text){
    let alert;

    switch(type){
        case "error":
            alert = "<div class='alert alert-danger' role='alert'>";
            break;
        case "warning":
            alert = "<div class='alert alert-warning' role='alert'>";
            break;
        case "success":
            alert = "<div class='alert alert-success' role='alert'>";
            break;
    }
    
    alert += text;
    alert += "</div>"

    return alert;
}