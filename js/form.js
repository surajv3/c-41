class Form{
constructor(){

this.input=createInput("Player Name: ")
this.button=createButton("Start Race")
this.greeting=createElement("h1")
this.reset=createButton("reset")


}
hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();

}

display(){
var title=createElement("h2");
title.html("Car Racing");
title.position(displayWidth/2,0);

this.reset.position(displayWidth-100,20)
this.input.position(displayWidth/2-40,displayHeight/2-80);


this.button.position(displayWidth/2+30,displayHeight/2);

this.button.mousePressed(()=>{
this.input.hide();
this.button.hide();
player.name = this.input.value();
playerCount+=1
player.index=playerCount;
player.update();
player.updateCount(playerCount);


this.greeting.html("Welcome To The Race "+player.name)
this.greeting.position(displayWidth/2-70,displayHeight/4)


})
this.reset.mousePressed(()=>{
    player.updateCount(0)
    game.update(0)
    CarsAtEnd.update(0)
})
}

 
    
}






















