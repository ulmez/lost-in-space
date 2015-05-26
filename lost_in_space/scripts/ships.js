var imagePlayerShip = new Image();
imagePlayerShip.src = playerShipImagePng;
var canvasGame = $('#canvas_game');
var canvasGameWidth = canvasGame.width();
var canvasGameHeight = canvasGame.height();
var shipVelocityX = 0;
var shipVelocityY = 0;
var shipPosX = 0;
var shipPosY = 0;
var delayX = 0;
var arrActiveShipImage = [0, 40, 80, 120, 160];
var activeShipImage = arrActiveShipImage[2];
var rightKeyDown = "";
var leftKeyDown = "";
var downKeyDown = "";
var upKeyDown = "";
var fireDown = "";
var rightKeyUp = "";
var leftKeyUp = "";
var downKeyUp = "";
var upKeyUp = "";
var fireUp = "";
var firedOnceCheck = true;
var twoKeyPressed = [];

// declaring of the player ship
spaceShooter.playerShip = function (sourceX, sourceY, sourceWidth, sourceHeight, shipPositionX, shipPositionY) {
	this.sourceY = sourceY;
	this.sourceX = sourceX;
	this.sourceWidth = sourceWidth;
	this.sourceHeight = sourceHeight;
	this.shipPositionX = shipPositionX;
	this.shipPositionY = shipPositionY;
	this.imagePlayerShip = imagePlayerShip;
};

// check which keys on the keyboard are pressed at the same time
var multipleKeyPressedCheck = function () {
	// for keydown events
	$(document).keydown(function (event) {
		if (event.keyCode === 68) {
			rightKeyDown = event.keyCode;
			rightKeyUp = "";
		}

		if (event.keyCode === 65) {
			leftKeyDown = event.keyCode;
			leftKeyUp = "";
		}

		if (event.keyCode === 87) {
			upKeyDown = event.keyCode;
			upKeyUp = "";
		}

		if (event.keyCode === 83) {
			downKeyDown = event.keyCode;
			downKeyUp = "";
		}

		if (event.keyCode === 76) {
			rightKeyDown = event.keyCode;
			rightKeyUp = "";
		}

		if (event.keyCode === 74) {
			leftKeyDown = event.keyCode;
			leftKeyUp = "";
		}

		if (event.keyCode === 73) {
			upKeyDown = event.keyCode;
			upKeyUp = "";
		}

		if (event.keyCode === 75) {
			downKeyDown = event.keyCode;
			downKeyUp = "";
		}

		if (event.keyCode === 32) {
			fireDown = event.keyCode;
			fireUp = "";
		}
	});

	// for keyup events
	$(document).keyup(function (event) {
		if (event.keyCode === 68) {
			rightKeyDown = "";
			rightKeyUp = event.keyCode;
		}

		if (event.keyCode === 65) {
			leftKeyDown = "";
			leftKeyUp = event.keyCode;
		}

		if (event.keyCode === 87) {
			upKeyDown = "";
			upKeyUp = event.keyCode;
		}

		if (event.keyCode === 83) {
			downKeyDown = "";
			downKeyUp = event.keyCode;
		}

		if (event.keyCode === 76) {
			rightKeyDown = "";
			rightKeyUp = event.keyCode;
		}

		if (event.keyCode === 74) {
			leftKeyDown = "";
			leftKeyUp = event.keyCode;
		}

		if (event.keyCode === 73) {
			upKeyDown = "";
			upKeyUp = event.keyCode;
		}

		if (event.keyCode === 75) {
			downKeyDown = "";
			downKeyUp = event.keyCode;
		}

		if (event.keyCode === 32) {
			fireDown = "";
			fireUp = event.keyCode;
		}
	});
};

