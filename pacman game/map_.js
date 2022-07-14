
var p5 = new p5();
var level=[
      ['b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b'],
      ['D','D','E','D','D','D','D','D','D','D','D','D','D','b','D','D','D','D','D','D','D','D','D','D','b'],
      ['D','D','D','D','D','D','D','D','D',' ',' ','D',' ','b','D','D','D','D','D','D','D','D','D','D','b'],
      ['b','D','D','D','D','D','b','D','D',' ','D','D','D','D','D','D',' ',' ','b','D','D','D','D','D','b'],
      ['b','D','D','D','D','b','b','b','D','D','D','D','D','D','D','D','D','b',' ','b','D','D','D','D','b'],
      ['b','D','D','D','D','D','b','D','D','D','D','D','D','D','D','D','D',' ','b','D','D','D','D','D','b'],
      ['b','D',' ',' ',' ',' ',' ','D','D','D','D','D','b','b','b','b','b','D',' ','D','D','D','D','D','b'],
      ['b','D','b','b','b','b','b','D','D','D','D','D','D','D','D','D','D','D','D','b','b','b',' ','b','b'],
      ['b','D','D','D','D','b','D','b','b','b','D','b','b','b','b','D','D','D','D','D',' ','D','D','b','b'],
      ['b','D','D','D','D','b','D','b','D','b','D','b','b','b','b','D','D','D','D',' ','D',' ','D','b','b'],
      ['b','D','D','D','D','b','D','b','D','b','D','b','b','b','b','D','D','D','D','D','D','D','b','b','b'],
      ['b','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','','b','b','b'],
      ['b','D','D','D','D','b','D','b','D','b','D','b','b','b','b','D','D','D','D','D','','','b','e','b'],
      ['b','D','D','D','D','b','D','b','D','b','D','D','D','D','D','D','D','D','b','D','D','','b','e','b'],
      ['b','D','D','D','D','b','D','b','D','b','D','b','b','b','b','D','D','D','D','D','D','','b','e','b'],
      ['b','D','D','D','D','b','D','b','D','b','D','b','b','b','b','b','b','b','b','b','b','b','b','b','b']
    ];


class map_
{
  constructor(){
    this.rows = 16;
    this.cols = 25;
  }
  show_()
  {
    
  for(var i = 0; i < blocks.length; i++) {
    blocks[i].show();
  }
    
    for(var i = 0; i < activeshibas.length; i++) {
    
    frameRate(8);
    activeshibas[i].moveshiba(blocks);
    activeshibas[i].show();

    if(elon.instance.shibaPackmanColission(activeshibas[i])) {

        alert("*** GAME OVER ***");
        window.location.reload();
      
    }
  }
    
      for(var i = 0; i < shibas.length; i++) {
    shibas[i].show();
  }


  for(var i = 0; i < doges.length; i++) {
    doges[i].show();
  }

    elon.instance.showPac();
  }
  
  eat_doge()
  {
    for(var i = 0; i < doges.length; i++) 
    {
    if(elon.instance.eatPac(doges[i]))
    {
      doges.splice(i, 1);
    }
    
    if(doges.length <= 0) {
      alert("Congratulations you won!");
      window.location.reload();
    }
  }

  }
  draw_map()
  {
      for(var i = 0; i < this.rows; i++) {
    for(var j = 0; j < this.cols; j++) {
      if(level[i][j] === 'b') {
       append( blocks,new Element(j * standarSize,i * standarSize, blockImg, elon));
      }
      else if(level[i][j] === 'D') {
        doges.push(new Element(j * (standarSize + 1),i * (standarSize + 1), doge, elon));
      }

      else if(level[i][j] === 'E') {
        elon.instance = new Element(j * standarSize,i * standarSize, elonImg, elon);
      }
      else if(level[i][j] === 'e') {
        shibas.push(new Element(j * standarSize,i * standarSize,shiba , elon));
      }

    }
  }
    this.shibaOutInterval(1000);
  }
  
  shibaOutInterval(interval) {
  setInterval(function() {
    if(shibas.length > 0) {
      var eout = shibas.pop();
      
      eout.x-=80;
      activeshibas.push(eout);
    }
  }, interval);
}
  
