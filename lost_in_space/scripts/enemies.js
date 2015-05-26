var imageEnemyShip = new Image();
imageEnemyShip.src = enemyShipImage1Png;
var arrActiveEnemyImage = [0, 15, 30, 45, 60];
var activeEnemyImage = arrActiveEnemyImage[2];

var imageEnemyShip2 = new Image();
imageEnemyShip2.src = enemyShipImage2Png;
var arrActiveEnemyImage2 = [0, 22, 44, 66, 88];
var activeEnemyImage2 = arrActiveEnemyImage2[2];

var arrEnemyRepository = [];

var randomNumberCounter = 0;
var randomNumberForEnemyShot = _.random(20, 200);

// declaring of the enemy ship
spaceShooter.enemyShip = function (imageEnemyShip, sourceX, sourceY, sourceWidth, sourceHeight, shipPositionX, shipPositionY, speedX, speedY, movementFlag, movementPosition, privateCounter, randomTimerForShot) {
	this.sourceY = sourceY;
	this.sourceX = sourceX;
	this.sourceWidth = sourceWidth;
	this.sourceHeight = sourceHeight;
	this.shipPositionX = shipPositionX;
	this.shipPositionY = shipPositionY;
	this.imageEnemyShip = imageEnemyShip;
	this.randomTimerForShot = randomTimerForShot;
	this.enemyCounter = 0;
	this.speedX = speedX;
	this.speedY = speedY;
	this.movementFlag = movementFlag;
	this.movementPosition = movementPosition;
	this.privateCounter = privateCounter;
};

spaceShooter.initEnemyShipsSquare = function (imageEnemyShip, x, y, speedX, speedY, sourceX, movementFlag, movementPosition) {
	var posX = x;
	var posY = y;
	var tempPrivateCounter = 0;

	for (var i = 0; i < 5; i++) {
		for (var j = 0; j < 4; j++) {
			var tempRandomNumber = _.random(20, 200);
			arrEnemyRepository.push(new spaceShooter.enemyShip(imageEnemyShip, sourceX, 0, 15, 19, posX, posY, speedX, speedY, movementFlag, movementPosition, tempPrivateCounter, tempRandomNumber));
			posY += 25;
		}
		posY = y;
		posX += 25;
	}
};

spaceShooter.initOneEnemyShip = function (imageEnemyShip, x, y, speedX, speedY, sourceX, movementFlag, privateCounter, randomTimerForShot) {
	var posX = x;
	var posY = y;

	arrEnemyRepository.push(new spaceShooter.enemyShip(imageEnemyShip, sourceX, 0, 22, 25, posX, posY, speedX, speedY, movementFlag, 0, privateCounter, randomTimerForShot));
};

spaceShooter.initEnemyShipsCircle = function (imageEnemyShip, x, y, speedX, speedY, sourceX, movementFlag, randomTimerForShot) {
	var posX = x;
	var posY = y;
	var relX = 25;
	var relY = 0;

	for (var i = 0; i < 1; i++) {
		if (i < 5) {
			posX += relX;
			posY += relY;
		}
		arrEnemyRepository.push(new spaceShooter.enemyShip(imageEnemyShip, sourceX, 0, 15, 19, posX, posY, speedX, speedY, movementFlag, (i + 1), 0, randomTimerForShot));
	}
};

spaceShooter.enemyShipPosition = function () {
	for (var i = 0; i < arrEnemyRepository.length; i++) {
		gameCtx.drawImage(arrEnemyRepository[i].imageEnemyShip, arrEnemyRepository[i].sourceX, arrEnemyRepository[i].sourceY, arrEnemyRepository[i].sourceWidth, arrEnemyRepository[i].sourceHeight, arrEnemyRepository[i].shipPositionX, arrEnemyRepository[i].shipPositionY, arrEnemyRepository[i].sourceWidth, arrEnemyRepository[i].sourceHeight);

		if (arrEnemyRepository[i].enemyCounter >= arrEnemyRepository[i].randomTimerForShot) {
			arrEnemyRepository[i].enemyCounter = 0;

			if (arrEnemyRepository[i].imageEnemyShip === imageEnemyShip) {
				arrEnemyRepository[i].randomTimerForShot = _.random(20, 200);
				arrEnemyShotsRepository.push(new spaceShooter.enemyShot(imageEnemyShot, arrEnemyRepository[i].shipPositionX + (arrEnemyRepository[i].sourceWidth / 3), arrEnemyRepository[i].shipPositionY + (arrEnemyRepository[i].sourceHeight / 1.4), 5, 5));
				spaceShooter.enemyLaserShot1();
			} else if (arrEnemyRepository[i].imageEnemyShip === imageEnemyShip2) {
				arrEnemyRepository[i].randomTimerForShot = _.random(10, 60);
				arrEnemyShotsRepository.push(new spaceShooter.enemyShot(imageEnemyShot2, arrEnemyRepository[i].shipPositionX + (arrEnemyRepository[i].sourceWidth / 2.5), arrEnemyRepository[i].shipPositionY + (arrEnemyRepository[i].sourceHeight / 1.4), 5, 10));
				spaceShooter.enemyLaserShot2();
			}
		}
		arrEnemyRepository[i].enemyCounter++;
	}

	for (var j = 0; j < arrEnemyShotsRepository.length; j++) {
		if (arrEnemyShotsRepository[j].shotPositionY >= canvasGameHeight) {
			arrEnemyShotsRepository.splice(j, 1);
		}
	}
};

