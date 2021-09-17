var fixedRect,movingRect;
var bg ;
var jack,jackAnimation;
function preload(){
bg=loadImage("space.jpg")
jackAnimation=loadAnimation("jackfree/Walk1.png","jackfree/Walk2.png","jackfree/Walk3.png","jackfree/Walk4.png","jackfree/Walk5.png","jackfree/Walk6.png",)

}


function setup() {
  createCanvas(displayWidth,displayHeight);
 jack = createSprite(100,100)
 jack.scale=0.1
jack.addAnimation("walking",jackAnimation)
}

function draw() {
  background(bg);  
 
  drawSprites();
}
