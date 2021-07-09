var canvas;
var music;
var block1,block2,block3,block4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(820,600);

    //create 4 different surfaces
       
    block1 = createSprite(110,550,180,20);
    block1.shapeColor = "red";

    block2 = createSprite(310,550,180,20);
    block2.shapeColor = "skyblue";

    block3 = createSprite(510,550,180,20);
    block3.shapeColor = "gold";

    block4 = createSprite(710,550,180,20);
    block4.shapeColor = "pink";

    



    //create box sprite and give velocity

    box = createSprite(random(20,800),100,30,30);
    box.velocityX = 3;
    box.velocityY = 6;
    box.shapeColor = "white";
    
    

}

function draw() {
    background(rgb(169,169,169));
    
    edges = createEdgeSprites();
    box.bounceOff(edges)
  
    
  
   
  


    //add condition to check if box touching surface and make it box
    if(box.isTouching(block1) && box.bounceOff(block1)){
 
        box.shapeColor = "red";
        music.play();

    }
  
    if(box.isTouching(block2)&& box.bounceOff(block2)){
 
        box.shapeColor = "skyblue";
       

    }

    if(box.isTouching(block3)&& box.bounceOff(block3)){
 
        box.shapeColor = "gold";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
       
    }

    if(box.isTouching(block4)&& box.bounceOff(block4)){
 
        box.shapeColor = "pink";
        

    }
    drawSprites();
}
