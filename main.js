var canvas = new fabric.Canvas ('myCanvas')
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;
var player_object = "";

function player_update(){

    fabric.Image.fromURL("player.png",function(Img) {

        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({

            top:player_y,
            left:player_x

        });
        canvas.add(player_object);

    });

}

function new_image(get_image){

    fabric.Image.fromURL(get_image, function(Img) {

        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({

            top:player_y,
            left:player_x

        });
        canvas.add(block_image_object);
    
    });

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){

    keyPressed = e.keyCode;

    console.log(keyPressed);

    //shift+m
    if(e.shiftKey ==true && keyPressed == '77')
    {

        console.log("m and shift is pressed");
        block_image_height = block_image_height - 10;
        block_image_width = block_image_width - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML= block_image_height;


    }

        //shift+p
        if(e.shiftKey ==true && keyPressed == '80')
        {
    
            console.log("p and shift is pressed");
            block_image_height = block_image_height + 10;
            block_image_width = block_image_width + 10;
            document.getElementById("current_width").innerHTML = block_image_width;
            document.getElementById("current_height").innerHTML= block_image_height;
    
    
        }

        //w pressed
        if(keyPressed == '87')
        {
            new_image('wall.jpg');//calling of the function new_image
            console.log("w");
        }

        //d pressed
        if(keyPressed == '68')
        {
            new_image('dark_green.png');
            console.log("d");
        }
        //l pressed
        if(keyPressed == '76')
         {
            new_image('light_green.png');
            console.log("l");
        }
        //g pressed
        if(keyPressed == '71')
         {
            new_image('ground.png');
            console.log("g");
        }
        //t pressed
        if(keyPressed == '84')
         {
            new_image('trunk.jpg');
            console.log("t");
        }
        //y pressed
        if(keyPressed == '89')
         {
            new_image('yellow_wall.png');
            console.log("y");
        }
        //r pressed
        if(keyPressed == '82')
         {
            new_image('roof.jpg');
            console.log("r");
        }
        //c pressed
        if(keyPressed == '67')
         {
            new_image('cloud.jpg');
            console.log("c");
        }
        //u pressed
        if(keyPressed == '85')
         {
            new_image('unique.png');
            console.log("u");
        }

        //left = 37,up = 38 , right = 39 , down = 40
        
        if(keyPressed == '37'){

            left();
            console.log("left");

        }

        if(keyPressed == '38'){

            up();
            console.log("up");

        }

        if(keyPressed == '39'){

            right();
            console.log("right");

        }

        if(keyPressed == '40'){

            down();
            console.log("down");

        }


}

function up(){

}

function down(){
    
}

function left(){
    
}

function right(){
    
}