spaceShooter.enemyShipMovement = function () {
	for (var i = 0; i < arrEnemyRepository.length; i++) {
		var specEnemyShip = arrEnemyRepository[i];

		// movement left or right cross the canvas
		if (specEnemyShip.movementFlag === 1) {
			specEnemyShip.shipPositionX += specEnemyShip.speedX;
			specEnemyShip.shipPositionY += specEnemyShip.speedY;
		}

		// movement circle on canvas clockwise
		else if (specEnemyShip.movementFlag === 2) {
			if (specEnemyShip.privateCounter < 40) {
				specEnemyShip.sourceX = arrActiveEnemyImage[4];
				specEnemyShip.shipPositionX += specEnemyShip.speedX;
				specEnemyShip.shipPositionY += 0;
			} else if (specEnemyShip.privateCounter >= 40 && specEnemyShip.privateCounter < 80) {
				specEnemyShip.sourceX = arrActiveEnemyImage[3];
				specEnemyShip.shipPositionX += specEnemyShip.speedX;
				specEnemyShip.shipPositionY += specEnemyShip.speedY;
			} else if (specEnemyShip.privateCounter >= 80 && specEnemyShip.privateCounter < 120) {
				specEnemyShip.sourceX = arrActiveEnemyImage[2];
				specEnemyShip.shipPositionX += 0;
				specEnemyShip.shipPositionY += specEnemyShip.speedY;
			} else if (specEnemyShip.privateCounter >= 120 && specEnemyShip.privateCounter < 160) {
				specEnemyShip.sourceX = arrActiveEnemyImage[1];
				specEnemyShip.shipPositionX -= specEnemyShip.speedX;
				specEnemyShip.shipPositionY += specEnemyShip.speedY;
			} else if (specEnemyShip.privateCounter >= 160 && specEnemyShip.privateCounter < 200) {
				specEnemyShip.sourceX = arrActiveEnemyImage[0];
				specEnemyShip.shipPositionX -= specEnemyShip.speedX;
				specEnemyShip.shipPositionY += 0;
			} else if (specEnemyShip.privateCounter >= 200 && specEnemyShip.privateCounter < 240) {
				specEnemyShip.sourceX = arrActiveEnemyImage[1];
				specEnemyShip.shipPositionX -= specEnemyShip.speedX;
				specEnemyShip.shipPositionY -= specEnemyShip.speedY;
			} else if (specEnemyShip.privateCounter >= 240 && specEnemyShip.privateCounter < 280) {
				specEnemyShip.sourceX = arrActiveEnemyImage[2];
				specEnemyShip.shipPositionX -= 0;
				specEnemyShip.shipPositionY -= specEnemyShip.speedY;
			} else if (specEnemyShip.privateCounter >= 280 && specEnemyShip.privateCounter < 320) {
				specEnemyShip.sourceX = arrActiveEnemyImage[3];
				specEnemyShip.shipPositionX += specEnemyShip.speedX;
				specEnemyShip.shipPositionY -= specEnemyShip.speedY;
			}

			specEnemyShip.privateCounter++;

			if (specEnemyShip.privateCounter === 320) {
				specEnemyShip.privateCounter = 0;
			}
		}

		// movement circle on canvas counter clockwise
		else if (specEnemyShip.movementFlag === 3) {
			if (specEnemyShip.privateCounter < 40) {
				specEnemyShip.sourceX = arrActiveEnemyImage[0];
				specEnemyShip.shipPositionX += specEnemyShip.speedX;
				specEnemyShip.shipPositionY += 0;
			} else if (specEnemyShip.privateCounter >= 40 && specEnemyShip.privateCounter < 80) {
				specEnemyShip.sourceX = arrActiveEnemyImage[1];
				specEnemyShip.shipPositionX += specEnemyShip.speedX;
				specEnemyShip.shipPositionY += specEnemyShip.speedY;
			} else if (specEnemyShip.privateCounter >= 80 && specEnemyShip.privateCounter < 120) {
				specEnemyShip.sourceX = arrActiveEnemyImage[2];
				specEnemyShip.shipPositionX += 0;
				specEnemyShip.shipPositionY += specEnemyShip.speedY;
			} else if (specEnemyShip.privateCounter >= 120 && specEnemyShip.privateCounter < 160) {
				specEnemyShip.sourceX = arrActiveEnemyImage[3];
				specEnemyShip.shipPositionX -= specEnemyShip.speedX;
				specEnemyShip.shipPositionY += specEnemyShip.speedY;
			} else if (specEnemyShip.privateCounter >= 160 && specEnemyShip.privateCounter < 200) {
				specEnemyShip.sourceX = arrActiveEnemyImage[4];
				specEnemyShip.shipPositionX -= specEnemyShip.speedX;
				specEnemyShip.shipPositionY += 0;
			} else if (specEnemyShip.privateCounter >= 200 && specEnemyShip.privateCounter < 240) {
				specEnemyShip.sourceX = arrActiveEnemyImage[3];
				specEnemyShip.shipPositionX -= specEnemyShip.speedX;
				specEnemyShip.shipPositionY -= specEnemyShip.speedY;
			} else if (specEnemyShip.privateCounter >= 240 && specEnemyShip.privateCounter < 280) {
				specEnemyShip.sourceX = arrActiveEnemyImage[2];
				specEnemyShip.shipPositionX -= 0;
				specEnemyShip.shipPositionY -= specEnemyShip.speedY;
			} else if (specEnemyShip.privateCounter >= 280 && specEnemyShip.privateCounter < 320) {
				specEnemyShip.sourceX = arrActiveEnemyImage[1];
				specEnemyShip.shipPositionX += specEnemyShip.speedX;
				specEnemyShip.shipPositionY -= specEnemyShip.speedY;
			}

			specEnemyShip.privateCounter++;

			if (specEnemyShip.privateCounter === 320) {
				specEnemyShip.privateCounter = 0;
			}
		}

		// movement zig zag on canvas starting to right
		else if (specEnemyShip.movementFlag === 4) {
			if (specEnemyShip.privateCounter < 200) {
				if (specEnemyShip.privateCounter < 6) {
					specEnemyShip.sourceX = arrActiveEnemyImage2[2];
				} else if (specEnemyShip.privateCounter >= 6 && specEnemyShip.privateCounter < 12) {
					specEnemyShip.sourceX = arrActiveEnemyImage2[3];
				} else {
					specEnemyShip.sourceX = arrActiveEnemyImage2[4];
				}
				specEnemyShip.shipPositionX += specEnemyShip.speedX;
				specEnemyShip.shipPositionY += specEnemyShip.speedY;
			} else if (specEnemyShip.privateCounter >= 200 && specEnemyShip.privateCounter < 400) {
				if (specEnemyShip.privateCounter < 206) {
					specEnemyShip.sourceX = arrActiveEnemyImage2[2];
				} else if (specEnemyShip.privateCounter >= 206 && specEnemyShip.privateCounter < 212) {
					specEnemyShip.sourceX = arrActiveEnemyImage2[1];
				} else {
					specEnemyShip.sourceX = arrActiveEnemyImage2[0];
				}
				specEnemyShip.shipPositionX -= specEnemyShip.speedX;
				specEnemyShip.shipPositionY += specEnemyShip.speedY;
			}
			specEnemyShip.privateCounter++;

			if (specEnemyShip.privateCounter >= 400) {
				specEnemyShip.privateCounter = 0;
			}
		}

		// movement zig zag on canvas starting to left
		else if (specEnemyShip.movementFlag === 5) {
			if (specEnemyShip.privateCounter < 200) {
				if (specEnemyShip.privateCounter < 6) {
					specEnemyShip.sourceX = arrActiveEnemyImage2[2];
				} else if (specEnemyShip.privateCounter >= 6 && specEnemyShip.privateCounter < 12) {
					specEnemyShip.sourceX = arrActiveEnemyImage2[1];
				} else {
					specEnemyShip.sourceX = arrActiveEnemyImage2[0];
				}

				specEnemyShip.shipPositionX -= specEnemyShip.speedX;
				specEnemyShip.shipPositionY += specEnemyShip.speedY;
			} else if (specEnemyShip.privateCounter >= 200 && specEnemyShip.privateCounter < 400) {
				if (specEnemyShip.privateCounter < 206) {
					specEnemyShip.sourceX = arrActiveEnemyImage2[2];
				} else if (specEnemyShip.privateCounter >= 206 && specEnemyShip.privateCounter < 212) {
					specEnemyShip.sourceX = arrActiveEnemyImage2[3];
				} else {
					specEnemyShip.sourceX = arrActiveEnemyImage2[4];
				}

				specEnemyShip.shipPositionX += specEnemyShip.speedX;
				specEnemyShip.shipPositionY += specEnemyShip.speedY;
			}
			specEnemyShip.privateCounter++;

			if (specEnemyShip.privateCounter >= 400) {
				specEnemyShip.privateCounter = 0;
			}
		}

		if (
			specEnemyShip.shipPositionX >= canvasGameWidth + 200 ||
			specEnemyShip.shipPositionX <= -200 ||
			specEnemyShip.shipPositionY >= canvasGameHeight
		) {
			arrEnemyRepository.splice(i, 1);
		}
	}
};

spaceShooter.enemyShipDelayedMovement = function () {
	for (var i = 0; i < arrEnemyRepository.length; i++) {
		if (arrEnemyRepository[i].movementFlag === 2) {
			arrEnemyRepository[i].shipPositionX += arrEnemyRepository[i].speedX;
		} else if (arrEnemyRepository[i].movementFlag === 3) {
			arrEnemyRepository[i].shipPositionX += arrEnemyRepository[i].speedX;
		}
	}
};