var mrect
var frect
function setup() {
  createCanvas(800,400);
  
  frect = createSprite(400, 200, 80, 50);
   frect.shapeColor="green";
    frect.debug=true;
     mrect = createSprite(200,200,50,30);
      mrect.shapeColor="green";
       mrect.debug=true;

}

function draw() {
  background("cyan");
   frect.x=World.mouseX;
    frect.y=World.mouseY;
    if(mrect.x - frect.x <mrect.width/2+frect.width/2 &&
       frect.x - mrect.x <mrect.width/2+frect.width/2 &&
       frect.y - mrect.y <mrect.height/2+frect.height/2 &&
       mrect.y - frect.y <mrect.height/2+frect.height/2){ 
       frect.shapeColor="red";
       mrect.shapeColor="red";  
       }
    else{
    frect.shapeColor="green";
    mrect.shapeColor="green";
    }

      
      


    drawSprites();
}


