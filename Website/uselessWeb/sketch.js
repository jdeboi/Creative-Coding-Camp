/*
	Creative Coding
	Isidore Newman Summer Camp 2016

	Create your own useless website. 
	Inspired by: http://www.theuselessweb.com/
*/

var img;

function setup() {
	createCanvas(windowWidth,windowHeight);
	// put color here: red, green, blue
	background(100,0,0);
	img = loadImage("pics/uni.png");
}

function draw() {
  image(img, 0, 0);
}