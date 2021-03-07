    /* Implementation Instruction:
    Bluepprint JSON:
    {
        "id": ,
        "question": "",
        "answers": {
            "a": "",
            "b": "",
            "c": "",
            "d": ""
        },
        "rightAnswer": ""
    }

    HTML - TAG Guidens:

        <form id="quiz:_QUESTION-ID_" name="quiz"></form>
        example: <form id="quiz:1" name="quiz"></form>

    JavaScript - Guide:
        1.Import of the Module:
            set export in front of let Quiz;

             add IMportStatement into the dedicated js files:
            import "./src/quiz/quiz.js"

        2.Call of Function:
            Quiz.build(_QUESTION-ID_); 
            IF NO Value is given --> Standard Value ID = 1;

    */
//####################################################################################################################################################################
//TestQuestions:
let quizQuestions = [
    {
        "id": 1,
        "question": "Test?",
        "answers": {
            "a": "Test",
            "b": "Test",
            "c": "Test",
            "d": "Fehler"
        },
        "rightAnswer": "a"
    },
    {
        "id": 2,
        "question": "Who am I?",
        "answers": {
            "a": "1",
            "b": "2",
            "c": "3",
            "d": "4"
        },
        "rightAnswer": "a"
    },
    {
        "id": 3,
        "question": "Who Invented JS?",
        "answers": {
            "a": "A",
            "b": "B",
            "c": "C",
            "d": "D"
        },
        "rightAnswer": "a"
    }
]
//Object Quiz
let Quiz = {
    build: function(id = 1){

        let userAnswer;
        //Set the Question ID, So that the right Question will be shown
        this.qId = id;

        //Read the external JSON -File --> All Question are availible


        //get the right question 
        function getcurrentQuestion(qId){
            currentID = qId;
            let question = quizQuestions.find(q => q.id == currentID);
            return question;
        }
        let currentQuestion = getcurrentQuestion(this.qId);

        //Build the HTML FORM
        const output = [];
        const answers = [];
            for(letter in currentQuestion.answers){
                answers.push(
                `<label>
                    <input type="radio" name="question" value="${letter}" 
                        id="question${currentQuestion.id}:${letter}"> ${currentQuestion.answers[letter]}</input>
                </label>`
                );
            };
            output.push(
                `
                <div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join()}</div>
                <div class="submitBtn"><button id="submit:${currentQuestion.id}">Submit Quiz</button>
                <div class="result"></div>
                `
            );
        //Creating the Quiz HTML
        const quiz = document.getElementById(`quiz:${currentQuestion.id}`);
        quiz.innerHTML = output.join('');

        //Adding the Attributes for Function
        const submitButton = document.getElementById(`submit:${currentQuestion.id}`);
        //activate the Radio buttons for final Answering the Questions
        let UserAnswer = Quiz.getUserAnswer();
        submitButton.addEventListener('click', Quiz.showResult(currentQuestion)); 
    },
    getUserAnswer: function(){
        //Getting the Value of the User Choosen Answer 
        var asnwer = document.forms['quiz'].elements['question']; 
        for (var i = 0; i < asnwer.length; i++) {
            asnwer[i].onclick = function() {
                console.log(asnwer.value); 
               return asnwer.value;
            };
        };
               
    },
    showResult: function(currentQuestion){
        //get final Entered Answer via URL
        let urlParams =  new URLSearchParams(document.location.search.substring(1));
        let UserAnswer= urlParams.get("question");
        //Check for correctness
        if(UserAnswer === currentQuestion.rightAnswer){
            //What happens after the correct answer is given?
            alert("Right Answer");
        }else{
            //What happens after a wrong anser is given?
            alert("Wrong Answer");
        }
    }
};

//Start the Function
Quiz.build(1);

