const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var canvas, backgroundImg;
var engine,world;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var form2;
var sprite;
var plrs, plr1, plr2;

function preload(){
  backgroundImg = loadImage("images/background.jpg");
  boardImg = loadImage("images/board.png");
  logoImg = loadImage("images/logo.png");
  dice1 = loadImage("images/dice1.jpg");
  dice2 = loadImage("images/dice2.jpg");
  dice3 = loadImage("images/dice3.jpg");
  dice4 = loadImage("images/dice4.jpg");
  dice5 = loadImage("images/dice5.jpg");
  dice6 = loadImage("images/dice6.jpg");
  plr1_img = loadImage("images/player1.png");
  plr2_img = loadImage("images/player2.png");
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  engine = Engine.create();
  world = engine.world;
  
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(backgroundImg);
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();

    var board = createSprite(displayWidth/2-10,displayHeight/2-60,1,1);
    board.addImage(boardImg);
    board.scale=0.7;

    var logo = createSprite(displayWidth/2-10,displayHeight/2-60,1,1);
    logo.addImage(logoImg);
    logo.scale=0.5;

    var plr1 = createSprite(displayWidth/2-380,displayHeight/2-300,1,1);
    plr1.addImage(plr1_img);
    plr1.scale=0.04;

    var plr2 = createSprite(displayWidth/2-450,displayHeight/2-300,1,1);
    plr2.addImage(plr2_img);
    plr2.scale=0.2;

    plrs=[plr1,plr2];

    form2 = new Form2();
    form2.display();
    money = new Money();
    money.display();

    //dicePlayer1 = new Dice();
    //dicePlayer1.display();

    //player1dice
       var player1dice = createSprite(displayWidth/2+420,displayHeight/2-50,50,50);
       player1dice.addImage(dice1)
       if (mousePressedOver(player1dice)) {
         var rand = Math.round(random(1,6));
       switch(rand) {
         case 1: player1dice.addImage(dice1);
                 break;
         case 2: player1dice.addImage(dice2);
                 break;
         case 3: player1dice.addImage(dice3);
                 break;
         case 4: player1dice.addImage(dice4);
                 break;
         case 5: player1dice.addImage(dice5);
                 break;
         case 6: player1dice.addImage(dice6);
                 break;
         default: break;
       }
       }
       player1dice.scale=1;

    //player2dice
    var player2dice = createSprite(displayWidth/2-440,displayHeight/2-50,50,50);
    player2dice.addImage(dice1);
    if (mousePressedOver(player2dice)) {
      var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: player2dice.addImage(dice1);
              break;
      case 2: player2dice.addImage(dice2);
              break;
      case 3: player2dice.addImage(dice3);
              break;
      case 4: player2dice.addImage(dice4);
              break;
      case 5: player2dice.addImage(dice5);
              break;
      case 6: player2dice.addImage(dice6);
              break;
      default: break;
    }
    }
    player2dice.scale=1;

    Engine.update(engine);
    drawSprites()
    
  var sprite1 = new sprites(displayWidth/2-250,displayHeight/2-300,100,100);
  sprite1.shapeColor="black"
  sprite1.display();
  textSize(40);
  fill("lightyellow");
  text("start",displayWidth/2-290,displayHeight/2-290);

  sprite2 = new sprites(displayWidth/2-130,displayHeight/2-300,100,100);
  sprite2.shapeColor="black"
  sprite2.display();
  textSize(20);
  fill("lightyellow");
  text("Rs. 8000",displayWidth/2-170,displayHeight/2-280);
  text("MUMBAI",displayWidth/2-170,displayHeight/2-310);

  sprite3 = new sprites(displayWidth/2-10,displayHeight/2-300,100,100);
  sprite3.shapeColor="black"
  sprite3.display();
  textSize(20);
  fill("lightyellow");
  text("Rs. 2000",displayWidth/2-50,displayHeight/2-280);
  text("SHIMLA",displayWidth/2-50,displayHeight/2-310);

  sprite4 = new sprites(displayWidth/2+110,displayHeight/2-300,100,100);
  sprite4.shapeColor="black"
  sprite4.display();
  textSize(20);
  fill("lightyellow");
  text("Rs. 5000",displayWidth/2+70,displayHeight/2-280);
  text("KOLKATA",displayWidth/2+70,displayHeight/2-310);

  sprite5 = new sprites(displayWidth/2+230,displayHeight/2-300,100,100);
  sprite5.shapeColor="black"
  sprite5.display();
  textSize(15);
  fill("lightyellow");
  text("pay Rs.500",displayWidth/2+190,displayHeight/2-280);
  textSize(20)
  text("JAIL",displayWidth/2+210,displayHeight/2-310);

  sprite6 = new sprites(displayWidth/2+230,displayHeight/2-180,100,100);
  sprite6.shapeColor="black"
  sprite6.display();
  textSize(20);
  fill("lightyellow");
  text("Rs. 6000",displayWidth/2+200,displayHeight/2-160);
  text("DELHI",displayWidth/2+200,displayHeight/2-190);

  sprite7 = new sprites(displayWidth/2+230,displayHeight/2-60,100,100);
  sprite7.shapeColor="black"
  sprite7.display();
  textSize(20);
  fill("lightyellow");
  text("Rs. 1500",displayWidth/2+200,displayHeight/2-40);
  text("AGRA",displayWidth/2+200,displayHeight/2-70);

  sprite8 = new sprites(displayWidth/2+230,displayHeight/2+60,100,100);
  sprite8.shapeColor="black"
  sprite8.display();
  textSize(20);
  fill("lightyellow");
  text("Rs. 2000",displayWidth/2+200,displayHeight/2+80);
  text("GOA",displayWidth/2+200,displayHeight/2+50);

  sprite9 = new sprites(displayWidth/2+230,displayHeight/2+180,100,100);
  sprite9.shapeColor="black"
  sprite9.display();
  textSize(17);
  fill("lightyellow");
  text("get Rs.500",displayWidth/2+185,displayHeight/2+200);
  text("LOTTERY",displayWidth/2+190,displayHeight/2+170);

  sprite10 = new sprites(displayWidth/2+110,displayHeight/2+180,100,100);
  sprite10.shapeColor="black"
  sprite10.display();
  textSize(20);
  fill("lightyellow");
  text("Rs. 1000",displayWidth/2+80,displayHeight/2+200);
  text("PATNA",displayWidth/2+80,displayHeight/2+170);

  sprite11 = new sprites(displayWidth/2-10,displayHeight/2+180,100,100);
  sprite11.shapeColor="black"
  sprite11.display();
  textSize(20);
  fill("lightyellow");
  text("Rs. 2500",displayWidth/2-50,displayHeight/2+200);
  text("INDORE",displayWidth/2-50,displayHeight/2+170);

  sprite12 = new sprites(displayWidth/2-130,displayHeight/2+180,100,100);
  sprite12.shapeColor="black"
  sprite12.display();
  textSize(20);
  fill("lightyellow");
  text("Rs. 3000",displayWidth/2-170,displayHeight/2+200);
  text("JAIPUR",displayWidth/2-170,displayHeight/2+170);

  sprite13 = new sprites(displayWidth/2-250,displayHeight/2+180,100,100);
  sprite13.shapeColor="black"
  sprite13.display();
  textSize(18);
  fill("lightyellow");
  text("pay Rs.100",displayWidth/2-295,displayHeight/2+200);
  text("Income tax",displayWidth/2-295,displayHeight/2+170);

  sprite14 = new sprites(displayWidth/2-250,displayHeight/2+60,100,100);
  sprite14.shapeColor="black"
  sprite14.display();
  textSize(20);
  fill("lightyellow");
  text("Rs. 4000",displayWidth/2-290,displayHeight/2+80);
  text("CHENNAI",displayWidth/2-295,displayHeight/2+50);

  sprite15 = new sprites(displayWidth/2-250,displayHeight/2-60,100,100);
  sprite15.shapeColor="black"
  sprite15.display();
  textSize(20);
  fill("lightyellow");
  text("Rs. 2000",displayWidth/2-290,displayHeight/2-40);
  text("COCHIN",displayWidth/2-290,displayHeight/2-70);

  sprite16 = new sprites(displayWidth/2-250,displayHeight/2-180,100,100);
  sprite16.shapeColor="black"
  sprite16.display();
  textSize(20);
  fill("lightyellow");
  text("Rs. 3000",displayWidth/2-290,displayHeight/2-160);
  text("KANPUR",displayWidth/2-290,displayHeight/2-190);

  sprite=[sprite1,sprite2,sprite3,sprite4,sprite5,sprite6,sprite7,sprite8,sprite9,sprite10,
        sprite11,sprite12,sprite13,sprite14,sprite15,sprite16];

  }
  
}