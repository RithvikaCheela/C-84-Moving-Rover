 canvas=document.getElementById("myCanvas");
 ctx=canvas.getContext("2d");

 rover_width=100;
 rover_height=90;
 rover_x=10;
 rover_y=10;

 background_image="mars.jpg";
 rover_image="rover.png";

 function add(){
     bg_imgTag=new Image();
     bg_imgTag.onload=uploadBackground;
     bg_imgTag.src=background_image;

     rover_imgTag=new Image();
     rover_imgTag.onload=uploadRover;
     rover_imgTag.src=rover_image;
 }

 function uploadBackground(){
     ctx.drawImage(bg_imgTag, 0 , 0,canvas.width,canvas.height);
    
 }
  function uploadRover(){
      ctx.drawImage(rover_imgTag, rover_x,rover_y,rover_width,rover_height);
  }
   
window.addEventListener("keydown", my_key_down);

function my_key_down(e){
    keyPressed=e.keyCode;

    if(keyPressed == '37'){

        //left();
        console.log("left Key Pressed");

    }
    if(keyPressed == '38'){
        //up();
        console.log("Up Key Pressed");
        
    }
    if(keyPressed == '39'){
        //right();
        console.log("Right Key Pressed");
        
    }
    if(keyPressed == '40'){
        //Down();
        console.log("Down Key Pressed");
        
    }
}
