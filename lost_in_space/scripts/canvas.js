// Canvas declaration for width, height and canvas context
spaceShooter.canvas = function () {
	var canvas = $('#canvas_background');
	var canvasWidth = canvas.width();
	var canvasHeight = canvas.height();
	var ctx = canvas.get(0).getContext("2d");

	this.width = canvasWidth;
	this.height = canvasHeight;
	this.ctx = ctx;
};