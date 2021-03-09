let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let img = document.getElementById("accman");
let x = 240;
let y = 0;
let newX = 240;
let newY = 0;

function startGame(x, y){
test1 = ctx.strokeRect(5, 5, 100, 100);
test2 = ctx.strokeRect(395, 5, 100, 100);
test3 = ctx.strokeRect(395, 395, 100, 100);
test4 = ctx.strokeRect(5, 395, 100, 100);
test5 = ctx.strokeRect(200, 395, 100, 100);
test6 = ctx.strokeRect(5, 200, 100, 100);
test7 = ctx.strokeRect(395, 200, 100, 100);

ctx.drawImage(img, x, y);
this.interval=setInterval(update, 20);
}

function moveup() {
    newY -= 1;
  }
  
  function movedown() {
    newY += 1;
  }
  
  function moveleft() {
    newX -= 1;
  }
  
  function moveright() {
    newX += 1;
  }

  function stopmove(){
    newX = newX;
    newY = newY;
  }


function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    startGame(newX, newY);
}