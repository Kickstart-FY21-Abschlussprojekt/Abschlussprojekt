const questions = ["Wer ist CEO von Accenture?", "Wo liegt der Hauptsitz von Accenture?", "Wie lautet das Kürzel von Accenture an der New York Stock Exchange?", "Wo liegt der Hauptsitz innerhalb von Deutschland?"];
const answers = ["Julie Sweet", "Dublin", "ACN", "Kronberg"]

document.addEventListener("DOMContentLoaded", function() {
    play();
})

function play() {
    newTry();
    newTry1();
}

function newTry() {
    let question = getQuestion();
    runGame(question);
}

function newTry1() {
    let question1 = getQuestion();
    runGame1(question1);
}
function getQuestion() {
    let index = Math.floor(Math.random() * 4);
    return questions[index];
}
function runGame(question) {
   showQuestion(question);
}
function runGame1(question1) {
   showQuestion1(question1);    
}

function validateAnswer(event) {
    event.preventDefault();
    let userAnswer = document.getElementById("antwortBox").value;
    let rightAnswer = calculateAnswer();
    let isCorrect = userAnswer === rightAnswer;

    if (isCorrect) {
        this.addEventListener('submit', showContent);
    } else {
        newTry();
    }
    
}
function validateAnswer1(event) {
    event.preventDefault();
    let userAnswer1 = document.getElementById("antwortBox2").value;
    let rightAnswer1 = calculateAnswer1();
    let isCorrect1 = userAnswer1 === rightAnswer1;

    if (isCorrect1) {
        this.addEventListener('submit', showContent1);
    } else {
        newTry1();
    }
}

function calculateAnswer() {
    for (let i = 0; i <= questions.length; i ++) {
        if (document.getElementById("question").innerHTML === questions[i]) {
        return answers[i];  
        }
    }  
}

function calculateAnswer1() {
    for (let i = 0; i <= questions.length; i ++) {
        if (document.getElementById("question1").innerHTML === questions[i]) {
        return answers[i];  
        }
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

function showQuestion(question) {
    document.getElementById("question").textContent = question;
   
}

function showQuestion1(question1) {
    document.getElementById("question1").textContent = question1;
   
}
