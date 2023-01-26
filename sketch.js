var cube 



function setup() {
  createCanvas(1400,750);
  cube=createSprite(300,375,50,50);
}

function draw() 
{
  background(30);

if (keyIsDown(RIGHT_ARROW)){
  cube.position.x = cube.position.x + 10
}

if (keyIsDown(UP_ARROW)){
  cube.position.y = cube.position.y - 10
}

if (keyIsDown(DOWN_ARROW)){
  cube.position.y = cube.position.y + 10
}

if (keyIsDown(LEFT_ARROW)){
  cube.position.x = cube.position.x - 10
}


drawSprites();
}




