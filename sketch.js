const Engine = Matter.Engine;
 const Bodies = Matter.Bodies;
 const World = Matter.World;

var engine,world;
var bg;
var ground;
var backgroundImg;
snow = [];
var snowSound;
function preload(){
backgroundImg = loadImage("snowDay.jpg")
snowSound = loadSound("SnowSound.mp3")

}


function setup() {
  createCanvas(600,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground;
 // snow1 = new Snow(30,40,10) ;
 snowSound.play();
}

function draw() {
  background(backgroundImg); 
  Engine.update(engine);
  if(frameCount % 10 === 0){
  snow.push(new Snow(random(600),-20,10));
  }
  for(var i = 0;i < snow.length;i++){
    snow[i].display();
    
  }

  ground.display();

 // snow1.display();
  drawSprites();
}
