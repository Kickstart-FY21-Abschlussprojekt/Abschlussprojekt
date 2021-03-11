const questions = ["Wer ist CEO von Accenture?", "Wo liegt der Hauptsitz von Accenture?", "Wie lautet das Kürzel von Accenture an der New York Stock Exchange?", "Wo liegt der Hauptsitz innerhalb von Deutschland?"];
const answers = ["Julie Sweet", "Dublin", "ACN", "Kronberg"]

document.addEventListener("DOMContentLoaded", function() {
    play();
})

function play() {
    newTry();
    newTry1();
    newTry2();
    newTry3();
}

function newTry() {
    let question = getQuestion();
    runGame(question);
}

function newTry1() {
    let question1 = getQuestion();
    runGame1(question1);
}
function newTry2() {
    let question2 = getQuestion();
    runGame2(question2);
}
function newTry3() {
    let question3 = getQuestion();
    runGame3(question3);
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
function runGame2(question2) {
    showQuestion2(question2);
 }
 function runGame3(question3) {
    showQuestion3(question3);    
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
function validateAnswer0(event) {
    event.preventDefault();
    let userAnswer2 = document.getElementById("antwortBox1").value;
    let rightAnswer2 = calculateAnswer2();
    let isCorrect2 = userAnswer2 === rightAnswer2;

    if (isCorrect2) {
        this.addEventListener('submit', showContent2);
    } else {
        newTry2();
    }
    
}
function validateAnswer2(event) {
    event.preventDefault();
    let userAnswer3 = document.getElementById("antwortBox3").value;
    let rightAnswer3 = calculateAnswer3();
    let isCorrect3 = userAnswer3 === rightAnswer3;

    if (isCorrect3) {
        this.addEventListener('submit', showContent3);
    } else {
        newTry3();
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

function calculateAnswer2() {
    for (let i = 0; i <= questions.length; i ++) {
        if (document.getElementById("question0").innerHTML === questions[i]) {
        return answers[i];  
        }
    }  
}

function calculateAnswer3() {
    for (let i = 0; i <= questions.length; i ++) {
        if (document.getElementById("question2").innerHTML === questions[i]) {
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
function showContent2() {
    let card2 = document.getElementById('content1');
    card2.classList.add('flip');  
} 

function showContent3() {
    let card3 = document.getElementById('content3');
    card3.classList.add('flip');
}

function showQuestion(question) {
    document.getElementById("question").textContent = question;
   
}

function showQuestion1(question1) {
    document.getElementById("question1").textContent = question1;
   
}

function showQuestion2(question2) {
    document.getElementById("question0").textContent = question2;
   
}

function showQuestion3(question3) {
    document.getElementById("question2").textContent = question3;
   
}
