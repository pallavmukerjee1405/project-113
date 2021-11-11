function preload(){
}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
    
    
}

function draw(){
    image(video,0,0,640,480);
    fill(528,0,0);
    stroke(528,0,0);
    circle(30,30,70);

    
    fill(0,528,0);
    stroke(0,528,0);
    rect(62,20,550,15);

    fill(528,0,0);
    stroke(528,0,0);
    circle(610,30,70);

    fill(0,528,0);
    stroke(0,528,0);
    rect(45,440,550,15);

    fill(528,0,0);
    stroke(528,0,0);
    circle(610,440,70);

    fill(528,0,0);
    stroke(528,0,0);
    circle(30,440,70);
}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint(){
    tint_color=document.getElementById("color_name").value;
}

