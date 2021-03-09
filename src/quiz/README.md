# How to use the Quiz

# Add the folowing statements to the top of the HEAD-TAG inside the HTML Document:
    <link rel="stylesheet" href="/src/quiz/quiz.css">
    <script src="https://www.gstatic.com/firebasejs/8.2.10/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.2.10/firebase-database.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.2.10/firebase-analytics.js"></script>
    <script src="/src/quiz/JS-JSON/quizFirebase.js" async></script>
        <script>
        var firebaseConfig = {
            apiKey: "AIzaSyBqLdKaS_sz3mFga0cw_10ltMVIxBQOEZ4",
            authDomain: "testumgebung-6eb9d.firebaseapp.com",
            projectId: "testumgebung-6eb9d",
            storageBucket: "testumgebung-6eb9d.appspot.com",
            messagingSenderId: "324794393827",
            appId: "1:324794393827:web:7cdce89f6da22ef02651d6",
            measurementId: "G-B52LTFD60W"
        };
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
    </script>

# Add the fowoling property inside the BODY-TAG:
    <body onload="Quiz.build()">

# Create the Quiz-Form inside the BODY, after the following princible:
    <form id="quiz" name="quiz">
        <div class="frage", id="question: ID-OF-THE-QUESTION "></div>
        <div id="quiz-options">
        </div>
        <div class="buttons">
            <button id="submit-btn" class="btn-animated" onclick="Quiz.showResult()">Submit</button>
        </div>
    </form>
