var last_position_x , last_position_y;
color="green";
width="3";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var width= screen.width;
new_width=screen.width-70;
new_height=screen.height-300;


 


 if(width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
    }

 canvas.addEventListener("touchstart",my_touchstart);
  function my_touchstart(e){
      console.log("my_touchstart");
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    last_position_x=e.touches[0].clientX-canvasoffsetLeft;
    last_position_y=e.touches[0].clientY-canvasoffsetTop;
  }
  


 canvas.addEventListener("touchmove",my_touchmove);
 function my_touchmove(e){
     current_position_of_touch_x= e.touches[0].clientX-canvasoffsetLeft;
     current_position_of_touch_y= e.touches[0].clientY-canvasoffsetTop;
      
         ctx.beginPath();
         ctx.strokeStyle=color;
         ctx.lineWidth=width;
         ctx.moveTo(last_position_x,last_position_y);
         ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
         ctx.stroke();
         
     
     last_position_x=current_position_of_touch_x;
     last_position_y=current_position_of_touch_y;
 }
