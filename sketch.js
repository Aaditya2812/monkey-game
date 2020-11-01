

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

var gameState=1;
var play=1;
var end=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  monkey_collided=loadImage("sprite_6.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {

  createCanvas(400,400)
  
  monkey=createSprite(40,380,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(0,390,1200,10);
  
  
FoodGroup=new Group();
  obstacleGroup= new Group();
// monkey.debug=true;
  
}


function draw() {
    if(gameState===1){
  background("white");
    
monkey.collide(ground);
  
  if(keyDown("space")&&monkey.y>250){
  monkey.velocityY=-12;
  }
  
  monkey.velocityY=monkey.velocityY+0.8;

  bananaf()
  obstaclesf()
  
  if(monkey.isTouching(obstacleGroup)){
    gameState=end;
    
  }
}
  
  if(gameState===end){
    
    banana.velocityX=0;
    obstacle.velocity.x=0;
    monkey.changeAnimation("collided" ,monkey_collided);
    monkey.addAnimation("collided" ,monkey_collided);
    monkey.velocityY=0;
  }
  
  drawSprites();
}

function bananaf(){
  if(frameCount%100===0){
  banana=createSprite(600,50,10,10);
  banana.addImage(bananaImage);
    banana.y = Math.round(random(200,320));
  banana.velocityX=-5
  banana.scale=0.07;
    FoodGroup.add(banana);
}
}

function obstaclesf(){
  if(frameCount%90===0){
 obstacle=createSprite(400,367,10,10);
 obstacle.addImage(obstacleImage);
 obstacle.scale=0.1;
    obstacle.velocityX=-5;
    obstacleGroup.add(obstacle)
  }
}
