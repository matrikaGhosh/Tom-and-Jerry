
function preload() {
    //load the images here
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(400,200,80,30)
    cat.shapeColor = 'orange'
    

    mouse = createSprite(150,150,50,80)
    mouse.shapeColor = 'grey'

}

function draw() {

    background('250');
    //Write condition here to evalute if tom and jerry collide
     cat.x = mouseX;
     cat.y = mouseY;
     
    if(cat.x - mouse.x < cat.width/2+mouse.width/2
     && mouse.x - cat.x < cat.width/2+mouse.width/2){
     cat.shapeColor = 'green'
     mouse.shapeColor = 'green'
  
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
