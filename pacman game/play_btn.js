let button;
let create_btn=true;
let draw_map=false;
let info_show = true;
class play_btn
{
  constructor()
  {
    this.w = 400;
    this.y=35;
    this.posx = 1000-this.w-this.w/2;
    this.posy = 640/2+this.y;
    
  }
  
  btn_randare()
  {
    if(create_btn)
      {
        this.btn_create();
       create_btn=false; 
      }

    button.style("border","1px solid #292929");
    
  }
  info()
  {
    if(info_show)
    image(aciklama,1000-384-384/1.3,640-150,348,122);
  }
  btn_create()
  {
    button = createButton("Play!");
    button.position(this.posx,this.posy);
    button.mousePressed(go_to_play);
    button.style("color","#292929");
    button.style("width","200px");
    button.style("height","35px");
    button.style("border-radius","8px");
    button.style("positon","absolute");
    button.style("background","transparent");
  }
}
function go_to_play()
{
  console.log("play");
    button.style("display","none");
    info_show=false;
  draw_map=true;
  
}