const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

//Array of Question
const question = [
    {
        question: "Who am I?",
        answers: {
            a: "JAVA", 
            b: "JAVA",
            c: "JAVA"
        },
        rightAnswer: "JAVA"
    }
]


//Object Quiz
let Quiz = {
    build: function(){
        const output = [];
        question.forEach(
            (currentQuestion, questionNumber) => {
                const answers = [];

                for(letter in currentQuestion.answers){
                    answers.push(
                        `<label>
                            <input type="radio" name="question${questionNumber}" value="${letter}"> ${letter}: ${currentQuestion.answers[letter]}
                        </label>`
                    );
                }
                output.push(
                    `<div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join('')} </div>`
                );
            }
        );
        quizContainer.innerHTML = output.join('');
    },
    showResults: function(){
        const answerContainers = quizContainer.querySelectorAll('.answers');
        let numCorrect = 0;
        question.forEach( (currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=questions${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).Value;
            console.log(selector);
            console.log(userAnswer);

            if(userAnswer === currentQuestion.rightAnswer){
                numCorrect ++;
                answerContainers[questionNumber].style.color = 'red';
            }
            else {
                answerContainers[questionNumber].style.color = 'lightgreen';
            }
        });
    }
}



Quiz.build();
submitButton.addEventListener('click', Quiz.showResults);