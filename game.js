let canvas = document.getElementById("myCanvas");
let canobj = canvas.getContext("2d");
// Set line width
canobj.lineWidth = 10;
// Door
canobj.strokeRect(5, 5, 100, 100);
canobj.strokeRect(395, 5, 100, 100);
canobj.strokeRect(395, 395, 100, 100);
canobj.strokeRect(5, 395, 100, 100);
