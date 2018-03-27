// setup variables for the rectangle
var recW = 280;
var recH = 40;
var recC = 20;
var recR = 0;
// setup variables for the triangele
var triB = 150;
var triF = 50;

// Setup run one on start up
function setup() {
  // this set up the canvas-screen we can drwa in
  // we put it in a variable to edit later like if we whant the canvas at a certen place
  var canvas = createCanvas(360, 360);
  /*
  makeing the canvas crate some variables we can use like height and width
  point (0,0) is not in the botome left it is top left
  */

  rectMode(CENTER);
}

// Draw run ever frame
function draw() {
  // set the bockground cooler
  background('#de411b');

  // add a round rectangle
  // (x, y, w, h, d)
  //translate((width/2), (height/2));
  rotate(recR);
  //rect((width/2)-(recW/2), (height/2)-(recH/2), recW, recH, recC);
  rect((width/2), (height/2), recW, recH, recC);

  rotate(0);
  // add triangele
  // (x1,y1,x2,y2,x3,y3)
  triangle((width/2)-(triB/2), height-triF, (width/2), (height/2), (width/2)+(triB/2), height-triF);

  // add a cericle I am going to use the hight of the rect
  // (x,y,w,h)
  ellipse((width/2), (height/2), recH, recH);
}
