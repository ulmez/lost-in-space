var canvasExplosion = $('#canvas_explosion');
var explosionCtx = canvasExplosion.get(0).getContext("2d");
var imageExplosion = new Image();
imageExplosion.src = enemyExplosionImage1Png;
var arrActiveEplosionImageOnEnemyShip = [0, 24, 48, 72, 96, 120];
var arrExplosionRepository = [];

var imageExplosionAsteroid = new Image();
imageExplosionAsteroid.src = asteroidExplosionImagePng;
var arrActiveEplosionImageOnAsteroid = [0, 38, 76, 114, 152, 190, 228, 266, 304, 342, 380, 418, 456];
var arrExplosionAsteroidRepository = [];

var imageExplosionSmallAsteroid = new Image();
imageExplosionSmallAsteroid.src = asteroidSmallExplosionImagePng;
var arrActiveEplosionImageOnSmallAsteroid = [0, 23, 46, 69, 92, 115, 138];
var arrExplosionSmallAsteroidRepository = [];

var imageExplosionPlayer = new Image();
imageExplosionPlayer.src = playerExplosionImagePng;
var activeEplosionImagePlayer = [0, 100, 200, 300, 400, 500, 600, 700, 800];
var arrExplosionPlayerRepository = [];

// declaring of the explosion object
spaceShooter.explosion = function (imageExplosion, sourceX, sourceY, sourceWidth, sourceHeight, explosionPositionX, explosionPositionY) {
	this.sourceY = sourceY;
	this.sourceX = sourceX;
	this.sourceWidth = sourceWidth;
	this.sourceHeight = sourceHeight;
	this.explosionPositionX = explosionPositionX;
	this.explosionPositionY = explosionPositionY;
	this.imageExplosion = imageExplosion;
	this.explosionCounter = 0;
	this.atTheMomentSprite = 0;
};

spaceShooter.initExplosion = function (imageExplosion, arrExplosionRepository, arrActiveEplosionImage, sourceX, sourceY, x, y) {
	arrExplosionRepository.push(new spaceShooter.explosion(imageExplosion, arrActiveEplosionImage[0], 0, sourceX, sourceY, x, y));
};

spaceShooter.explosionSprite = function (arrExplosionRepository, arrActiveEplosionImage, delay, endGameFlag) {
	for (var i = 0; i < arrExplosionRepository.length; i++) {
		arrExplosionRepository[i].sourceX = arrActiveEplosionImage[arrExplosionRepository[i].atTheMomentSprite];

		arrExplosionRepository[i].explosionCounter++;

		if (arrExplosionRepository[i].explosionCounter >= delay) {
			arrExplosionRepository[i].explosionCounter = 0;
			arrExplosionRepository[i].atTheMomentSprite++;
		}

		if (arrExplosionRepository[i].atTheMomentSprite >= arrActiveEplosionImage.length) {
			arrExplosionRepository.splice(i, 1);

			if (endGameFlag) {
				spaceShooter.stopGame();

				if (score > window.localStorage.highScore) {
					window.localStorage.highScore = score;
				}

				$('#score').hide();
				$('#endScore').html(score);
				$('#playAgainHolder').fadeTo(500, 1);
			}
		}
	}
	
	for (var j = 0; j < arrExplosionRepository.length; j++) {
		var explosionTemp = arrExplosionRepository[j];
		explosionCtx.drawImage(explosionTemp.imageExplosion, explosionTemp.sourceX, explosionTemp.sourceY, explosionTemp.sourceWidth, explosionTemp.sourceHeight, explosionTemp.explosionPositionX, explosionTemp.explosionPositionY, explosionTemp.sourceWidth, explosionTemp.sourceHeight);
	}
};