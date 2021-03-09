let img1 = document.getElementById("accman");
var myGamePiece;

function startGame() {
    myGamePiece = new component(240, 0, img1);
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 500;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        this.context.strokeRect(5, 5, 100, 100);
        this.context.strokeRect(395, 5, 100, 100);
        this.context.strokeRect(395, 395, 100, 100);
        this.context.strokeRect(5, 395, 100, 100);
        this.context.strokeRect(200, 395, 100, 100);
        this.context.strokeRect(5, 200, 100, 100);
        this.context.strokeRect(395, 200, 100, 100);
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
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
}

function updateGameArea() {
    myGameArea.clear();
    myGameArea.start();
    myGamePiece.newPos();    
    myGamePiece.update();
}

function moveup() {
    myGamePiece.speedY = -0.02; 
}

function movedown() {
    myGamePiece.speedY = 0.02; 
}

function moveleft() {
    myGamePiece.speedX = -0.02; 
}

function moveright() {
    myGamePiece.speedX = 0.02; 
}

function clearmove() {
    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
}