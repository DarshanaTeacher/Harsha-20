var fix;
var move;

function setup() {
  createCanvas(800,  400);
    fix = createSprite(400, 200, 50, 50);
    move = createSprite(200, 200, 40, 10);
 }

function draw() {
  background(255,  255,  255);  
  line(mouseX,  mouseY, pmouseX, pmouseY);
  move.x = mouseX;
  move.y = mouseY;
    if (((move.x - fix.x) < (fix.width / 2 + move.width / 2) && (fix.x - move.x) < (fix.width / 2 + move.width / 2))
    && (move.y - fix.y) < (fix.height / 2 + move.height / 2) && (fix.y - move.y) < (fix.height / 2 + move.height / 2)){
  move.shapeColor = "BLACK";
  fix.shapeColor  = "BLACK";
  }
  else {
   move.shapeColor = "LAVENDER";
   fix.shapeColor = "LAVENDER";
  }
  drawSprites();
}
