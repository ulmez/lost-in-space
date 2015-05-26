var universalCounter = 0;

var score = 0;

var arrLevelOrderingOneEnemyShips = [];
var levelOneCounterEnemyShip = 0;
var levelOnePosition = 0;
var sumForAction = 0;
var directionChooser = true;

var arrLevelOrderingSquareEnemyShips = [];
var counterForEnemyShipsSquareAction = 0;
var leftOrRightEnemySquare = true;
var levelOneSquarePosition = 0;

var arrLevelOrderingSquareEnemyShipsLeftAndRight = [];
var counterForEnemyShipsSquareLeftAndRightAction = 0;
var levelOneSquareLeftAndRightPosition = 0;

var arrLevelOrderingShipsOneLeftCircle = [];
var circleSpawnOneLeftInterval = 20;
var circleCompleteOneLeftCheck = 0;
var counterForEnemyShipsOneLeftCircleAction = 0;
var startEnemyOneLeftCircleSequence = 0;
var levelOneCircleOneLeftPosition = 0;

var arrLevelOrderingShipsOneRightCircle = [];
var circleSpawnOneRightInterval = 20;
var circleCompleteOneRightCheck = 0;
var counterForEnemyShipsOneRightCircleAction = 0;
var startEnemyOneRightCircleSequence = 0;
var levelOneCircleOneRightPosition = 0;

var arrLevelOrderingShipsCircle = [];
var circleSpawnInterval = 20;
var circleCompleteCheck = 0;
var counterForEnemyShipsCircleAction = 0;
var startEnemyCircleSequence = 0;
var levelOneCirclePosition = 0;

var arrLevelOrderingAsteroids = [];
var counterForAsteroidAction = 0;
var levelOneAsteroidPosition = 0;

arrLevelOrderingAsteroids.push(12500);

for (var i = 0; i < 19; i++) {
	arrLevelOrderingAsteroids.push(200);
}

for (var i = 0; i < 40; i++) {
	arrLevelOrderingAsteroids.push(500);
}

for (var i = 0; i < 30; i++) {
	arrLevelOrderingAsteroids.push(200);
}

spaceShooter.initLevelOne = function () {
	// one ship ordering *******************************
	universalCounter = 0;

	arrLevelOrderingOneEnemyShips = [];
	levelOneCounterEnemyShip = 0;
	levelOnePosition = 0;
	sumForAction = 0;
	directionChooser = true;

	for (var i = 0; i < 20; i++) {
		arrLevelOrderingOneEnemyShips.push(100);
	}

	arrLevelOrderingOneEnemyShips.push(3900);

	for (var i = 0; i < 29; i++) {
		arrLevelOrderingOneEnemyShips.push(80);
	}

	arrLevelOrderingOneEnemyShips.push(16300);

	for (var i = 0; i < 79; i++) {
		arrLevelOrderingOneEnemyShips.push(100);
	}
	// **************************************************


	// square ships ordering ****************************
	arrLevelOrderingSquareEnemyShips = [];
	counterForEnemyShipsSquareAction = 0;
	leftOrRightEnemySquare = true;
	levelOneSquarePosition = 0;

	arrLevelOrderingSquareEnemyShips.push(2700, 500, 500, 500, 16300, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 14500, 500);
	// **************************************************

	// square left and right ships ordering *************
	arrLevelOrderingSquareEnemyShipsLeftAndRight = [];
	counterForEnemyShipsSquareLeftAndRightAction = 0;
	levelOneSquareLeftAndRightPosition = 0;

	arrLevelOrderingSquareEnemyShipsLeftAndRight.push(4200, 1000);
	// **************************************************

	// circle left ships ordering ***********************
	arrLevelOrderingShipsOneLeftCircle = [];
	circleSpawnOneLeftInterval = 20;
	circleCompleteOneLeftCheck = 0;
	counterForEnemyShipsOneLeftCircleAction = 0;
	startEnemyOneLeftCircleSequence = 0;
	levelOneCircleOneLeftPosition = 0;

	arrLevelOrderingShipsOneLeftCircle.push(5500, 1400);
	// **************************************************

	// circle right ships ordering **********************
	arrLevelOrderingShipsOneRightCircle = [];
	circleSpawnOneRightInterval = 20;
	circleCompleteOneRightCheck = 0;
	counterForEnemyShipsOneRightCircleAction = 0;
	startEnemyOneRightCircleSequence = 0;
	levelOneCircleOneRightPosition = 0;

	arrLevelOrderingShipsOneRightCircle.push(6900, 2800);
	// **************************************************

	// circle right and left ships ordering *************
	arrLevelOrderingShipsCircle = [];
	circleSpawnInterval = 20;
	circleCompleteCheck = 0;
	counterForEnemyShipsCircleAction = 0;
	startEnemyCircleSequence = 0;
	levelOneCirclePosition = 0;

	arrLevelOrderingShipsCircle.push(9700, 1400, 1400, 1400, 15000, 1400, 1400, 9700, 500, 500);
	// **************************************************

	// asteroids ordering *******************************
	arrLevelOrderingAsteroids = [];
	counterForAsteroidAction = 0;
	levelOneAsteroidPosition = 0;

	arrLevelOrderingAsteroids.push(12500);

	for (var i = 0; i < 19; i++) {
		arrLevelOrderingAsteroids.push(200);
	}

	for (var i = 0; i < 40; i++) {
		arrLevelOrderingAsteroids.push(500);
	}

	for (var i = 0; i < 30; i++) {
		arrLevelOrderingAsteroids.push(200);
	}
	// **************************************************
};



