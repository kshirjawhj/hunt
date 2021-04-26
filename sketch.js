var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
;
var cashG,diamondsG,jwelleryG,swordGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=PLAY;
var gamestate;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
  
  bye = createSprite(200,200);
  bye.addAnimation("over",endImg);
  bye.scale= 0.9;
  bye.visible= false;
  
 


//creating boy running
boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
    path.velocityY= 4;
  boy.x = World.mouseX;
  
  
  edges= createEdgeSprites();
  boy.collide(edges);
    
    path.visible= true;
    boy.visible= true;
    bye.visible= false;
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+50;

      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection=treasureCollection+50;

      
    }else{
      if(swordGroup.isTouching(boy)) {
         cashG.destroyEach();
         diamondsG.destroyEach();
         jwelleryG.destroyEach();
         treasureCollection = 0
        gamestate = END;
   }
  }

   if (gamestate===END){
     treasureCollection = 0;
     path.velocityY= 0;
     boy.velociyiX= 0;
     
     path.visible= false;
     jwelleryG.visible= false;
     swordGroup.visbile= false;
     diamondsG.visible = false;
     cashG.visible= false;
     bye.visible= true;
     boy.visible= false;
     
     jwelleryG.setVelocityYEach(0);
     swordGroup.setVelocityYEach(0);   
     diamondsG.setVelocityYEach(0);
     cashG.setVelocityYEach(0);
     
        text("press space to replay!", 130, 300);

     
     textSize(25);
  fill(450);
  textFont("poppins")
  text("better luck next time!" ,90,100);
   }
    
    
    if (keyDown("space")&& gamestate==END){
      gamestate= PLAY;  
    

    }
    
    
    
    
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,150,30);
  }
  
  
}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}

