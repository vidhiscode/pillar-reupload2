var bkg1;
var pillar, pillar1, pillar2, pillar3, pillar4, pillar5, pillar6, pillarImg;
var gem, gemImg;
var dora, doraImg;


function preload() {
bkg1 = loadImage("cave.jpg");
pillarImg = loadImage("pillar.png");
gemImg = loadImage("gem1.png");
doraImg = loadImage("dora.png");
}

function setup() {
    createCanvas(1200,600);
   

   pillar1 = createSprite(200,600,50,50);
   pillar1.addImage("pillar",pillarImg);
   pillar1.scale = 0.5;

   pillar2 = createSprite(400,500,50,50);
   pillar2.addImage("pillar2",pillarImg);
   pillar2.scale = 0.5;

   pillar3 = createSprite(600,700,50,50);
   pillar3.addImage("pillar3",pillarImg);
   pillar3.scale = 0.5;

   pillar4 = createSprite(800,600,50,50);
   pillar4.addImage("pillar4",pillarImg);
   pillar4.scale = 0.5;

   pillar5 = createSprite(1000,700,50,50);
   pillar5.addImage("pillar5",pillarImg);
   pillar5.scale = 0.5;

   gemSprite = createSprite(1000,473,50,50);
   gemSprite.addImage(gemImg);
   gemSprite.scale = 0.1;

   dora = createSprite(200,345,50,50);
   dora.addImage(doraImg);
   dora.scale = 0.2;
}

  
function draw() {
background(bkg1);
drawSprites();


//arrow keys control dora
if(keyDown("up")){
dora.velocityY = -3;
}

dora.velocityY = dora.velocityY + 0.1;

fill("white");
text(mouseX + "," + mouseY, mouseX, mouseY);
}