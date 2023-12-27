


var bg, bgImg
var dogImg, dog
var ground
var obstacleGroup;

var rainyImg1, rainyImg2,rainyImg3

// loading the images
function preload() {
  bgImg = loadImage("assets/bgw.png")
  dogAnamation = loadAnimation("assets/dog1.png", "assets/dog2.png", "assets/dog3.png", "assets/dog4.png")
  obstacle1 = loadImage("assets/obstacle1.png")
  obstacle2 = loadImage("assets/obstacle2.png")
  obstacle3 = loadImage("assets/obstacle3.png");

  rainyImg1 = loadImage("assets/mossyrock1.png")
  rainyImg2 = loadImage("assets/mossyrock2.png")
  rainyImg3 = loadImage("assets/mossyrock3.png")
}

// Make sure everything is smooth

function setup() {
  createCanvas(1720, 520)
  console.log(windowWidth, windowHeight)
  //background image
  bg = createSprite(7500, 260);
  bg.addImage(bgImg);
  bg.scale = 1
  bg.velocityX = -30
  //creating the ground
  ground = createSprite(100, 465, 600, 5)
  ground.visible = false;
  
  obstacleGroup = new Group()
  //creating PC    
  dog = createSprite(100, 200, 20, 50);
  dog.addAnimation("dog", dogAnamation);
  dog.scale = 1;
}
// meanwhile in another function ........
function draw() {
  background("black");
  console.log(bg.x)

  dog.collide(ground)
  //making the dog jump
  if (keyDown("space")) {
    dog.velocityY = -10;
  }

  //adding gravity
  dog.velocityY = dog.velocityY + 2;
  if (bg.x < -6000) {
    bg.x = 7500;
  }
  //calling the function 
  // check the x of the bg ( 8000  TO 4000 -> FIRST BG)
  if(bg.x> 4000 && bg.x <8000){
   // spawnObstacles();
  }

  if(   bg.x < 2000 && bg.x >-2000){
    
    spawnObstaclesRainy();
  }

  if( bg.x <-2000 && bg.x > -4600){
    //spawnObstaclesIce();
  }

  
  drawSprites();
  
}
function playerBenefits(){
  
}
function spawnObstacles() {

  if (frameCount % 20 === 0) {
   // var rand = Math.round(random(200,width-1));
    var obstacle = createSprite(width+10, 430, 20, 10);
    obstacle.setCollider('circle', 0, 0, 50);

    obstacle.velocityX = -30;
    
    var rand1 =Math.round(random(1,3))
    switch (rand1) {
      case 1: obstacle.addImage(obstacle1);obstacle.scale = 0.3;
        break;
      case 2: obstacle.addImage(obstacle2);obstacle.scale = 0.3;    break;
      case 3: obstacle.addImage(obstacle3);obstacle.scale = 0.3;
        break;
      default: break;
    }
    obstacleGroup.add(obstacle)

  }

}

function spawnObstaclesRainy() {

  if (frameCount % 20 === 0) {
   // var rand = Math.round(random(200,width-1));
    var obstacle = createSprite(width+10, 430, 20, 10);
    obstacle.setCollider('circle', 0, 0, 50);

    obstacle.velocityX = -30;
    
    var rand1 =Math.round(random(1,3))
    switch (rand1) {
      case 1: obstacle.addImage(rainyImg1);obstacle.scale =1;
        break;
      case 2: obstacle.addImage(rainyImg2);obstacle.scale = 1;    break;
      case 3: obstacle.addImage(rainyImg3);obstacle.scale = 1;
        break;
      default: break;
    }
    obstacleGroup.add(obstacle)

  }

}