// handeling of the ships steering
spaceShooter.shipDirection = function (speed) {
	// keydown events **************************************
	// right key down
	if (rightKeyDown !== "") {
		if (twoKeyPressed.indexOf("r") < 0) {
			twoKeyPressed.push("r");
		}
	}

	// left key down
	if (leftKeyDown !== "") {
		if (twoKeyPressed.indexOf("l") < 0) {
			twoKeyPressed.push("l");
		}
	}

	// up key down
	if (upKeyDown !== "") {
		if (twoKeyPressed.indexOf("u") < 0) {
			twoKeyPressed.push("u");
		}
	}

	// down key down
	if (downKeyDown !== "") {
		if (twoKeyPressed.indexOf("d") < 0) {
			twoKeyPressed.push("d");
		}
	}

	// fire key down
	if (fireDown !== "") {
		if (twoKeyPressed.indexOf("s") < 0) {
			twoKeyPressed.push("s");
		}
	}
	// *****************************************************

	// keyup events ****************************************
	// right key up
	if (rightKeyUp !== "") {
		for (var i = 0; i < twoKeyPressed.length; i++) {
			if (twoKeyPressed[i] === "r") {
				twoKeyPressed.splice(i, 1);
			}
		}
	}

	// left key up
	if (leftKeyUp !== "") {
		for (var j = 0; j < twoKeyPressed.length; j++) {
			if (twoKeyPressed[j] === "l") {
				twoKeyPressed.splice(j, 1);
			}
		}
	}

	// up key up
	if (upKeyUp !== "") {
		for (var k = 0; k < twoKeyPressed.length; k++) {
			if (twoKeyPressed[k] === "u") {
				twoKeyPressed.splice(k, 1);
			}
		}
	}

	// down key up
	if (downKeyUp !== "") {
		for (var l = 0; l < twoKeyPressed.length; l++) {
			if (twoKeyPressed[l] === "d") {
				twoKeyPressed.splice(l, 1);
			}
		}
	}

	// fire key up
	if (fireUp !== "") {
		firedOnceCheck = true;
		for (var m = 0; m < twoKeyPressed.length; m++) {
			if (twoKeyPressed[m] === "s") {
				twoKeyPressed.splice(m, 1);
			}
		}
	}
	// *****************************************************



	// position of player ship depending on keys pressed ***********
	// movement on canvas
	if (twoKeyPressed[twoKeyPressed.length - 1] === "r") {
		shipVelocityX = speed;
	}

	if (twoKeyPressed[twoKeyPressed.length - 1] === "l") {
		shipVelocityX = -speed;
	}

	if (twoKeyPressed[twoKeyPressed.length - 1] === "d") {
		shipVelocityY = speed;
	}

	if (twoKeyPressed[twoKeyPressed.length - 1] === "u") {
		shipVelocityY = -speed;
	}

	// stop movement on canvas
	if (twoKeyPressed.indexOf("r") < 0 && twoKeyPressed.indexOf("l") < 0) {
		shipVelocityX = 0;
	}

	if (twoKeyPressed.indexOf("u") < 0 && twoKeyPressed.indexOf("d") < 0) {
		shipVelocityY = 0;
	}

	shipPosX += shipVelocityX;
	shipPosY += shipVelocityY;
	// *************************************************************

	// game canvas boundes check on x and y axis ***********
	if (shipPosX >= 280 || shipPosX <= -280) {
		shipPosX -= shipVelocityX;
	}

	if (shipPosY >= 20 || shipPosY <= -340) {
		shipPosY -= shipVelocityY;
	}
	// *****************************************************

	// sprite animation of player ship on left and right ***
	if (shipVelocityX === speed) {
		delayX++;
		if (delayX >= 6) {
			delayX = 0;
			if (activeShipImage < arrActiveShipImage[4]) {
				activeX++;
				activeShipImage = arrActiveShipImage[activeX];
			}
		}
	} else if (shipVelocityX === -speed) {
		delayX++;
		if (delayX >= 6) {
			delayX = 0;
			if (activeShipImage > arrActiveShipImage[0]) {
				activeX--;
				activeShipImage = arrActiveShipImage[activeX];
			}
		}
	} else if (shipVelocityX === 0) {
		if (activeShipImage > arrActiveShipImage[2]) {
			delayX--;
			if (delayX <= 0) {
				delayX = 6;
				activeX--;
				activeShipImage = arrActiveShipImage[activeX];
			}
		}

		if (activeShipImage < arrActiveShipImage[2]) {
			delayX++;
			if (delayX >= 6) {
				delayX = 0;
				activeX++;
				activeShipImage = arrActiveShipImage[activeX];
			}
		}
	}
	// *****************************************************
	
	for (var n = 0; n < twoKeyPressed.length; n++) {
		if (twoKeyPressed[n] === "s" && firedOnceCheck) {
			firedOnceCheck = false;
			spaceShooter.shotFired(shipPosX + 299.5, shipPosY + 333);
		}
	}

	spaceShooter.shotsPosition(3);
};

multipleKeyPressedCheck();