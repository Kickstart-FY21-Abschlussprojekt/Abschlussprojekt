let img1 = document.getElementById("accman");
var myGamePiece;

function startGame() {
    myGamePiece = new component(270, 200, img1);
    unitTest = new obstacle (135, 5, "Unit Test");
    componentTest = new obstacle(365, 5, "Component Test");
    assemblyTest = new obstacle(445, 340, "Assembly Test");
    productTest = new obstacle(55, 340, "Product Test");
    userAcceptanceTest = new obstacle(250, 445, "UAT");
    performanceTest= new obstacle(5, 150, "Performance Test");
    operationalReadinessTest = new obstacle(495, 150, "ORT");
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.classList.add("formatierung");
        this.canvas.width = 600;
        this.canvas.height = 550;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
      }
}

function obstacle (x, y, name){
    this.x = x;
    this.y = y;
    this.name = name;
    this.update = function() {
        context = myGameArea.context;
        context.strokeStyle = "purple";
        context.fillStyle = "purple";
        context.lineWidth = 5;
        context.strokeRect(this.x, this.y , 100, 100);
        context.lineWidth = 1;
        context.font = "10px Arial";
        context.fillText(name ,this.x+10, this.y+52);
    }
}

function component (x, y, img) {
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;   
    this.img = img; 
    this.update = function() {
        ctx = myGameArea.context;
        ctx.drawImage(this.img, this.x, this.y);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (55);
        var mytop = this.y;
        var mybottom = this.y + (96);
        var otherleft = otherobj.x - 2;
        var otherright = otherobj.x + (104);
        var othertop = otherobj.y - 2;
        var otherbottom = otherobj.y + (104);
        var crash = true;
        if ((mybottom < othertop) ||
        (mytop > otherbottom) ||
        (myright < otherleft) ||
        (myleft > otherright)) {
          crash = false;
        }
        return crash;
      }
}

function updateGameArea() {
    if (myGamePiece.crashWith(unitTest)) {
        myGameArea.stop();
        textFeld("Text zu Test1");
    }
    else if(myGamePiece.crashWith(componentTest)) {
        myGameArea.stop();
        textFeld("Text zu Test2");
    }
    else if(myGamePiece.crashWith(assemblyTest)) {
        myGameArea.stop();
        textFeld("Text zu Test3");
    }
    else if(myGamePiece.crashWith(productTest)) {
        myGameArea.stop();
        textFeld("Text zu Test4");
    }
    else if(myGamePiece.crashWith(userAcceptanceTest)) {
        myGameArea.stop();
        textFeld("Text zu Test5");
    }
    else if(myGamePiece.crashWith(operationalReadinessTest)) {
        myGameArea.stop();
        textFeld("Text zu Test6");
    }
    else if(myGamePiece.crashWith(performanceTest)) {
        myGameArea.stop();
        textFeld("Text zu Test7");
    }
    else{
        myGameArea.clear();
        myGamePiece.newPos();
        unitTest.update();
        componentTest.update();
        assemblyTest.update();
        productTest.update();
        userAcceptanceTest.update();
        performanceTest.update();
        operationalReadinessTest.update();
        myGamePiece.update();
    }
}

function moveup() {
    myGamePiece.speedY = -1; 
}

function movedown() {
    myGamePiece.speedY = 1; 
}

function moveleft() {
    myGamePiece.speedX = -1; 
}

function moveright() {
    myGamePiece.speedX = 1;
}

function clearmove() {
    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
}

function textFeld(inhalt){
    let p = document.createTextNode(inhalt);
    document.getElementById("info").appendChild(p);

    document.getElementById("info").classList.remove("hidden");
    document.getElementById("restart").classList.remove("hidden");
}

function restartGame(){

    myGameArea.clear();
    document.getElementById("info").classList.add("hidden");
    document.getElementById("info").innerHTML="";
    document.getElementById("restart").classList.add("hidden");
    startGame();

}