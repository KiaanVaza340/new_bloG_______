peter_pan_song = "";
Harry_potter_Theme_song = "";

function setup(){
canvas = createCanvas(600,530);
canvas.center();

video = createCapture(VIDEO);
video.hide();
}

function draw(){
image(video,0,0,600,530);
}

function preload(){
peter_pan_song = loadSound("https://www.youtube.com/watch?v=JmU0b8bxlG8");
Harry_potter_Theme_song = loadSound("https://www.youtube.com/watch?v=Htaj3o3JD8I");
}