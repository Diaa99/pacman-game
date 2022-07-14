let roc;
let bg;
let btn;
let song;
let game;
let stars_=[];
let start_game= false;

var blockImg;
var doge;

var elonImg;
var elon = {instance: null, frame: 0, direction: 0};
var blocks = [];
var doges = [];
var shibas = [];
var activeshibas = [];
var maze;
var standarSize = 40;
var enemyImg;


function preload()
{
  bg = loadImage("images/Rectangle 32.png");
  bg2 = loadImage("images/Rectangle 33.png");
  bg3 = loadImage("images/Rectangle 30.png");
  bg4 = loadImage("images/Group 160.png");
  rocket_img = loadImage("images/rocket.svg");
  rocket_img = loadImage("images/rocket.svg");
  rocket_handler_img=loadImage("images/rocket_handler.svg");
  star = loadImage("images/star.png");
  blockImg = loadImage('images/Group 162 (1).png');
  doge = loadImage('images/dogecoin-doge-logo (4).png');
  elonImg = loadImage('images/Group 161.png');
  shiba = loadImage('images/enemy.png');
  aciklama = loadImage("images/Group 273.png");

  

}