var bgimg,bg
var player;
function preload(){
bgimg = loadImage("SPACE.jpg")
playerimg = loadImage("ufo1.png")
}

function setup(){
  createCanvas(windowWidth,windowHeight)
  bg = createSprite(width/2,height/2,width,height)

bg.addImage(bgimg)
bg.velocityX = 5

player = createSprite(100,height-100)
player.addImage(playerimg)
player.scale = 0.08
}


function draw(){
  

  if(bg.position.x>2000){
    bg.position.x = width/2
  }
  drawSprites();
}
function keyPressed(){
  if(keyCode==38){
    player.velocityY=-2
  }
}