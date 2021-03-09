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
function laodall(){
    let Questions = firebase.database().ref('/').once("value").then(function(snapshort) {
        var question=snapshort.toJSON();
        console.log(question);
        return question;});
    return Questions}


//Object Quiz
let Quiz = {
    build: function(id = 1){
        let userAnswer;
        //Set the Question ID, So that the right Question will be shown
        this.qId = id;
        let currentQuestion = getcurrentQuestion(this.qId);
        //get the right question 
        function getcurrentQuestion(qId){
            currentID = qId;
           currentquestion = quizQuestions.find(q => q.id == currentID);
           console.log(currentQuestion);
            return currentquestion;
        }

        //Build the HTML FORM
        function subBuild(){
        const output = [];
        const answers = [];
            for(letter in currentQuestion.answers){
                answers.push(
                `<div>
                <label>
                    <input type="radio" name="question" value="${letter}" 
                        id="question${this.qId}:${letter}">${currentQuestion.answers[letter]}</input>
                </label>
                </div>`
                );
            };
            output.push(
                `
                <div class="question" id= "question:${this.qId}"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join()}</div>
                <div class="submitBtn"><button id="submit:${this.qId}">Submit Quiz</button>
                <div class="result"><;/div>
                `
            );
            return output.join(',');
        };
        //Creating the Quiz HTML
        document.getElementById(`quiz:${currentQuestion.id}`).innerHTML = subBuild(); 
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
               return asnwer.value;
            };
        };
               
    },
    showResult: function(currentQuestion){
        //get final Entered Answer via URL
        let urlParams =  new URLSearchParams(document.location.search.substring(1));
        let UserAnswer= urlParams.get("question");
        //Check for correctness
        if(UserAnswer){
            if(UserAnswer === currentQuestion.rightAnswer){
                //What happens after the correct answer is given?
                alert("Right Answer");
            }else{
                //What happens after a wrong anser is given?
                alert("Wrong Answer");
            }
        }
    }
};

//Start the Function
Quiz.build(1);