spaceShooter.ZigZagGroup = function () {
	if (levelOneCounterEnemyShip >= arrLevelOrderingOneEnemyShips[levelOnePosition]) {
		levelOneCounterEnemyShip = 0;
		levelOnePosition++;
		if (directionChooser) {
			directionChooser = false;
			spaceShooter.initOneEnemyShip(imageEnemyShip2, _.random(0, 380), -50, 1, 0.8, arrActiveEnemyImage2[2], 4, 0, _.random(10, 60));
		} else {
			directionChooser = true;
			spaceShooter.initOneEnemyShip(imageEnemyShip2, _.random(200, 578), -50, 1, 0.8, arrActiveEnemyImage2[2], 5, 0, _.random(10, 60));
		}
	}
	levelOneCounterEnemyShip++;
};

spaceShooter.enemyShipsMaintenance = function () {
	if (counterForEnemyShipsSquareAction >= arrLevelOrderingSquareEnemyShips[levelOneSquarePosition]) {
		levelOneSquarePosition++;
		counterForEnemyShipsSquareAction = 0;

		if (leftOrRightEnemySquare) {
			leftOrRightEnemySquare = false;
			spaceShooter.initEnemyShipsSquare(imageEnemyShip, -150, 0, 1, 0, arrActiveEnemyImage[4], 1, 0);
		} else {
			leftOrRightEnemySquare = true;
			spaceShooter.initEnemyShipsSquare(imageEnemyShip, 635, 0, -1, 0, arrActiveEnemyImage[0], 1, 0);
		}
	}
	counterForEnemyShipsSquareAction++;
};

spaceShooter.enemyShipsLeftRightMaintenance = function () {
	if (counterForEnemyShipsSquareLeftAndRightAction >= arrLevelOrderingSquareEnemyShipsLeftAndRight[levelOneSquareLeftAndRightPosition]) {
		levelOneSquareLeftAndRightPosition++;
		counterForEnemyShipsSquareLeftAndRightAction = 0;

		spaceShooter.initEnemyShipsSquare(imageEnemyShip, -150, 0, 1, 0, arrActiveEnemyImage[4], 1, 0);
		spaceShooter.initEnemyShipsSquare(imageEnemyShip, 635, 0, -1, 0, arrActiveEnemyImage[0], 1, 0);
	}
	counterForEnemyShipsSquareLeftAndRightAction++;
};

spaceShooter.enemyShipsOneLeftCircleMaintenance = function () {
	if (startEnemyOneLeftCircleSequence >= arrLevelOrderingShipsOneLeftCircle[levelOneCircleOneLeftPosition]) {
		if (counterForEnemyShipsOneLeftCircleAction >= 1400) {
			levelOneCircleOneLeftPosition++;
			startEnemyOneLeftCircleSequence = 0;
			counterForEnemyShipsOneLeftCircleAction = 0;
			circleSpawnOneLeftInterval = 20;
			circleCompleteOneLeftCheck = 0;
		}

		if (startEnemyOneLeftCircleSequence >= arrLevelOrderingShipsOneLeftCircle[levelOneCircleOneLeftPosition]) {
			if (circleSpawnOneLeftInterval >= 20 && circleCompleteOneLeftCheck < 16) {
				circleCompleteOneLeftCheck++;
				circleSpawnOneLeftInterval = 0;

				spaceShooter.initEnemyShipsCircle(imageEnemyShip, 15, 25, 1, 1, arrActiveEnemyImage[2], 2, _.random(20, 200));
			} else if (circleCompleteOneLeftCheck === 16) {
				spaceShooter.enemyShipDelayedMovement();
			}
			circleSpawnOneLeftInterval++;
			counterForEnemyShipsOneLeftCircleAction++;
		}
	}
	startEnemyOneLeftCircleSequence++;
};

