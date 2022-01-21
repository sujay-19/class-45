var bg,bg_image
var player,player_image,playerShooting_img

function preload() {
bg_image = loadImage("assets/bg.jpeg")
player_image = loadImage("assets/shooter_1.png")
playerShooting_img = loadImage("assets/shooter_3.png")

}

function setup(){
  createCanvas(windowWidth,windowHeight)
  bg = createSprite(displayWidth/2-25,displayHeight/2-45)
  bg.addImage("background",bg_image)

  player = createSprite(width/2-590,height/2)
  player.addImage(player_image)
  player.scale=0.5
  player.debug=true
  player.setCollider("rectangle",0,0,100,200)
}

function draw(){
 background(0)

  if(keyWentDown("space")) {
    player.addImage(playerShooting_img)
  }else if(keyWentUp("space")) {
     player.addImage(player_image)
  }

  if(keyDown("UP_ARROW")||touches.length>0){
   player.y-=10

  }

  if(keyDown("DOWN_ARROW")||touches.length>0){
    player.y+=10
 
   }

  drawSprites()
}