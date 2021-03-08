var currentQuestionNo = 0;
var points = 0;
var rightAnswerPoints = 10;
var currentQuestion;

var question = [
    {
        "id" : "1",
        "question" : "Was macht ein Programmierer?",
        "answers": {
            "A":"Wandern",
            "B":"Kochen",
            "C":"Programmieren",
            "D":"Zeichnen"
        },
        "right":"C"
    },{
        "id" : "2",
        "question" : "Wie nennt man Feher bei einem Computerprogramm?",
        "answers" :  {
            "A":"Bug",
            "B":"Hat",
            "C":"Pen",
            "D":"Code"
        },
        "right":"A"
    }
];

function showNextQuestion() {
    if (currentQuestionNo >= questions.length) {
        showEnd();
        currentQuestionNo = 0;
      }

$(".answer").removeClass("btn-primary btn-danger btn-success btn-default");
$(".answer").addClass("btn-default");

console.log("Loading Question:" + currentQuestionNo);
currentQuestion = questions[currentQuestionNo];

$("#qno").text(currentQuestionNo + 1);
$("#question_text").text(currentQuestion.question);
$("#answer_a").text(currentQuestion.answers.A);
$("#answer_b").text(currentQuestion.answers.B);
$("#answer_c").text(currentQuestion.answers.C);
$("#answer_d").text(currentQuestion.answers.D); 
}

function getRightAnswer() {
    return currentQuestion.right;
}

$(".start").click(function() {
    console.log( "Start" );
    $(".quiz_start").fadeOut(function() {
      startQuiz();
    });
  });

  function startQuiz() {
    showNextQuestion();
    $("#continue_btn").hide();
    $("#question").fadeIn(); 
     
  }

function selectAnswer(id) {
    $(id).addClass("btn-primary");
    $(id).removeClass("btn-default");
  }

function showEnd() {
   $("#endpoints").text(points);
   $("#possiblepoints").text(rightAnswerPoints * questions.length);
  $("#question").fadeOut(function() {
    $(".quiz_end").fadeIn();  
  });  
}

  $("#answer_a_btn").click(function() {
    selectAnswer("#answer_a_btn");
    deselectAnswer("#answer_b_btn");
    deselectAnswer("#answer_c_btn");
    deselectAnswer("#answer_d_btn");
  });

  $("#answer_b_btn").click(function() {
    deselectAnswer("#answer_a_btn");
    selectAnswer("#answer_b_btn");
    deselectAnswer("#answer_c_btn");
    deselectAnswer("#answer_d_btn");
  });
   
  $("#answer_c_btn").click(function() {
    deselectAnswer("#answer_a_btn");
    deselectAnswer("#answer_b_btn");
    selectAnswer("#answer_c_btn");
    deselectAnswer("#answer_d_btn");
  });
   
  $("#answer_d_btn").click(function() {
    deselectAnswer("#answer_a_btn");
    deselectAnswer("#answer_b_btn");
    deselectAnswer("#answer_c_btn");
    selectAnswer("#answer_d_btn");
  });  


  $("#answer_commit_btn").click(function() {
    validateAnswer();
  });


  function validateAnswer() {
    $("#answer_commit_btn").hide();
    var rightAnswer = getRightAnswer();
    var selectedAnswerId = $(".answer.btn-primary").attr("id");  
    $(".answer.btn-primary").removeClass("btn-primary");
    $(".answer.btn-default").removeClass("btn-default");  
    var selectedAnswer = $(".answer.btn-primary").text()[0]; 
    if (selectedAnswer == rightAnswer) {
      points += rightAnswerPoints;
      $("#"+selectedAnswerId).addClass("btn-success");  
    } else {
      $("#"+selectedAnswerId).addClass("btn-danger");
    }
    $("#continue_btn").show();
  }
   
  $("#continue_btn").click(function() {
    $("#continue_btn").hide();
    $("#answer_commit_btn").show();
    currentQuestionNo++;
    showNextQuestion();
  });