spaceShooter.enemyShipsOneRightCircleMaintenance = function () {
	if (startEnemyOneRightCircleSequence >= arrLevelOrderingShipsOneRightCircle[levelOneCircleOneRightPosition]) {
		if (counterForEnemyShipsOneRightCircleAction >= 1400) {
			levelOneCircleOneRightPosition++;
			startEnemyOneRightCircleSequence = 0;
			counterForEnemyShipsOneRightCircleAction = 0;
			circleSpawnOneRightInterval = 20;
			circleCompleteOneRightCheck = 0;
		}

		if (startEnemyOneRightCircleSequence >= arrLevelOrderingShipsOneRightCircle[levelOneCircleOneRightPosition]) {
			if (circleSpawnOneRightInterval >= 20 && circleCompleteOneRightCheck < 16) {
				circleCompleteOneRightCheck++;
				circleSpawnOneRightInterval = 0;

				spaceShooter.initEnemyShipsCircle(imageEnemyShip, 520, 75, -1, 1, arrActiveEnemyImage[2], 3, _.random(20, 200));
			} else if (circleCompleteOneRightCheck === 16) {
				spaceShooter.enemyShipDelayedMovement();
			}
			circleSpawnOneRightInterval++;
			counterForEnemyShipsOneRightCircleAction++;
		}
	}
	startEnemyOneRightCircleSequence++;
};

spaceShooter.enemyShipsCircleMaintenance = function () {
	if (startEnemyCircleSequence >= arrLevelOrderingShipsCircle[levelOneCirclePosition]) {
		if (counterForEnemyShipsCircleAction >= 1400) {
			levelOneCirclePosition++;
			startEnemyCircleSequence = 0;
			counterForEnemyShipsCircleAction = 0;
			circleSpawnInterval = 20;
			circleCompleteCheck = 0;
		}

		if (startEnemyCircleSequence >= arrLevelOrderingShipsCircle[levelOneCirclePosition]) {
			if (circleSpawnInterval >= 20 && circleCompleteCheck < 16) {
				circleCompleteCheck++;
				circleSpawnInterval = 0;
				spaceShooter.initEnemyShipsCircle(imageEnemyShip, 15, 25, 1, 1, arrActiveEnemyImage[2], 2, _.random(20, 200));
				spaceShooter.initEnemyShipsCircle(imageEnemyShip, 520, 75, -1, 1, arrActiveEnemyImage[2], 3, _.random(20, 200));
			} else if (circleCompleteCheck === 16) {
				spaceShooter.enemyShipDelayedMovement();
			}
			circleSpawnInterval++;
			counterForEnemyShipsCircleAction++;
		}
	}
	startEnemyCircleSequence++;
};

