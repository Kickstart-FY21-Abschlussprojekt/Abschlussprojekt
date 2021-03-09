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
        };  
    },
    showResult: function(qid){
        alert("I'm here")
        //get final Entered Answer via URL
        let urlParams =  new URLSearchParams(document.location.search.substring(1));
        let UserAnswer= urlParams.get(`q${qid}`);
        firebase.database().ref(`${qid}/`).once("value").then(function(sn) {
            var rA=sn.val().rightAnswer;
            //Check for correctness
            if(UserAnswer){
                if(UserAnswer == rA){
                    //What happens after the correct answer is given?
                    Quiz.build(qid++); 
                }else{
                    //What happens after a wrong anser is given?
                    alert("Wrong Answer");
                }
            }
        });

    }
}
