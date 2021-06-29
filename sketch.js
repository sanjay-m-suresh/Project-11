var Runner, Runner_sam;
var path,invisiblePathleft, invisiblePathright, path_area;
var bomb, bomb_png;
var coin, coin_png;
var energyDrink, energyDrink_png;
var power, power_png;
function preload(){
  //pre-load images
  Runner_sam = loadAnimation("Runner-1.png", "Runner-2.png");
  path_area = loadImage("path.png");
  bomb_png = loadImage("bomb.png");
  coin_png = loadImage("coin.png");
  energyDrink_png = loadImage("energyDrink.png");
  power_png = loadImage("power.png");
}

function setup(){
  createCanvas(381,600);
  //create sprites here
  //creating the path
  path = createSprite(200,200);
  path.addImage("path", path_area);
  path.velocityY = 4;
  path.scale = 1.2;
  //creating the Runner
  Runner = createSprite(200,500,50,20);
  Runner.addAnimation("Runner", Runner_sam);
  Runner.scale = 0.07;
  //creating the bomb
  bomb = createSprite(200,130,10,10);
  bomb.addImage("bomb", bomb_png);
  bomb.scale = 0.07;
  //creating the coin
  coin = createSprite(100,130,50,50);
  coin.addImage("coin", coin_png);
  coin.scale = 0.3;
  //creating the energyDrink
  energyDrink = createSprite(300,130,50,50);
  energyDrink.addImage("energyDrink", energyDrink_png);
  energyDrink.scale = 0.09;
  //creating the power
  power = createSprite(200,50,50,50);
  power.addImage("power", power_png);
  power.scale = 0.2;
  //creating the invisiblePathleft
  invisiblePathleft = createSprite(1,200,1,300);
  invisiblePathleft.visible = false;
  //creating the invisiblePathright
  invisiblePathright = createSprite(399,200,1,300);
  invisiblePathright.visible = false;
}

function draw() {
  background(0);
  textSize(15);
  text("coin Score", 1,200);
  textSize(10);
  if(path.y > 400){
    path.y = height/2;
  }
  Runner.x = World.mouseX;
  edges = createEdgeSprites;
  
  

  Runner.collide(invisiblePathright);
  Runner.collide(invisiblePathleft);
drawSprites();
}
