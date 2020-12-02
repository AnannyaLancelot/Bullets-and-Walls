var bullet;
var speed, weight,thickness;
var wall;



function setup() {
  createCanvas(1600,400);
  //speed weight thickness
  speed= random(50,300);
  weight=random(30,50);
  thickness=random(22,83);
  //creating wall
  wall =createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color(80,80,80);
  //creating bullet
  bullet=createSprite(0,200,50,20);
  bullet.velocityX=speed;
  bullet.density=weight;
  bullet.shapeColor=("white");
}

function draw() {
  background(1); 
  if(wall.x-bullet.x<(bullet.width+wall.width/2)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=color(255,0,0);

    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  } 
  
  drawSprites();
}