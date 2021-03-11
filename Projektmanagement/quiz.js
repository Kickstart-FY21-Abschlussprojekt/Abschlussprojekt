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

function validateAnswer1(event) {
    event.preventDefault();
    let userAnswer = document.getElementById("antwortBox1").value;
    let rightAnswer = calculateAnswer();
    let isCorrect = userAnswer.toString().toLowerCase() === rightAnswer.toLowerCase();
    console.log(rightAnswer.toLowerCase());
    console.log(userAnswer.toString().toLowerCase());

    if (isCorrect) {
        this.addEventListener('submit', showContent);
    } else {
        newTry();
    }
    
}
function validateAnswer2(event) {
    event.preventDefault();
    let userAnswer = document.getElementById("antwortBox2").value;
    let rightAnswer = calculateAnswer1();
    let isCorrect = userAnswer.toString().toLowerCase() === rightAnswer.toLowerCase();
    console.log(rightAnswer.toLowerCase());
    console.log(userAnswer.toString().toLowerCase());
    if (isCorrect) {
        this.addEventListener('submit', showContent1);
    } else {
        newTry1();
    }
}
function validateAnswer3(event) {
    event.preventDefault();
    let userAnswer = document.getElementById("antwortBox3").value;
    let rightAnswer = calculateAnswer2();
    let isCorrect = userAnswer.toString().toLowerCase() === rightAnswer.toLowerCase();;
    console.log(rightAnswer.toLowerCase());
    console.log(userAnswer.toString().toLowerCase());

    if (isCorrect) {
        this.addEventListener('submit', showContent2);
    } else {
        newTry2();
    }
    
}
function validateAnswer4(event) {
    event.preventDefault();
    let userAnswer = document.getElementById("antwortBox4").value;
    let rightAnswer = calculateAnswer3();
    let isCorrect = userAnswer.toString().toLowerCase() === rightAnswer.toLowerCase();
    console.log(rightAnswer.toLowerCase());
    console.log(userAnswer.toString().toLowerCase());

    if (isCorrect) {
        this.addEventListener('submit', showContent3);
    } else {
        newTry3();
    }
}

function calculateAnswer() {
    for (let i = 0; i <= questions.length; i ++) {
        if (document.getElementById("question1").innerHTML === questions[i]) {
        return answers[i];  
        }
    }  
}

function calculateAnswer1() {
    for (let i = 0; i <= questions.length; i ++) {
        if (document.getElementById("question2").innerHTML === questions[i]) {
        return answers[i];  
        }
    } 
}

function calculateAnswer2() {
    for (let i = 0; i <= questions.length; i ++) {
        if (document.getElementById("question3").innerHTML === questions[i]) {
        return answers[i];  
        }
    }  
}

function calculateAnswer3() {
    for (let i = 0; i <= questions.length; i ++) {
        if (document.getElementById("question4").innerHTML === questions[i]) {
        return answers[i];  
        }
    } 
} 
function showContent() {
    let card = document.getElementById('content');
    card.classList.add('flip');  
} 

function showContent1() {
    let card1 = document.getElementById('content1');
    card1.classList.add('flip');
}
function showContent2() {
    let card2 = document.getElementById('content2');
    card2.classList.add('flip');  
} 

function showContent3() {
    let card3 = document.getElementById('content3');
    card3.classList.add('flip');
}

function showQuestion(question) {
    document.getElementById("question1").textContent = question;
   
}

function showQuestion1(question1) {
    document.getElementById("question2").textContent = question1;
   
}

function showQuestion2(question2) {
    document.getElementById("question3").textContent = question2;
   
}

function showQuestion3(question3) {
    document.getElementById("question4").textContent = question3;
   
}
