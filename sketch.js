var bg,bgImg1,bgImg2
var monster,monsterImg
var gun,gunImg 
var ammo,ammoImg

function preload(){
   bgImg1 = loadImage("bg-1.jpeg")
   bgImg2 = loadImage("bg-2.jpeg")
   monsterImg = loadImage("monsters.jpg")
   gunImg = loadImage('gun_1.png')


}

function setup(){
   createCanvas(displayWidth-100,displayHeight-100);
   bg = createSprite(width/2,height/2);
   bg.addImage(bgImg1);
   bg.scale=0.7;

   gun=createSprite(width/2,height-200);
   gun.addImage(gunImg);
  // gun.rotation = 90;
//gun.rotateToDirection=true;
//gun.velocityX = 5;
   
}
function draw() {
   background("black")
   

  if (keyDown(LEFT_ARROW)&&gun.x>width/2-100) {
    gun.x-=5
  }
  if (keyDown(RIGHT_ARROW)&&gun.x<width/2+400) {
    gun.x+=5
  } 
  drawSprites();
    
}