// Variable declaration
var canvasHeightPos = 0;
var canvas = new spaceShooter.canvas();
var ctx = canvas.ctx;
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var background = new Image();
background.src = starfieldBackgroundImagePng;

// Insertion of background and also moving on canvas with recursive function animate
spaceShooter.starfieldBackground = function (speed) {
	keyDown = true;
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);

	ctx.drawImage(background, 0, (canvasHeightPos - canvasHeight), canvasWidth, canvasHeight);
	ctx.drawImage(background, 0, canvasHeightPos, canvasWidth, canvasHeight);

	canvasHeightPos += speed;

	if (canvasHeightPos >= canvasHeight) {
		canvasHeightPos = 0;
	}
};

spaceShooter.menuBackground = function () {
	ctx.drawImage(background, 0, canvasHeightPos, canvasWidth, canvasHeight);
};