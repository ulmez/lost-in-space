var imageShot = new Image();
imageShot.src = playerShotImagePng;

var arrShotsRepository = [];

// declaring of the propulsion
spaceShooter.shot = function (shotPositionX, shotPositionY, sourceWidth, sourceHeight) {
	this.sourceWidth = sourceWidth;
	this.sourceHeight = sourceHeight;
	this.shotPositionX = shotPositionX;
	this.shotPositionY = shotPositionY;
	this.imageShot = imageShot;
};

spaceShooter.shotFired = function (posX, posY) {
	if (playerKilledCheck) {
		arrShotsRepository.push(new spaceShooter.shot(posX, posY, 3, 11));
		spaceShooter.playerLaserShot();
	}
};

spaceShooter.shotsPosition = function (speed) {
	for (var i = 0; i < arrShotsRepository.length; i++) {
		gameCtx.drawImage(arrShotsRepository[i].imageShot, arrShotsRepository[i].shotPositionX, arrShotsRepository[i].shotPositionY, arrShotsRepository[i].sourceWidth, arrShotsRepository[i].sourceHeight);
		arrShotsRepository[i].shotPositionY -= speed;

		if (arrShotsRepository[i].shotPositionY <= -11) {
			arrShotsRepository.splice(i, 1);
		}
	}
};