spaceShooter.asteroidScheme = function () {
	if (counterForAsteroidAction >= arrLevelOrderingAsteroids[levelOneAsteroidPosition]) {
		levelOneAsteroidPosition++;
		counterForAsteroidAction = 0;
		var tempRandomBigOrSmallAsteroid = _.random(1, 2);
		var tempRandomPlacedOnAxisX = _.random(0, 560);
		var tempRandomPlacedOnAxisY = _.random(-300, 0);
		var randomSpeed = _.random(1, 2);

		// group 1 ************************************
		// diagonal from left to right cross the canvas
		if (tempRandomBigOrSmallAsteroid === 1) {
			spaceShooter.asteroidCenteredRandomDirection(arrAsteroidRepository, imageAsteroid, 0, -750, 42, 42, 1, (10 / randomSpeed), (20 / randomSpeed), (20 / randomSpeed), true, true);
		} else if (tempRandomBigOrSmallAsteroid === 2) {
			spaceShooter.asteroidCenteredRandomDirection(arrAsteroidSmallRepository, imageAsteroidSmall, 0, -750, 20, 20, 1, (10 / randomSpeed), (20 / randomSpeed), (20 / randomSpeed), true, true);
		}

		// diagonal from right to left cross the canvas
		tempRandomBigOrSmallAsteroid = _.random(1, 2);
		randomSpeed = _.random(1, 2);
		if (tempRandomBigOrSmallAsteroid === 1) {
			spaceShooter.asteroidCenteredRandomDirection(arrAsteroidRepository, imageAsteroid, 560, -750, 42, 42, 1, (10 / randomSpeed), (20 / randomSpeed), (20 / randomSpeed), false, true);
		} else if (tempRandomBigOrSmallAsteroid === 2) {
			spaceShooter.asteroidCenteredRandomDirection(arrAsteroidSmallRepository, imageAsteroidSmall, 560, -750, 20, 20, 1, (10 / randomSpeed), (20 / randomSpeed), (20 / randomSpeed), false, true);
		}
		// ********************************************



		// group 2 ************************************
		// from left to right over the canvas
		tempRandomBigOrSmallAsteroid = _.random(1, 2);
		tempRandomPlacedOnAxisY = _.random(-300, 0);
		randomSpeed = _.random(1, 3);
		if (tempRandomBigOrSmallAsteroid === 1) {
			spaceShooter.asteroidCenteredRandomDirection(arrAsteroidRepository, imageAsteroid, -400, tempRandomPlacedOnAxisY, 42, 42, (20 / randomSpeed), (20 / randomSpeed), (7 / randomSpeed), (11 / randomSpeed), true, true);
		} else if (tempRandomBigOrSmallAsteroid === 2) {
			spaceShooter.asteroidCenteredRandomDirection(arrAsteroidSmallRepository, imageAsteroidSmall, -400, tempRandomPlacedOnAxisY, 20, 20, (20 / randomSpeed), (20 / randomSpeed), (7 / randomSpeed), (11 / randomSpeed), true, true);
		}

		// from right to left over the canvas
		tempRandomBigOrSmallAsteroid = _.random(1, 2);
		tempRandomPlacedOnAxisY = _.random(-300, 0);
		randomSpeed = _.random(1, 3);
		if (tempRandomBigOrSmallAsteroid === 1) {
			spaceShooter.asteroidCenteredRandomDirection(arrAsteroidRepository, imageAsteroid, 1000, tempRandomPlacedOnAxisY, 42, 42, (20 / randomSpeed), (20 / randomSpeed), (7 / randomSpeed), (11 / randomSpeed), false, true);
		} else if (tempRandomBigOrSmallAsteroid === 2) {
			spaceShooter.asteroidCenteredRandomDirection(arrAsteroidSmallRepository, imageAsteroidSmall, 1000, tempRandomPlacedOnAxisY, 20, 20, (20 / randomSpeed), (20 / randomSpeed), (7 / randomSpeed), (11 / randomSpeed), false, true);
		}
		// ********************************************



		// group 3 ************************************
		// from top to bottom over the canvas randomly on x-axis
		tempRandomBigOrSmallAsteroid = _.random(1, 2);
		tempRandomPlacedOnAxisX = _.random(0, 560);
		randomSpeed = _.random(1, 3);
		if (tempRandomBigOrSmallAsteroid === 1) {
			spaceShooter.asteroidCenteredRandomDirection(arrAsteroidRepository, imageAsteroid, tempRandomPlacedOnAxisX, -200, 42, 42, 0, 0, (20 / randomSpeed), (20 / randomSpeed), true, true);
		} else if (tempRandomBigOrSmallAsteroid === 2) {
			spaceShooter.asteroidCenteredRandomDirection(arrAsteroidSmallRepository, imageAsteroidSmall, tempRandomPlacedOnAxisX, -200, 20, 20, 0, 0, (20 / randomSpeed), (20 / randomSpeed), true, true);
		}
		// ********************************************
	}
	counterForAsteroidAction++;

	universalCounter++;

	if (universalCounter === 44000) {
		if (score > window.localStorage.highScore) {
			window.localStorage.highScore = score;
		}

		$('#informer').css({
			left: '150px'
		});
		$('#informer').html('YOU MADE IT HOME !!!');
		$('#informer').fadeTo(500, 1);

		setTimeout(function () {
			universalCounter = 0;
			$('#score').hide();
			$('#informer').hide();
			$('#endScore').html(score);
			$('#playAgainHolder').fadeTo(500, 1);
			spaceShooter.stopGame();
		}, 5000);
	}
};