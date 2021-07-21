class Game{

    getState(){
        database.ref('gameState').on("value", (data)=> {
            gameState= data.val()
        })
    }

    update(state){
        database.ref('/').update({
            gameState: state
        })
    }

     async start(){

        player = new Player()

        form= new Form()
        form.display()
        
        var playerRef= await database.ref('playerCount').once("value")
        
    if(playerRef.exists()){
    player.getCount()
     }  
     
     car1=createSprite(200,200)
    car2=createSprite(400,200)
     car3=createSprite(600,200)
    car4=createSprite(800,200)
    
    car1.addImage(car1img)
    car2.addImage(car2img)
    car3.addImage(car3img)
    car4.addImage(car4img)
    
    
    
    
    
    
    
    cars=[car1,car2,car3,car4]
    
    
    }

play(){
    form.greetings.hide()
  textSize(30)  
   text("game start",200,200) 

player.getInfoPlayer()
console.log(allPlayers)

if(keyIsDown(UP_ARROW)){
    player.distance += 50
    player.update()
}

if(allPlayers !== undefined){

image(trackImg,0,-height*4,width,height*5)




var newY= 200
var index=0;
var x=450



for(var plr in allPlayers){

cars[index].x=x
cars[index].y=height - allPlayers[plr].distance



    if( plr === "player" +player.index){
    fill("red")
camera.position.x=cars[index].x
camera.position.y=cars[index].y



}

else{
    fill("black")
}
//text(allPlayers[plr].name + ";" + allPlayers[plr].distance, 300,newY)
    //newY+=50

drawSprites()
index++
x+=200
}


}
}
end(){
    alert("you won the game")
}


}
