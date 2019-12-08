var Time = []
var msBetweenFrames = 1000/240;
Time.deltaTime = msBetweenFrames / 1000;

var canvas = document.getElementById("canv");
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

var width = canvas.width;
var height = canvas.height;

var ctx = canvas.getContext("2d");

function main() {
    console.log('Timer Called')
    setInterval(timer, msBetweenFrames);
}