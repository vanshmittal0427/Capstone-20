var spaceImg, space;
var metalImg, metal, metalsGroup;
var rocket, rocketImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  spaceImg = loadImage("space.jpg");
  metalImg = loadImage("metal.jpg");
  rocketImg = loadImage("rocket.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(400, 600);
  space = createSprite(200,300);
  space.addImage("space",spaceImg);
  space.velocityY = 1;
  space.scale=2.6
  metalsGroup=new Group();

  rocket = createSprite(200,200,50,50);
  rocket.scale = 0.3;
  rocket.addImage("rocket", rocketImg);
  
}

function draw() {
  background(200);
  
  if (gameState === "play") {
    if(keyDown("left_arrow")){
      rocket.x = rocket.x - 3;
    }
    
    if(keyDown("right_arrow")){
      rocket.x = rocket.x + 3;
    }
    
    if(keyDown("space")){
      rocket.velocityY = -10;
    }
    
    rocket.velocityY = rocket.velocityY + 0.8
  }

  if(space.y > 400){
      space.y = 300
    }
    spawnMetals()

    if(metalsGroup.isTouching(rocket)){
      rocket.velocityY = 0;
    }
   

  drawSprites();

  if (gameState === "end"){
    textSize(30);
    text("Game Over", 230,250)
  }

  }

  function spawnMetals(){
if(frameCount%240===0){
metal=createSprite(200,-50);
metal.addImage(metalImg);
metal.x=Math.round(random(120,400));
metal.velocityY=1
metal.lifetime=700
metal.scale=0.75
metalsGroup.add(metal)
}

  } 