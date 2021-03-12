let img1 = document.getElementById("accman");
let img2 = document.getElementById("accman_right");
let id = "";
var myGamePiece;

function startGame() {
    myGamePiece = new component(275, 180, img1, img2);
    unitTest = new obstacle (160, 5, "Unit Test");
    componentTest = new obstacle(340, 5, "Component Test");
    assemblyTest = new obstacle(445, 315, "Assembly Test");
    productTest = new obstacle(55, 315, "Product Test");
    userAcceptanceTest = new obstacle(250, 345, "UAT");
    performanceTest= new obstacle(30, 150, "Performance Test");
    operationalReadinessTest = new obstacle(470, 150, "ORT");
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.classList.add("formatierung");
        this.canvas.width = 600;
        this.canvas.height = 450;
        this.context = this.canvas.getContext("2d");
        document.getElementById("ui").insertBefore(this.canvas, document.getElementById("buttons-container"));
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

function component (x, y, img_links, img_rechts) {
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;   
    this.img_links = img_links;
    this.img_rechts = img_rechts; 
    this.update = function() {
        ctx = myGameArea.context;
        if (this.speedX<=0){
        ctx.drawImage(this.img_links, this.x, this.y);}
        else{ctx.drawImage(this.img_rechts, this.x, this.y);}
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
        id = "t1";
        textFeld(id);
    }
    else if(myGamePiece.crashWith(componentTest)) {
        myGameArea.stop();
        id = "t2";
        textFeld(id);
    }
    else if(myGamePiece.crashWith(assemblyTest)) {
        myGameArea.stop();
        id = "t3";
        textFeld(id);
    }
    else if(myGamePiece.crashWith(productTest)) {
        myGameArea.stop();
        id = "t4";
        textFeld(id);
    }
    else if(myGamePiece.crashWith(userAcceptanceTest)) {
        myGameArea.stop();
        id = "t5";
        textFeld(id);
    }
    else if(myGamePiece.crashWith(operationalReadinessTest)) {
        myGameArea.stop();
        id = "t6";
        textFeld(id);
    }
    else if(myGamePiece.crashWith(performanceTest)) {
        myGameArea.stop();
        id = "t7";
        textFeld(id);
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
    myGamePiece.speedY = -1.5; 
}

function movedown() {
    myGamePiece.speedY = 1.5; 
}

function moveleft() {
    myGamePiece.speedX = -1.5; 
}

function moveright() {
    myGamePiece.speedX = 1.5;
}

function clearmove() {
    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
}

function textFeld(id){
    document.getElementById("info").classList.remove("hidden");
    document.getElementById(id).classList.remove("hidden");
    window.scrollTo(0, 1660);
}

function restartGame(){
    
    myGameArea.clear();
    
    if (!document.getElementById("info").classList.contains("hidden")){
    document.getElementById("info").classList.add("hidden");
    document.getElementById(id).classList.add("hidden");
    }
    id="";
    window.scrollTo(0, 1445);
    startGame();

}