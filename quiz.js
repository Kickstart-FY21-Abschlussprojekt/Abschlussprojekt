const gameTypes = ["+", "-", "*", "/"];


document.addEventListener("DOMContentLoaded", function() {
    newTry();
})

function newTry() {
    let gameType = getGametype();
    runGame(gameType);
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

function showContent() {
    let card = document.getElementById('content');
    card.classList.add('flip');  
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
