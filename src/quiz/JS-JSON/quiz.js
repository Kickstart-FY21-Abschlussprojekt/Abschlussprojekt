//Definition:
let eqp = Number;
let idNow = Number;
let Pscore = 0;
let dif = Number;

//StartFunktion
function innit(sqp, epq) {
    idNow = sqp;
    eqp = epq;
    dif = (eqp+ 1) - idNow;
    QuestionBuilder(idNow);
};

//Inititial Question
function QuestionBuilder(id) {
    //Holen der Frage an der id:
    firebase.database().ref(`${id}/`).once("value").then(function(sn) {
        var question=sn.val().question;
        $( "#question" ).append( `<div id="QuestionContainer">${question}</div>` );
    });

    //Abrufen und Bauen der Antwortmöglichkeiten:
        firebase.database().ref(`${id}/answers`).once("value").then(function(snapshort) {
        snapshort.forEach(snap => {
            let letter = snap.key;
            let text = snap.val();
            $( "#quiz-option" ).append(
                 `<div name="answersblock">
                    <label class="answerblock">
                        <input type="radio" id="choice${id}:${letter}" name="q" value="${letter}">${text}</input>
                    </label>
                </div>` 
            );
        });
    });
};

//Update Questions
function buildNextQuestion(id) {
    idNow = id + 1; // Aufaddieren von der Benötigten ID  
    if(idNow <= eqp) {
        //Nächste frage ist Möglich
        //Bauen der FolgeFrage:
        
        firebase.database().ref(`${idNow}/`).once("value").then(function(sn) {
            var question=sn.val().question;
            $('#QuestionContainer').remove();
            $( "#question" ).append( `<div id="QuestionContainer">${question}</div>` );
        });
        $('div[name="answersblock"]').remove();
        firebase.database().ref(`${idNow}/answers`).once("value").then(function(snapshort) {
            snapshort.forEach(snap => {
                let letter = snap.key;
                let text = snap.val();
                $( "#quiz-option" ).append	(
                     `<div name="answersblock">
                        <label>
                            <input type="radio" id="choice${idNow}:${letter}" name="q" value="${letter}">${text}</input>
                        </label>
                    </div>` 
                );
            });
        });

    }else{
        //Ende dieser Sektion erreicht
        $( "#Quiz" ).append(
            `<div id ="NextQuestionTAG"> Sie haben das Ende dieses Quizes erreicht.
            Dabei haben sie von ${dif} Fragen, ${Pscore} richtig beantwortet.</div>`
        );
    }
};

//GlobalScore
function globalScore(correctAnswer){    
    const questionsPerQuiz = 1;
     //Abrufen, addieren und hinzufügen der Statistiken
    firebase.database().ref("0/").get().then( function(snapshot) {
        if (snapshot.exists()) {
          var data = snapshot.val();
          var globalCountCorrect;
          if (correctAnswer) {
            globalCountCorrect = data.questionsCorrect + 1;
              }
          else {
            globalCountCorrect = data.questionsCorrect + 0;
              }
          var globalCountQuestion = data.questionsAll + 1;
          var globalCountPeople = globalCountQuestion/questionsPerQuiz;
        
          firebase.database().ref('0/').set(
            {
            questionsCorrect: globalCountCorrect,
            questionsAll: globalCountQuestion,
            questionsAverage: globalCountCorrect/globalCountPeople
                }
              );
            }
            else {
              console.log("No data available");
            }});
};

//Submit und Checken der Antwort --> Weitergabe zur nächsten Frage
$("#submit-btn").click(function(){
    let uA= $('input[name="q"]:checked').val();
    firebase.database().ref(`${idNow}/`).once("value").then(function(sn) {
        var rA=sn.val().rightAnswer;
        let result = "";
            inner_block:{
                if(uA == rA){
                    result = "richtig";
                    Pscore += 1;
                    break inner_block;
                }else{  
                    result = "falsch";
                    break inner_block;
                };
            }
        $( "#quiz-option" ).hide();
        $("#submit-btn").hide();
        $( "#Quiz" ).append(
            `<div id ="NextQuestionTAG"> Du hast die Frage ${result} beantwortet</div>
                <div id ="NextQuestionTAG">
                    <button class="button" id="next-btn" type="button">Next Question</button>
                </div>`
            );
        globalScore(uA == rA);
        $("#next-btn").click(function(){
            buildNextQuestion(idNow);
            $("#submit-btn").show();
            $( "#quiz-option" ).show();
            $("#NextQuestionTAG").remove();
            $("#NextQuestionTAG").remove();
        });
    });
});

