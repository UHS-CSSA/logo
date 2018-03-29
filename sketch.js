// setup variables for the rectangle
var recW = 280;
var recH = 40;
var recC = 20;
var recR = -17;
var recRMin; // GUI min
var recRMax; // GUI max
var recRStep; // GUI step
// setup variables for the triangele
var triB = 150;
var triF = 50;
// setup variables for text
var textLS = 210;
var textSS = 60;
// meue and canvas variable
var debugGUI;
var canvas;
// Flages for things
var boxOFlag = true;
var leaterAOP = true;
var debugGUIFlag = false;

// Setup run one on start up
function setup() {
  // this set up the canvas-screen we can drwa in
  // we put it in a variable to edit later like if we whant the canvas at a certen place
  canvas = createCanvas(360, 360);
  canvas.parent("p5jsCSSAlogo");
  /*
  makeing the canvas crate some variables we can use like height and width
  point (0,0) is not in the botome left it is top left
  */

  angleMode(DEGREES); // Change the mode to DEGREES

  // setup debug tool's
  // setup var need for makeing the meue
  recRMin = -180;
  recRMax = 180;
  recRStep = 1;
  // makeing the meue
  debugGUI = createGui("debug");
  // add the recR as a oppshen
  debugGUI.addGlobals('recR','recW','recC','recH','leaterAOP','textLS','textSS','triB','triF','boxOFlag');
  // hideing the meue
  debugGUI.hide();

  // seting the way that x and y work on rect
  rectMode(CENTER);

  // load and set font
  textFont('Roboto');
}

// Draw run ever frame
function draw() {
  // set the bockground cooler
  background('#de411b');

  // cheack if debug GUI was on or off
  if(debugGUIFlag){
    debugGUI.show();
  }else{
    debugGUI.hide();
  }

  // geting the cos and sin of the angle
  var cos_a = cos(recR);
  var sin_a = sin(recR);
  // add a round rectangle+
  // use the translate so the center of cange is locad difrentaly
  translate(width/2, height/2);
  // use Matrix to rotate so I can reset later
  applyMatrix(cos_a, sin_a, -sin_a, cos_a, 0, 0);
  if(boxOFlag){
    // (x, y, w, h, d)
    fill(255);
    rect(0, 0, recW, recH, recC);
  }

  // Add css to the bar
  fill(0);
  textSize(textSS);
  text('CSS', recC-(recW/2), recH/2);

  // I reset the orgen and Matrix to not efect other things
  translate(0,0);
  resetMatrix();

  if(!leaterAOP){
    // add triangele
    // (x1,y1,x2,y2,x3,y3)
    fill(255);
    triangle((width/2)-(triB/2), height-triF, (width/2), (height/2), (width/2)+(triB/2), height-triF);
  }

  // put the lass leater of A down
  if(leaterAOP){// see opshens with A leater
    fill(0);
    textSize(textLS);
    text('A', (width/2)-(triB/2), height-triF);
  }

  // add a cericle I am going to use the hight of the rect
  // (x,y,w,h)
  if(leaterAOP){
    fill(85);
  }else {
    fill(255);
  }
  ellipse((width/2), (height/2), recH, recH);

  if(!leaterAOP){// see opshens with A leater
    fill(0);
    textSize(textSS);
    text('A', (width/2)-(recH/2), (height/2)+(recH/2));
  }
}
