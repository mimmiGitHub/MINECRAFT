var canvas=new fabric.Canvas('my_canvas');

var player_object="";
var block_object="";
block_width=30;
block_height=30;
player_x=10;
player_y=10;
function player_update()
{
    fabric.Image.fromURL("player.png",function(Img)
    {
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
    left:player_x,top:player_y
});
canvas.add(player_object)
    });
}
    
    function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img)
    {
block_object=Img;
block_object.scaleToWidth(block_width);
block_object.scaleToHeight(block_height);
block_object.set({
    left:player_x,top:player_y});
    canvas.add(block_object)
});
}

window.addEventListener("keydown" ,my_keydown);
function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='80' && e.shiftKey==true){
        console.log("Shift and P key is pressed");
        block_width=block_width+10;
        block_height=block_height+10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if(keyPressed=='77' && e.shiftKey==true){
        console.log("Shift and M key is pressed");
        block_width=block_width-10;
        block_height=block_height-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if(keyPressed=='38'){
        console.log("UP");
        up();
    }
    if(keyPressed=='40'){
        console.log("DOWN");
       down();
    }
    if(keyPressed=='37'){
        console.log("LEFT");
        left();
    }
    if(keyPressed=='39'){
        console.log("RIGHT");
        right();
    }
    if(keyPressed=='68'){
        console.log("d");
      new_image('dark_green.png')
    }
    if(keyPressed=='71'){
        console.log("g");
      new_image('ground.png')
    }
    if(keyPressed=='76'){
        console.log("l");
      new_image('light_green.png')
    }
    if(keyPressed=='87'){
        console.log("w");
      new_image('wall.jpg')
    }
    if(keyPressed=='67'){
        console.log("c");
      new_image('cloud.jpg')
    }
    if(keyPressed=='89'){
        console.log("y");
      new_image('yellow_wall.png')
    }
    if(keyPressed=='85'){
        console.log("u");
      new_image('unique.png')
    }
    if(keyPressed=='84'){
        console.log("t");
      new_image('trunk.jpg')
    }
    if(keyPressed=='82'){
        console.log("r");
      new_image('roof.jpg')
    }

}
function up(){
    if(player_y>=0){
        player_y=player_y - block_height;
        console.log("When up arrow key is pressed X = "+player_x+"Y = "+player_y);
        console.log("The height of the block is "+block_height);
        canvas.remove(player_object);
        player_update();
    }
    
}
function down(){
    if(player_y<=500){
        player_y=player_y + block_height;
        console.log("When down arrow key is pressed X = "+player_x+"Y = "+player_y);
        console.log("The height of the block is "+block_height);
        canvas.remove(player_object);
        player_update();
    }
    
}
function left(){
    if(player_x>=0){
        player_x=player_x - block_width;
        console.log("When left arrow key is pressed X = "+player_x+"Y = "+player_y);
        console.log("The width of the block is "+block_width);
        canvas.remove(player_object);
        player_update();
    }
    
}
function right(){
    if(player_x<=900){
        player_x=player_x + block_width;
        console.log("When right arrow key is pressed X = "+player_x+"Y = "+player_y);
        console.log("The width of the block is "+block_width);
        canvas.remove(player_object);
        player_update();
    }
    
}



    

