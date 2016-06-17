/*
	Creative Coding
	Isidore Newman Summer Camp 2016

	Create your own useless website. 
	Inspired by: http://www.theuselessweb.com/
*/

var song;
var gif;
var uni;
var uni2;
var uni3;
var rainbowIndex = 0;

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
function setup() {
	createCanvas(windowWidth, windowHeight);
	imageMode(CENTER);
	uni = new Sprite("pics/uni.png");
	uni2 = new Sprite("pics/uni.png", 100, 100);
	uni3 = new Sprite("pics/uni.png", 70, 70);
	song = loadSound('sounds/fluffyunicorn.wav');
	gif = loadGif('pics/unigif.gif');
}

function draw() {
	// background(255,0,0);
	rainbowBackground(50);
	uni.goToMouse();
	uni2.bounce(10);
	uni3.bounce(15);
	image(gif, 300, 200,300,300);
	textSize(100);
	text("rainbow unicorns!", 400, 500);
	
}

function mousePressed() {
  if (song.isPlaying()) { 
    song.stop();
  } 
  else {
    song.play();
  }
}


//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////



// credit: Adafruit
function Wheel(WheelPos) {
  WheelPos = 255 - WheelPos;
  if(WheelPos < 85) {
  	return color(255 - WheelPos * 3, 0, WheelPos * 3);
  } 
  else if(WheelPos < 170) {
  	WheelPos -= 85;
  	return color(0, WheelPos * 3, 255 - WheelPos * 3);
  } 
  else {
  	WheelPos -= 170;
  	return color(WheelPos * 3, 255 - WheelPos * 3, 0);
  }
}

function rainbowBackground(speed) {
	rainbowIndex+= speed;
	if(rainbowIndex > 100 * 256) rainbowIndex = 0;
	background(Wheel(parseInt(rainbowIndex/100)));
}


function Sprite(name, width, height) {
	this.imgX =10, this.imgY = 10, this.imgXDir = 1, this.imgYDir = 1, this.imgAng = Math.PI, this.rotation = 0;
	this.width = width, this.height = height;
	this.img = image;
	this.img = loadImage(name);

	this.spin = function(speed) {
		
		
	}

	this.goToMouse = function() {
		image(this.img, mouseX, mouseY, this.width, this.height);
	}

	this.bounce = function(speed) {
		if (this.imgX > windowWidth) {
			this.imgAng = Math.PI/2 * Math.random() + Math.PI/4;
			this.imgXDir = -1;
			this.imgX = windowWidth - 1;
		}
		else if (this.imgX < 0) {
			this.imgAng = Math.PI/2 * Math.random() + Math.PI/4;
			this.imgXDir = 1;
			this.imgX = 1;
		}
		else if (this.imgY < 0) {
			this.imgAng = Math.PI/2 * Math.random() + Math.PI/4;
			this.imgYDir = 1;
			this.imgY = 1;
		}
		else if(this.imgY > windowHeight) {
			this.imgAng = Math.PI/2 * Math.random() + Math.PI/4;
			this.imgYDir = -1;
		}
		this.imgX+=speed * this.imgXDir * cos(this.imgAng);
		this.imgY+=speed * this.imgYDir * sin(this.imgAng);
		image(this.img, this.imgX, this.imgY, this.width, this.height);
	}
}
	
