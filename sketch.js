//for all the varialble in the code
var path,
    boy,
    cash,
    diamonds,
    jwellery,
    sword;

var pathImg,
    boyImg,
    cashImg,
    diamondsImg,
    jwelleryImg,
    swordImg;

var treasureCollection = 0;

var cashG,
    diamondsG,
    jwelleryG,
    swordGroup;

var PLAY = 1,
    END = 0,
    gameState = 1;

//to load eveything
function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
}


function setup(){
  //to create the sprites
  createCanvas(400,400);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(70,330,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  //to make the groups
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

}

function draw() {

  background(0);

    //the play state
    if(gameState === PLAY){
    
   if(boy.isTouching(cashG)){
     cashG.destroyEach();
     treasureCollection=treasureCollection+50;
  }

  if(boy.isTouching(diamondsG)){
     diamondsG.destroyEach();
     treasureCollection=treasureCollection+100;
  }

  if(boy.isTouching(jwelleryG)){
     jwelleryG.destroyEach();
     treasureCollection=treasureCollection+150;
    
  }
      if(boy.isTouching(swordGroup)){
     gameState = END 
    }
    }
  
  //the end state
    else if (gameState === END) {
     
      path.velocityY = 0;
     
      cashG.velocityYEach = 0;
      diamondsG.velocityYEach = 0;
      jwelleryG.velocityYEach = 0;
      
   }
  boy.x = World.mouseX;
  //edges
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  //to create various funtions
    createCash();
    createDiamonds();
    createJwellery();
    createSword();

//to destroy all the items
  if (cashG.isTouching(boy)) {
      cashG.destroyEach();
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      
    }else{
      if(swordGroup.isTouching(boy)) {
        swordGroup.destroyEach();
    }
  }
//to draw sprities,text
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,150,30);
  

}
//remaining is the different funtions
function createCash() {
  if (World.frameCount % 50 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 80 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 80 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 150 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}