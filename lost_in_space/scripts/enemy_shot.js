var imageEnemyShot = new Image();
imageEnemyShot.src = enemyShotImage1Png;

var imageEnemyShot2 = new Image();
imageEnemyShot2.src = enemyShotImage2Png;

var arrEnemyShotsRepository = [];

// declaring of the enemy shot
spaceShooter.enemyShot = function (imageEnemyShot, shotPositionX, shotPositionY, sourceWidth, sourceHeight) {
	this.sourceWidth = sourceWidth;
	this.sourceHeight = sourceHeight;
	this.shotPositionX = shotPositionX;
	this.shotPositionY = shotPositionY;
	this.imageEnemyShot = imageEnemyShot;
};

spaceShooter.handelingEnemyShots = function (speed) {
	for (var i = 0; i < arrEnemyShotsRepository.length; i++) {
		gameCtx.drawImage(arrEnemyShotsRepository[i].imageEnemyShot, arrEnemyShotsRepository[i].shotPositionX, arrEnemyShotsRepository[i].shotPositionY, arrEnemyShotsRepository[i].sourceWidth, arrEnemyShotsRepository[i].sourceHeight);
		arrEnemyShotsRepository[i].shotPositionY += speed;
	}
};