//Mapping of the HTML to JS
const quizContainer = document.getElementById('quiz');
const restultContainer = document.getElementById('resultQuiz');
const submitButton = document.getElementById('submitQuiz');

//Function of creating the Quiz
function Quiz(quizQuestion){
    this.quitQuestion = quizQuestion;
}

//Creating of the Object question
function quizQuestion(question, choices, rightAnswer){
    this.question = question;
    this.choices = choices;
    this.rightAnswer = rightAnswer;
}

//Abfrage nach richtigkeit:
/* 
function btn_submit(choice, rightAnswer){
    if (choice === rightAnswer){

    } else{
        alert("Falsche Antwort")
    }
}
*/
const quizQuestion = [
    {
    "id": 1,
    "question": "Who am I?",
    }
]

var quiz = new Quiz(quizQuestion);


