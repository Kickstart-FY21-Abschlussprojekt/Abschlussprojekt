let Quiz ={
    build: function(QID= 1){
        this.qid = QID;
        firebase.database().ref(`${this.qid}/`).once("value").then(function(sn) {
            var question=sn.val().question;
            var id = sn.val().id;
            document.getElementById(`question`).innerHTML=question;
            let ans = [];
            firebase.database().ref(`${QID}/answers`).once("value").then(function(snapshort) {
                snapshort.forEach(snap => {
                    let letter = snap.key;
                    let text = snap.val();
                    ans.push(
                        `<div name="answers">
                        <label>
                            <input type="radio" id="choice${id}:${letter}" name="q${id}" value="${letter}">${text}</input>
                        </label>
                        </div>`
                    );
                });
                document.getElementById('quiz-options').innerHTML = ans.join('');
            });
        });
        Quiz.getUserAnswer();
        Quiz.showResult(this.qid);
    },
    getUserAnswer: function(){
        //Getting the Value of the User Choosen Answer 
        var asnwer = document.getElementById('quiz').elements['question'];
        for (var i = 0; i < asnwer; i++) {
               asnwer[i].onclick = function() {
               return asnwer.value;
            };
        }  
    },
    showResult: function(qid){
        //get final Entered Answer via URL
        let urlParams =  new URLSearchParams(document.location.search.substring(1));
        let UserAnswer= urlParams.get(`q${qid}`);
        firebase.database().ref(`${qid}/`).once("value").then(function(sn) {
            var rA=sn.val().rightAnswer;
            //Check for correctness
            if(UserAnswer){
                if(UserAnswer == rA){
                    //What happens after the correct answer is given?
                    alert("Right Answer");
                    Quiz.build(qid++);
                    UserAnswer = "";
                }else{
                    //What happens after a wrong anser is given?
                    alert("Wrong Answer");
                }
            }
            //Update Global Scoreboard
            Quiz.globalScore((UserAnswer == rA));
        });

    },
    globalScore: function(correctAnswer){
        
        const questionsPerQuiz = 1;
         //Abrufen, addieren und hinzufügen der Statistiken
      firebase.database().ref("question").get().then( function(snapshot) {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          var data = snapshot.val();
          var globalCountCorrect;

          if (correctAnswer) {
            globalCountCorrect = data.questionsCorrect + 1;
          }
          else {
            globalCountCorrect = data.questionsCorrect + 0;
          }
          var globalCountQuestion = data.questionsAll + 1;
          var globalPeopleCount = globalQuestionCount/questionsPerQuiz;

          firebase.database().ref('question').set(
            {
            questionsCorrect: globalCountCorrect,
            questionsAll: globalCountQuestion,
            questionsAverage: globalCountCorrect/globalPeopleCount
            }
          );
        }
        else {
          console.log("No data available");
        }});
    }
}
