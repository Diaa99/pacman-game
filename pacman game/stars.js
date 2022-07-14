class stars{
  constructor(x,y,s,w)
  {
    this.posx=x;
    this.eski_pos=x;
    this.posy=y;
    this.w=w;
    this.s = s;
    
  }
    draw()
  {
    scale(this.s);
    image(star,this.posx,this.posy, this.w, this.w);
    if(this.s<1)this.s+=0.01;
    
  }
  moving()
  {
 
    
    this.posy+=0.1;
      
    if(this.posx<=-this.eski_pos)
      {
        this.posx=width+random(100,400);
      }
  }
}