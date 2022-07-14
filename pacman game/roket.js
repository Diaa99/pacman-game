let ch = true,r,ratio,w=0.1,r_=1,star_show=false;
	let landingRatio;

class roket
{
  constructor()
  {
    this.w=31;
    this.h = 273;
    this.w_h = 26;
    this.h_h= 190;
    this.posx=width/2-this.w/2;
    this.posy = height-this.h-50;
    this.posx_h_1 =width/2-this.w_h-this.w/2;
    this.posy_h=height-this.h_h-50;
    this.bgchange= 0;
    this.posx_h_2 =width/2+this.w_h-this.w/2+3;
    this.starW = 29;


    
  }
  
  star(x,y)
  {
    image(star,x,y,this.starW,this.starW);
  }
  
  draw()
  {

    push();
    image(rocket_img,this.posx,this.posy,this.w,this.h);
    pop();
    this.rocket_fire(this.posx,this.posy+this.h,this.w);

  }
  
  star_draw()
  {
    for(let i=0;i<=9;i++)
      {
        this.star(random(10,width-10),random(20,60));
      }
  }
  move()
  {
    if(this.posy>height/2-this.h/2)
      {
        this.posy--;
        this.posy_h--;
      }
    else{
       this.bgchange++;
      if(this.bgchange<300 && this.bgchange>100){
          star_show = true;
          background(bg2);
       

      }
      else if(this.bgchange<1200 &&this.bgchange>300){
          background(bg3);
          this.bgchange+=1.2;
          this.posy_h+=1.2;
          this.posx_h_1 -=.5;
          this.posx_h_2 +=.5;
        
        
        
        
        
          
          
        
      }
      else if(this.bgchange>1200){
          background(bg4);
          this.bgchange++;
          this.posy--;
        
          if(this.bgchange>1600)
          {
            windowResized();
            ch = false;
          }
      }
      
    }
    
  }

  
  rocket_handler_1()
  {
    image(rocket_handler_img,this.posx_h_1,this.posy_h, this.w_h, this.h_h);
    if(this.bgchange<300)
      this.rocket_fire(this.posx_h_1+2,this.posy_h+this.h_h,this.w_h);
    
    
  }
  
    rocket_handler_2()
  {
    image(rocket_handler_img,this.posx_h_2,this.posy_h, this.w_h, this.h_h);
    if(this.bgchange<300)
      this.rocket_fire(this.posx_h_2+2,this.posy_h+this.h_h,this.w_h);
    
  }
  fire()
{
  if(this.bgchange<50)
    {
  landingRatio = map(.1,0,0.5,1,0,true);
  	let fireRatio = map(landingRatio,0,1,1.2,0,true)
	if (landingRatio<0.3){
		fireRatio +=map(landingRatio,0,0.1,-1.2,0,true)
	}
  	push()
		drawingContext.shadowColor = color(255,0)
		drawingContext.shadowOffsetX = 0
		drawingContext.shadowOffsetY = 0
		drawingContext.shadowBlur = 20
	
		translate(width/2,-50)
		colorMode(HSB)
		noStroke()
		translate(0,height)
		
		for(var o=-width/2+50;o<width/2-50;o+=15){
			let r= noise(o,frameCount/5)*5000*fireRatio
			let ratio = 2/(log(abs(o)+10)+2+sqrt(abs(o)+1)*2)
			r=r*ratio
			// fill(255,30)
			fill(noise(o/100,frameCount/10)*70,80,100,0.5)
			
			drawingContext.shadowColor = color(noise(o/100,frameCount/10)*70,80,100,0.5)
			ellipse(o,0,min(r,200))
		}
	pop();
    }
    
}
  ground()
  {
    if(this.bgchange<50)
    {
    push();
    	fill("#8F703D");
		rect(0,height-50,width,50)
    pop();
    }
  }
  
  rocket_fire(x,y,w)
  {
    
      push();
      noStroke();
	  translate(x+8,y);
    
		for(var o=-10;o<10;o++)
        {
			fill(20*noise(i,o)+235,noise(o,i)*20+240)
			let r =noise(o,i,frameCount/1000)*100+20
			ellipse(o*20,80*noise(i,o,frameCount/2000+5000),r)
		}
    
    colorMode(HSB)
	drawingContext.shadowBlur = 20
	for(var i=0;i<this.w;i+=5){
		fill(noise(i/10,frameCount/10)*80,80,100,0.9)
		drawingContext.shadowColor =                    color(noise(o/100,frameCount/10)*70,80,100,0.5)
      triangle(0,0,w-i-8,0,w/2-8,w);
      
			}
      
    
	pop()
    
  }
}

function windowResized()
{
  resizeCanvas(1000,640);
}

function yildiz(x,y,yaricap1,yaricap2,noktaadedi)
{
  let aci = TWO_PI/noktaadedi;
  let yarim_Aci=aci/2.0;
  beginShape();
  for(let a=0;a<TWO_PI;a+=aci)
    {
      let sx=x+cos(a)*yaricap2;
      let sy=y+sin(a)*yaricap2;
      vertex(sx,sy);
      sx=x+cos(a+yarim_Aci)*yaricap1;
      sy=y+sin(a+yarim_Aci)*yaricap1;
      vertex(sx,sy);
    }
  endShape(CLOSE);
  
}