var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var backgroundSprite
var backgroundSpriteImg

var groundSprite
var groundSpriteImg
var ground2
var ground2_1
var ground2_2 
var ground2_3
var ground3
var groundBridgeImg

var door 
var doorImage

var player
var playerImg




function preload(){
backgroundSpriteImg = loadImage('assets/brickWall.jpg')
groundSpriteImg = loadImage('assets/grassImg.png')
groundBridgeImg = loadImage('assets/bridgeImg.png')
doorImage = loadImage('assets/DoorImg.png')
playerImg = loadImage('assets/AlienPlayer.png')

}

function setup(){

//background image
createCanvas(1500,800)

backgroundSprite = createSprite(750,400,1500,800)
backgroundSprite.addImage(backgroundSpriteImg)

groundSprite = createSprite(750,780,1500,30)
groundSprite.shapeColor='black'
//groundSprite.addImage(groundSpriteImg)

ground2_1 = createSprite(1000,530,900,30)
ground2_1.shapeColor='black'
//ground2_1.addImage(groundBridgeImg)

ground3 = createSprite(500,300,900,30)
ground3.shapeColor='black'
//ground3.addImage(groundBridgeImg)

door = createSprite(150,205,50,50)
door.addImage(doorImage)
door.scale = 0.11

player = createSprite(1300,700,50,50)
player.addImage(playerImg)
player.scale = 0.2





}

function draw() {
  
  background("black");

  if (keyDown(UP_ARROW)) {
    player.velocityY = -7
  }
  player.velocityY = player.velocityY+0.2
        
 
        drawSprites();
        
}