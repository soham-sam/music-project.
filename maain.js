song="";

function preload()

{
    song =loadSound("money heist.mp3");
    song2 =loadSound("stranger things ring.mp3");

}
function setup() {
canvas=createCanvas(600,500);
canvas.center();

video=createCapture(VIDEO);
video.hide()
}

function draw ()
{
Image(video,0,0,600,500);
}

function play()
{
song.play();
} 