// setup variables for the rectangle
var recW = 280;
var recH = 40;
var recC = 20;
var recR = 0;
var recRMin; // GUI min
var recRMax; // GUI max
var recRStep; // GUI step
// setup variables for the triangele
var triB = 150;
var triF = 50;
// meue
var gui;

// Setup run one on start up
function setup() {
  // this set up the canvas-screen we can drwa in
  // we put it in a variable to edit later like if we whant the canvas at a certen place
  var canvas = createCanvas(360, 360);
  /*
  makeing the canvas crate some variables we can use like height and width
  point (0,0) is not in the botome left it is top left
  */

  // debug tool's
  recRMin = -PI;
  recRMax = PI;
  recRStep = PI/180;
  gui = createGui("debug");
  gui.addGlobals('recR');
  gui.hide();

  rectMode(CENTER);
}

// Draw run ever frame
function draw() {
  // set the bockground cooler
  background('#de411b');

  var cos_a = cos(recR);
  var sin_a = sin(recR);
  // add a round rectangle+
  // use the translate so the center of cange is locad difrentaly
  translate(width/2, height/2);
  // use Matrix to rotate so I can reset later
  applyMatrix(cos_a, sin_a, -sin_a, cos_a, 0, 0);
  // (x, y, w, h, d)
  rect(0, 0, recW, recH, recC);

  // I reset the orgen and Matrix to not efect other things
  translate(0,0);
  resetMatrix();

  // add triangele
  // (x1,y1,x2,y2,x3,y3)
  triangle((width/2)-(triB/2), height-triF, (width/2), (height/2), (width/2)+(triB/2), height-triF);

  // add a cericle I am going to use the hight of the rect
  // (x,y,w,h)
  ellipse((width/2), (height/2), recH, recH);
}
