var imageAsteroid = new Image();
imageAsteroid.src = asteroidImagePng;

var imageAsteroidSmall = new Image();
imageAsteroidSmall.src = asteroidSmallImagePng;

var arrAsteroidRepository = [];
var arrAsteroidSmallRepository = [];

// declaring of the asteroid
spaceShooter.asteroid = function (imageAsteroid, asteroidPositionX, asteroidPositionY, sourceWidth, sourceHeight, rotateDegree, rotationSpeed, speedX, speedY) {
	this.sourceWidth = sourceWidth;
	this.sourceHeight = sourceHeight;
	this.asteroidPositionX = asteroidPositionX;
	this.asteroidPositionY = asteroidPositionY;
	this.imageAsteroid = imageAsteroid;
	this.rotateDegree = rotateDegree;
	this.rotationSpeed = rotationSpeed;
	this.speedX = speedX;
	this.speedY = speedY;
};

spaceShooter.drawRotatedAsteroid = function (asteroidObject, posX, posY) {
	gameCtx.save();
	gameCtx.translate(posX + (asteroidObject.sourceWidth / 2), posY + (asteroidObject.sourceHeight / 2));
	gameCtx.rotate(asteroidObject.rotateDegree * Math.PI / 180);
	gameCtx.drawImage(asteroidObject.imageAsteroid, -asteroidObject.sourceWidth / 2, -asteroidObject.sourceHeight / 2);
	asteroidObject.rotateDegree += asteroidObject.rotationSpeed;
	gameCtx.restore();
};

spaceShooter.initAteroid = function (arrAsteroidRepository, imageAsteroid, posX, posY, sourceWidth, sourceHeight, speedX, speedY) {
	var arrTempSpeedAndDirectionRotation = [_.random(1, 4), _.random(-1, -4)];
	arrAsteroidRepository.push(new spaceShooter.asteroid(imageAsteroid, posX, posY, sourceWidth, sourceHeight, 0, arrTempSpeedAndDirectionRotation[_.random(0, 1)], speedX, speedY));
};

spaceShooter.asteroidCenteredRandomDirection = function (arrAsteroidRepository, imageAsteroid, posX, posY, sourceWidth, sourceHeight, minSpeedX, maxSpeedX, minSpeedY, maxSpeedY, minusPlusFlagX, minusPlusFlagY) {
	var arrTempRandomSpeedX = [];
	var arrTempRandomSpeedY = [];
	var tempSpeedX;
	var tempSpeedY;

	if (minusPlusFlagX) {
		for (var i = minSpeedX; i <= maxSpeedX; i++) {
			tempSpeedX = (i / 10);
			arrTempRandomSpeedX.push(tempSpeedX);
		}
	} else {
		for (var j = minSpeedX; j <= maxSpeedX; j++) {
			tempSpeedX = -(j / 10);
			arrTempRandomSpeedX.push(tempSpeedX);
		}
	}

	if (minusPlusFlagY) {
		for (var k = minSpeedY; k <= maxSpeedY; k++) {
			tempSpeedY = (k / 10);
			arrTempRandomSpeedY.push(tempSpeedY);
		}
	} else {
		for (var l = minSpeedY; l <= maxSpeedY; l++) {
			tempSpeedY = -(l / 10);
			arrTempRandomSpeedY.push(tempSpeedY);
		}
	}

	var randomSpeedX = arrTempRandomSpeedX[_.random(0, arrTempRandomSpeedX.length - 1)];
	var randomSpeedY = arrTempRandomSpeedY[_.random(0, arrTempRandomSpeedY.length - 1)];

	spaceShooter.initAteroid(arrAsteroidRepository, imageAsteroid, posX, posY, sourceWidth, sourceHeight, randomSpeedX, randomSpeedY);
};

spaceShooter.AsteroidsMaintenance = function (arrAsteroidRepository) {
	for (var i = 0; i < arrAsteroidRepository.length; i++) {
		spaceShooter.drawRotatedAsteroid(arrAsteroidRepository[i], arrAsteroidRepository[i].asteroidPositionX, arrAsteroidRepository[i].asteroidPositionY);
		arrAsteroidRepository[i].asteroidPositionX += arrAsteroidRepository[i].speedX;
		arrAsteroidRepository[i].asteroidPositionY += arrAsteroidRepository[i].speedY;

		if (arrAsteroidRepository[i].asteroidPositionY >= canvasGameHeight + 100) {
			arrAsteroidRepository.splice(i, 1);
		}
	}
};