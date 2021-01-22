var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
fixedRect1= createSprite(200,300,50,80);
fixedRect1.shapeColor="green";

fixedRect2=createSprite(400,200,50,80);
fixedRect2.shapeColor="blue";
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

if(isTouching(movingRect,fixedRect2)){
  movingRect.shapeColor="red";
  fixedRect2.shapeColor="red";

}
else {
  movingRect.shapeColor="green";
  fixedRect2.shapeColor="green";
}

  drawSprites();
}
