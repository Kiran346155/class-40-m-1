
var gameState=0;
var playerCount;

var form, game, player
var allPlayers

var car1,car2,car3,car4
var cars=[]




function preload(){
car1img= loadImage("images/car1.png")
car2img= loadImage("images/car2.png")
car3img=loadImage("images/car3.png")
car4img=loadImage("images/car4.png")
trackImg=loadImage("images/track.jpg")
  
}

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth,displayHeight);
  game=new Game()
  game.getState()
  game.start()



}

function draw(){
  background("white");
if(playerCount === 4){
  gameState=1
game.update(gameState)
}  
if(gameState===1){
  clear();
  game.play()
}  
  
if(player.distance>5300){
gameState=2
}

if(gameState === 2){
  game.end ()
}














}

