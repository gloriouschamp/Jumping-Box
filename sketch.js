var canvas;
var music;
var bB;
var gB;
var oB;
var rB;
var ball;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(400,400);

    //create 4 different surfaces
bB = createSprite(35, 390, 100, 30);
bB.shapeColor = "blue";
oB = createSprite(140, 390, 100, 30);
oB.shapeColor = "orange";
rB = createSprite(245, 390, 100, 30);
rB.shapeColor = "red";
gB = createSprite(350, 390, 100, 30);
gB.shapeColor = "green";
ball = createSprite(200, 80, 30, 30);
ball.shapeColor = "white";
ball.velocityY = 3;
ball.velocityX = 4;

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   edges = createEdgeSprites();

    if(bB.isTouching(ball) && ball.bounceOff(bB)){
        ball.shapeColor = "blue";
    }

    if(oB.isTouching(ball) && ball.bounceOff(oB)){
        ball.shapeColor = "orange";
    }

   if(rB.isTouching(ball) && ball.bounceOff(rB)){
        ball.shapeColor = "red";
    }

    if(gB.isTouching(ball) && ball.bounceOff(gB)){
        ball.shapeColor = "green";
    }
    ball.bounceOff(edges);
    ball.bounceOff(bB);
    ball.bounceOff(oB);
    ball.bounceOff(rB);
    ball.bounceOff(gB);


drawSprites();
    //add condition to check if box touching surface and make it box
}
