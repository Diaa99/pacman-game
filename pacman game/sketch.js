
function setup() {
  createCanvas(500, 800);
  roc=new roket();
  btn = new play_btn();
  angleMode(DEGREES);
  //song = loadSound('sound/rocket.mp3');
  
  
  for(let i =0;i<50;i++)
    {
      stars_[i]=new stars(random(10,width-10),random(10,200),random(0.001,1),random(1,35));
    }  
  game = new map_();
}

function draw() {
  background(bg);
  if(ch){
  roc.move();
  roc.fire();    
  roc.draw();
  roc.ground();
  //song.play();
  roc.rocket_handler_1();
  roc.rocket_handler_2();
  if(star_show){
    for(let i=0;i<50;i++)
    {
  stars_[i].draw();
  stars_[i].moving();
    }
  }
  
  }
  if(!ch)
    {
      //song.stop();
      btn.btn_randare();
      btn.info();
      if(draw_map)
        {
          
          game.draw_map();
          draw_map=false;
          start_game=true;
          
        }
      if(start_game)
        {
        
        game.show_();
      game.eat_doge();
        }
    }
  
}


