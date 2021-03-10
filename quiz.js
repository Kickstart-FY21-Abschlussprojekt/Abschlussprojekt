const gameTypes = ["+", "-", "*", "/"];


document.addEventListener("DOMContentLoaded", function() {
    play();
})

function play() {
    newTry();
    newTry1();
}

function newTry() {
    let gameType = getGametype();
    runGame(gameType);
}

function newTry1() {
    let gameType1 = getGametype();
    runGame1(gameType1);
}
function getGametype() {
    let index = Math.floor(Math.random() * 4);
    return gameTypes[index];
}
function runGame(gameType) {
    
    let num1 = getRandomNumber();
    let num2 = getRandomNumber();

    switch(gameType) {
        case "+":
            showAddQuestion(num1, num2);
            break;
        case "-":
            showSubQuestion(num1, num2);
            break;
        case "*":
            showMulQuestion(num1, num2);
            break;
        case "/":
            showDivQuestion(num1, num2);
            break;
        default: 
            alert('Unbekannte Operation: ${gametype}');   
    }
}
function runGame1(gameType1) {

    let num3 = getRandomNumber();
    let num4 = getRandomNumber();

    switch(gameType1) {
        case "+":
            showAddQuestion1(num3, num4);
            break;
        case "+":
            showSubQuestion1(num3, num4);
            break;
        case "+":
            showMulQuestion1(num3, num4);
            break;
        case "+":
            showDivQuestion1(num3, num4);
            break;
        default: 
            alert('Unbekannte Operation: ${gametype}');
    }
        
}

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 1000) + 1;
    return randomNumber;
}

function validateAnswer(event) {
    event.preventDefault();
    let userAnswer = parseInt(document.getElementById("antwortBox").value);
    let rightAnswer = calculateAnswer();
    let isCorrect = userAnswer === rightAnswer;

    if (isCorrect) {
        this.addEventListener('submit', showContent);
    } else {
        newTry();
    }
    
}
function validateAnswer1(event) {
    let userAnswer1 = parseInt(document.getElementById("antwortBox2").value);
    let rightAnswer1 = calculateAnswer1();
    let isCorrect1 = userAnswer1 === rightAnswer1;

    if (isCorrect1) {
        this.addEventListener('submit1', showContent1);
    } else {
        newTry1();
    }
}

function calculateAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    switch(operator) {
        case "+":
            return operand1 + operand2;
        case "-":
            return operand1 - operand2;     
        case "*":
            return operand1 * operand2;
        case "/":
            return operand1 / operand2;    
    } 
}

function calculateAnswer1() {
    let operand3 = parseInt(document.getElementById("operand3").innerText);
    let operand4 = parseInt(document.getElementById("operand4").innerText);
    let operator2 = document.getElementById("operator2").innerText;

    switch(operator2) {
        case "+":
            return operand3 + operand4;
        case "-":
            return operand3 - operand4;     
        case "*":
            return operand3 * operand4;
        case "/":
            return operand3 / operand4;
    }
}

function showContent() {
    let card = document.getElementById('content');
    card.classList.add('flip');  
} 

function showContent1() {
    let card1 = document.getElementById('content2');
    card1.classList.add('flip');
}

function showAddQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

function showSubQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "-";
}

function showMulQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "*";
}

function showDivQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "/";
}
function showAddQuestion1(operand3, operand4) {
    document.getElementById("operand3").textContent = operand3;
    document.getElementById("operand4").textContent = operand4;
    document.getElementById("operator2").textContent = "+";
}

function showSubQuestion1(operand3, operand4) {
    document.getElementById("operand3").textContent = operand3;
    document.getElementById("operand4").textContent = operand4;
    document.getElementById("operator2").textContent = "-";
}

function showMulQuestion1(operand3, operand4) {
    document.getElementById("operand3").textContent = operand3;
    document.getElementById("operand4").textContent = operand4;
    document.getElementById("operator2").textContent = "*";
}

function showDivQuestion1(operand3, operand4) {
    document.getElementById("operand3").textContent = operand3;
    document.getElementById("operand4").textContent = operand4;
    document.getElementById("operator2").textContent = "/";
}