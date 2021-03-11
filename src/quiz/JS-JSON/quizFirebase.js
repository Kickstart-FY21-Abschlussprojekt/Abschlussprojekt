let test ;
let Quiz ={
    build(QID){
        if(test != null){
            this.qid = test;
            QID = test;
        }else{
        this.qid = QID;
        };
        firebase.database().ref(`${this.qid}/`).once("value").then(function(sn) {
            var question=sn.val().question;
            var id = sn.val().id;
            document.getElementById(`questions`).innerHTML=question;
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
                document.getElementById(`quiz-option`).innerHTML = ans.join('');
                document.getElementById(`submit-btn`).addEventListener('click', Quiz.showResult(QID));
            });
        });
        function getUserAnswer(){
            //Getting the Value of the User Choosen Answer 
            var asnwer = document.getElementById(`quiz`).elements[`question`];
            for (var i = 0; i < asnwer; i++) {
               asnwer[i].onclick = function() {
               return asnwer.value;
                };
            };  
        };
        getUserAnswer();
        
        
    },
    
    showResult(qid){
        //get final Entered Answer via URL
        let urlParams =  new URLSearchParams(document.location.search.substring(1));
        let UserAnswer= urlParams.get(`q${qid}`);
        firebase.database().ref(`${qid}/`).once("value").then(function(sn) {
            var rA=sn.val().rightAnswer;
            //Check for correctnes
            outer_block:{
            if(UserAnswer){
                let result = "";
                inner_block:{
                    if(UserAnswer == rA){
                        result = "richtig";
                        break inner_block;
                    }else{  
                        result = "falsch";
                        break inner_block;
                    };
                } 
                let output = [];
                    output.push(
                        `<div> Du hast die Frage ${result} beantwortet</div>
                        <div>
                            <button class="button" id="next">Next Question</button>
                        </div>`
                    );
                    console.log(output);
                    document.getElementById(`quiz-option`).innerHTML=  output.join('');
                    document.getElementById(`next`).addEventListener('click', Quiz.nextQuestion(qid));
                    
                    //Update Global Scoreboard  
                    Quiz.globalScore((UserAnswer == rA));                             
            };
        };
                
            
        });
    },
    globalScore(correctAnswer){    
        const questionsPerQuiz = 1;
         //Abrufen, addieren und hinzufügen der Statistiken
        firebase.database().ref("0/").get().then( function(snapshot) {
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
    },
    nextQuestion(QID){
        test = QID + 1;
        Quiz.build(test);

    }
};
Quiz.build(1);