    moveshiba(blocks) {
    if(this.shibaMovement === false) {
      var d = Math.floor((Math.random() * 4));
      this.direction = d;
    }
    var lastx = this.x;
    var lasty = this.y
    if (this.direction === 0) {
      this.x += standarSize;
    }
    else if (this.direction === 1) {
      this.y += standarSize;
    }
    else if (this.direction === 2) {
      this.x -= standarSize;
    }
    else if (this.direction === 3) {
      this.y -= standarSize;
    }
    for(var i = 0; i < blocks.length; i++) {
      if(this.shibaBlockColission(blocks[i])){
        this.x = lastx;
        this.y = lasty;
        this.shibaMovement = false;
        this.moveshiba(blocks); 
      } else {
        this.shibaMovement = true;
      }
    }
  }


  
  
}
function Element(x, y, image, character) {
  this.x = x;
  this.y = y;
  this.initx = this.x;
  this.inity = this.y;
  this.image = image;
  this.frame = character.frame
  this.direction = character.direction;
  this.pacRadius = 16;
  this.dogeRadius = 9;
  this.shibaRadius = 18;
  this.blockRadius = 6;
  this.shibaMovement = true;
  

  this.show = function() {
      p5.image(this.image, this.x, this.y);    
  }

  this.showPac = function() {
    p5.image(this.image.get(standarSize * this.frame,this.direction * standarSize,standarSize,standarSize), this.x, this.y);
    this.frame = this.frame === 1 ? 0 : this.frame;
  }

  this.movePac = function(d) {
    this.direction = d;
    if (this.direction === 0) {
      this.x += standarSize;
    }
    else if (this.direction === 1) {
      this.y += standarSize;
    }
    else if (this.direction === 2) {
      this.x -= standarSize;
    }
    else if (this.direction === 3) {
      this.y -= standarSize;
    }
  }

  this.moveshiba = function(blocks) {
    if(this.shibaMovement === false) {
      var d = Math.floor((Math.random() * 4));
      this.direction = d;
    }
    var lastx = this.x;
    var lasty = this.y
    if (this.direction === 0) {
      this.x += standarSize;
    }
    else if (this.direction === 1) {
      this.y += standarSize;
    }
    else if (this.direction === 2) {
      this.x -= standarSize;
    }
    else if (this.direction === 3) {
      this.y -= standarSize;
    }
    for(var i = 0; i < blocks.length; i++) {
      if(this.shibaBlockColission(blocks[i])){
        this.x = lastx;
        this.y = lasty;
        this.shibaMovement = false;
        this.moveshiba(blocks); 
      } else {
        this.shibaMovement = true;
      }
    }
  }

  this.shibaBlockColission = function(b) {
    var dis = dist(this.x, this.y, b.x, b.y);
    if((dis) < (this.shibaRadius + b.blockRadius) || (this.x + (this.shibaRadius * 2)) > (this.cols * (this.shibaRadius * 2)) || (this.x - (this.shibaRadius * 2)) < 0 || (this.y + (this.shibaRadius * 2)) > (this.rows * (this.shibaRadius * 2)) || (this.y - (this.shibaRadius * 2)) < 0) {
      return true;
    } else {
      return false;
    }
  }

  this.shibaPackmanColission = function(e) {
    var dis = dist(this.x, this.y, e.x, e.y);
    if((dis) < (this.pacRadius + e.shibaRadius)) {
      return true;
    } else {
      return false;
    }
  }



  this.eatPac = function (f) {
    var dis = dist(this.x, this.y, f.x, f.y);
    if(dis < this.pacRadius + f.dogeRadius) {
      document.getElementById("score").innerHTML = parseInt(document.getElementById("score").innerHTML) + 10;
      return true;
    } else {
      return false;
    }
  }


}

function keyPressed() {
  if(keyCode === RIGHT_ARROW) {
    
    if(level[elon.instance.y/standarSize][elon.instance.x/standarSize + 1] !== 'b' && elon.instance.x <1000) {
      console.log(elon.instance.x);
      elon.instance.movePac(0);
    }
  }
  else if(keyCode === DOWN_ARROW) {
    if(level[elon.instance.y/standarSize + 1][elon.instance.x/standarSize] !== 'b' && 
      elon.instance.y <640) {
      elon.instance.movePac(1);
    }
  }
  else if(keyCode === LEFT_ARROW) {
    if(level[elon.instance.y/standarSize][elon.instance.x/standarSize - 1] !== 'b' && elon.instance.x >0) {
      elon.instance.movePac(2);
    }
  }
  else if(keyCode === UP_ARROW) {
    if(level[elon.instance.y/standarSize - 1][elon.instance.x/standarSize] !== 'b' && elon.instance.y >0) {
      elon.instance.movePac(3);
    }
  }
}

function shape_()
{
  angleMode(DEGREES)
  rect(-20,-20,40,40);
  rotate(45);
  rect(-20,-20,40,40);
  
}