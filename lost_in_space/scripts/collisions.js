spaceShooter.collisionDetection = function () {
	// collision group player shots vs enemy ships **************************
	for (var i = 0; i < arrShotsRepository.length; i++) {
		var tempShotPosX = arrShotsRepository[i].shotPositionX;
		var tempShotPosY = arrShotsRepository[i].shotPositionY;
		var tempShotWidth = arrShotsRepository[i].sourceWidth;
		var tempShotHeight = arrShotsRepository[i].sourceHeight;

		for (var j = 0; j < arrEnemyRepository.length; j++) {
			var tempEnemyPosX = arrEnemyRepository[j].shipPositionX;
			var tempEnemyPosY = arrEnemyRepository[j].shipPositionY;
			var tempEnemyWidth = arrEnemyRepository[j].sourceWidth;
			var tempEnemyHeight = arrEnemyRepository[j].sourceHeight;

			if (
				(tempShotPosX + tempShotWidth) >= tempEnemyPosX &&
				tempShotPosX <= (tempEnemyPosX + tempEnemyWidth) &&
				tempShotPosY <= (tempEnemyPosY + tempEnemyHeight - 7) &&
				(tempShotPosY + tempShotHeight) >= tempEnemyPosY
			) {
				spaceShooter.scoreGenerator(1);
				spaceShooter.enemyExplosion();
				if (arrEnemyRepository[j].imageEnemyShip === imageEnemyShip) {
					spaceShooter.initExplosion(imageExplosion, arrExplosionRepository, arrActiveEplosionImageOnEnemyShip, 24, 25, arrEnemyRepository[j].shipPositionX - 4, arrEnemyRepository[j].shipPositionY - 4);
				} else if (arrEnemyRepository[j].imageEnemyShip === imageEnemyShip2) {
					spaceShooter.initExplosion(imageExplosion, arrExplosionRepository, arrActiveEplosionImageOnEnemyShip, 24, 25, arrEnemyRepository[j].shipPositionX, arrEnemyRepository[j].shipPositionY);
				}
				arrShotsRepository.splice(i, 1);
				arrEnemyRepository.splice(j, 1);
			}
		}
	}
	// **********************************************************************

	// collision group enemy shots vs player ship ***************************
	for (var k = 0; k < arrEnemyShotsRepository.length; k++) {
		var tempEnemyShotPosX = arrEnemyShotsRepository[k].shotPositionX;
		var tempEnemyShotPosY = arrEnemyShotsRepository[k].shotPositionY;
		var tempEnemyShotWidth = arrEnemyShotsRepository[k].sourceWidth;
		var tempEnemyShotHeight = arrEnemyShotsRepository[k].sourceHeight;

		var tempPlayerPosX = player1.shipPositionX;
		var tempPlayerPosY = player1.shipPositionY;
		var tempPlayerWidth = player1.sourceWidth;
		var tempPlayerHeight = player1.sourceHeight;

		if (
			(tempEnemyShotPosX + tempEnemyShotWidth - 18) >= tempPlayerPosX &&
			(tempEnemyShotPosX + 17) <= (tempPlayerPosX + tempPlayerWidth) &&
			(tempEnemyShotPosY + tempEnemyShotHeight - 2) >= tempPlayerPosY &&
			tempEnemyShotPosY <= (tempPlayerPosY + tempPlayerHeight - 20) ||

			(tempEnemyShotPosX + tempEnemyShotWidth - 16) >= tempPlayerPosX &&
			(tempEnemyShotPosX + 15) <= (tempPlayerPosX + tempPlayerWidth) &&
			(tempEnemyShotPosY + tempEnemyShotHeight - 13) >= tempPlayerPosY &&
			tempEnemyShotPosY <= (tempPlayerPosY + tempPlayerHeight - 10) ||

			(tempEnemyShotPosX + tempEnemyShotWidth - 8) >= tempPlayerPosX &&
			(tempEnemyShotPosX + 7) <= (tempPlayerPosX + tempPlayerWidth) &&
			(tempEnemyShotPosY + tempEnemyShotHeight - 20) >= tempPlayerPosY &&
			tempEnemyShotPosY <= (tempPlayerPosY + tempPlayerHeight - 10) ||

			(tempEnemyShotPosX + tempEnemyShotWidth - 16) >= tempPlayerPosX &&
			(tempEnemyShotPosX + 15) <= (tempPlayerPosX + tempPlayerWidth) &&
			(tempEnemyShotPosY + tempEnemyShotHeight - 30) >= tempPlayerPosY &&
			tempEnemyShotPosY <= (tempPlayerPosY + tempPlayerHeight)
		) {
			spaceShooter.playerExplosion();
			arrEnemyShotsRepository.splice(k, 1);
			if (playerKilledCheck) {
				playerKilledCheck = false;
				spaceShooter.initExplosion(imageExplosionPlayer, arrExplosionPlayerRepository, activeEplosionImagePlayer[0], 100, 100, player1.shipPositionX - 33, player1.shipPositionY - 18);
			}
		}
	}
	// **********************************************************************

	// collision group enemy ships vs player ship ***************************
	this.collisionDetectionEnemyShipsAndPlayerShip = function (arrEnemyRepository) {
		for (var i = 0; i < arrEnemyRepository.length; i++) {
			var tempEnemy2PosX = arrEnemyRepository[i].shipPositionX;
			var tempEnemy2PosY = arrEnemyRepository[i].shipPositionY;
			var tempEnemy2Width = arrEnemyRepository[i].sourceWidth;
			var tempEnemy2Height = arrEnemyRepository[i].sourceHeight;

			var tempPlayer2PosX = player1.shipPositionX;
			var tempPlayer2PosY = player1.shipPositionY;
			var tempPlayer2Width = player1.sourceWidth;
			var tempPlayer2Height = player1.sourceHeight;

			if (
				(tempPlayer2PosX + 18) <= (tempEnemy2PosX + tempEnemy2Width) &&
				(tempPlayer2PosX + tempPlayer2Width - 18) >= tempEnemy2PosX &&
				(tempPlayer2PosY - 16) <= tempEnemy2PosY &&
				(tempPlayer2PosY + tempPlayer2Height - 22) >= tempEnemy2PosY ||

				(tempPlayer2PosX + 15) <= (tempEnemy2PosX + tempEnemy2Width) &&
				(tempPlayer2PosX + tempPlayer2Width - 15) >= tempEnemy2PosX &&
				(tempPlayer2PosY - 6) <= tempEnemy2PosY &&
				(tempPlayer2PosY + tempPlayer2Height - 15) >= tempEnemy2PosY ||

				(tempPlayer2PosX + 6) <= (tempEnemy2PosX + tempEnemy2Width) &&
				(tempPlayer2PosX + tempPlayer2Width - 6) >= tempEnemy2PosX &&
				(tempPlayer2PosY) <= tempEnemy2PosY &&
				(tempPlayer2PosY + tempPlayer2Height - 8) >= tempEnemy2PosY ||

				(tempPlayer2PosX + 15) <= (tempEnemy2PosX + tempEnemy2Width) &&
				(tempPlayer2PosX + tempPlayer2Width - 15) >= tempEnemy2PosX &&
				(tempPlayer2PosY + 10) <= tempEnemy2PosY &&
				(tempPlayer2PosY + tempPlayer2Height) >= tempEnemy2PosY
			) {
				spaceShooter.playerExplosion();
				if (playerKilledCheck) {
					playerKilledCheck = false;
					spaceShooter.initExplosion(imageExplosionPlayer, arrExplosionPlayerRepository, activeEplosionImagePlayer[0], 100, 100, player1.shipPositionX - 33, player1.shipPositionY - 18);
				}
			}
		}
	};

	this.collisionDetectionEnemyShipsAndPlayerShip(arrEnemyRepository);
	// **********************************************************************

	// collision group asteroid vs player ship ******************************
	this.collisionDetectionPlayerShipAndAsteroids = function (arrAsteroidRepository) {
		for (var i = 0; i < arrAsteroidRepository.length; i++) {
			var tempAsteroidPosX = arrAsteroidRepository[i].asteroidPositionX;
			var tempAsteroidPosY = arrAsteroidRepository[i].asteroidPositionY;
			var tempAsteroidWidth = arrAsteroidRepository[i].sourceWidth;
			var tempAsteroidHeight = arrAsteroidRepository[i].sourceHeight;

			var tempPlayerPosX = player1.shipPositionX;
			var tempPlayerPosY = player1.shipPositionY;
			var tempPlayerWidth = player1.sourceWidth;
			var tempPlayerHeight = player1.sourceHeight;

			if (
				(tempPlayerPosX + 18) <= (tempAsteroidPosX + tempAsteroidWidth) &&
				(tempPlayerPosX + tempPlayerWidth - 18) >= tempAsteroidPosX &&
				(tempPlayerPosY - 30) <= tempAsteroidPosY &&
				(tempPlayerPosY + tempPlayerHeight - 22) >= tempAsteroidPosY ||

				(tempPlayerPosX + 15) <= (tempAsteroidPosX + tempAsteroidWidth) &&
				(tempPlayerPosX + tempPlayerWidth - 15) >= tempAsteroidPosX &&
				(tempPlayerPosY - 6) <= tempAsteroidPosY &&
				(tempPlayerPosY + tempPlayerHeight - 15) >= tempAsteroidPosY ||

				(tempPlayerPosX + 6) <= (tempAsteroidPosX + tempAsteroidWidth) &&
				(tempPlayerPosX + tempPlayerWidth - 6) >= tempAsteroidPosX &&
				(tempPlayerPosY) <= tempAsteroidPosY &&
				(tempPlayerPosY + tempPlayerHeight - 8) >= tempAsteroidPosY ||

				(tempPlayerPosX + 15) <= (tempAsteroidPosX + tempAsteroidWidth) &&
				(tempPlayerPosX + tempPlayerWidth - 15) >= tempAsteroidPosX &&
				(tempPlayerPosY + 10) <= tempAsteroidPosY &&
				(tempPlayerPosY + tempPlayerHeight) >= tempAsteroidPosY
			) {
				spaceShooter.playerExplosion();
				if (playerKilledCheck) {
					playerKilledCheck = false;
					spaceShooter.initExplosion(imageExplosionPlayer, arrExplosionPlayerRepository, activeEplosionImagePlayer[0], 100, 100, player1.shipPositionX - 33, player1.shipPositionY - 18);
				}
			}
		}
	};

	this.collisionDetectionPlayerShipAndAsteroids(arrAsteroidRepository);
	// **********************************************************************

	// collision group small asteroid vs player ship ************************
	this.collisionDetectionPlayerShipAndSmallAsteroids = function (arrAsteroidRepository) {
		for (var i = 0; i < arrAsteroidRepository.length; i++) {
			var tempAsteroidPosX = arrAsteroidRepository[i].asteroidPositionX;
			var tempAsteroidPosY = arrAsteroidRepository[i].asteroidPositionY;
			var tempAsteroidWidth = arrAsteroidRepository[i].sourceWidth;
			var tempAsteroidHeight = arrAsteroidRepository[i].sourceHeight;

			var tempPlayerPosX = player1.shipPositionX;
			var tempPlayerPosY = player1.shipPositionY;
			var tempPlayerWidth = player1.sourceWidth;
			var tempPlayerHeight = player1.sourceHeight;

			if (
				(tempPlayerPosX + 18) <= (tempAsteroidPosX + tempAsteroidWidth) &&
				(tempPlayerPosX + tempPlayerWidth - 18) >= tempAsteroidPosX &&
				(tempPlayerPosY - 18) <= tempAsteroidPosY &&
				(tempPlayerPosY + tempPlayerHeight - 22) >= tempAsteroidPosY ||

				(tempPlayerPosX + 15) <= (tempAsteroidPosX + tempAsteroidWidth) &&
				(tempPlayerPosX + tempPlayerWidth - 15) >= tempAsteroidPosX &&
				(tempPlayerPosY - 6) <= tempAsteroidPosY &&
				(tempPlayerPosY + tempPlayerHeight - 15) >= tempAsteroidPosY ||

				(tempPlayerPosX + 6) <= (tempAsteroidPosX + tempAsteroidWidth) &&
				(tempPlayerPosX + tempPlayerWidth - 6) >= tempAsteroidPosX &&
				(tempPlayerPosY) <= tempAsteroidPosY &&
				(tempPlayerPosY + tempPlayerHeight - 8) >= tempAsteroidPosY ||

				(tempPlayerPosX + 15) <= (tempAsteroidPosX + tempAsteroidWidth) &&
				(tempPlayerPosX + tempPlayerWidth - 15) >= tempAsteroidPosX &&
				(tempPlayerPosY + 10) <= tempAsteroidPosY &&
				(tempPlayerPosY + tempPlayerHeight) >= tempAsteroidPosY
			) {
				spaceShooter.playerExplosion();
				if (playerKilledCheck) {
					playerKilledCheck = false;
					spaceShooter.initExplosion(imageExplosionPlayer, arrExplosionPlayerRepository, activeEplosionImagePlayer[0], 100, 100, player1.shipPositionX - 33, player1.shipPositionY - 18);
				}
			}
		}
	};

	this.collisionDetectionPlayerShipAndSmallAsteroids(arrAsteroidSmallRepository);
	// **********************************************************************

	// collision group player shots vs asteroids ****************************
	this.collisionDetectionPlayerShotOnAsteroids = function (arrAsteroidRepository) {
		for (var i = 0; i < arrShotsRepository.length; i++) {
			var tempShotPosX = arrShotsRepository[i].shotPositionX;
			var tempShotPosY = arrShotsRepository[i].shotPositionY;
			var tempShotWidth = arrShotsRepository[i].sourceWidth;
			var tempShotHeight = arrShotsRepository[i].sourceHeight;

			for (var j = 0; j < arrAsteroidRepository.length; j++) {
				var tempAsteroidPosX = arrAsteroidRepository[j].asteroidPositionX;
				var tempAsteroidPosY = arrAsteroidRepository[j].asteroidPositionY;
				var tempAsteroidWidth = arrAsteroidRepository[j].sourceWidth;
				var tempAsteroidHeight = arrAsteroidRepository[j].sourceHeight;

				if (
					(tempShotPosX + tempShotWidth) >= tempAsteroidPosX &&
					tempShotPosX <= (tempAsteroidPosX + tempAsteroidWidth) &&
					tempShotPosY <= (tempAsteroidPosY + tempAsteroidHeight - 7) &&
					(tempShotPosY + tempShotHeight) >= tempAsteroidPosY
				) {
					spaceShooter.scoreGenerator(1);
					spaceShooter.asteroidExplosion();
					spaceShooter.initExplosion(imageExplosionAsteroid, arrExplosionAsteroidRepository, arrActiveEplosionImageOnAsteroid, 38, 38, arrAsteroidRepository[j].asteroidPositionX, arrAsteroidRepository[j].asteroidPositionY + 2);
					spaceShooter.asteroidCenteredRandomDirection(arrAsteroidSmallRepository, imageAsteroidSmall, arrAsteroidRepository[j].asteroidPositionX - 2, arrAsteroidRepository[j].asteroidPositionY + 12, 20, 20, 2, 10, 5, 20, false, true);
					spaceShooter.asteroidCenteredRandomDirection(arrAsteroidSmallRepository, imageAsteroidSmall, arrAsteroidRepository[j].asteroidPositionX + 18, arrAsteroidRepository[j].asteroidPositionY + 12, 20, 20, 2, 10, 5, 20, true, true);
					arrShotsRepository.splice(i, 1);
					arrAsteroidRepository.splice(j, 1);
				}
			}
		}
	};

	this.collisionDetectionPlayerShotOnAsteroids(arrAsteroidRepository);
	// **********************************************************************

	// collision group player shots vs small asteroids **********************
	this.collisionDetectionPlayerShotOnSmallAsteroids = function (arrAsteroidRepository) {
		for (var i = 0; i < arrShotsRepository.length; i++) {
			var tempShotPosX = arrShotsRepository[i].shotPositionX;
			var tempShotPosY = arrShotsRepository[i].shotPositionY;
			var tempShotWidth = arrShotsRepository[i].sourceWidth;
			var tempShotHeight = arrShotsRepository[i].sourceHeight;

			for (var j = 0; j < arrAsteroidRepository.length; j++) {
				var tempAsteroidPosX = arrAsteroidRepository[j].asteroidPositionX;
				var tempAsteroidPosY = arrAsteroidRepository[j].asteroidPositionY;
				var tempAsteroidWidth = arrAsteroidRepository[j].sourceWidth;
				var tempAsteroidHeight = arrAsteroidRepository[j].sourceHeight;

				if (
					(tempShotPosX + tempShotWidth) >= (tempAsteroidPosX + 1) &&
					tempShotPosX <= (tempAsteroidPosX + tempAsteroidWidth) &&
					tempShotPosY <= (tempAsteroidPosY + tempAsteroidHeight - 3) &&
					(tempShotPosY + tempShotHeight) >= tempAsteroidPosY
				) {
					spaceShooter.scoreGenerator(1);
					spaceShooter.asteroidSmallExplosion();
					spaceShooter.initExplosion(imageExplosionSmallAsteroid, arrExplosionSmallAsteroidRepository, arrActiveEplosionImageOnSmallAsteroid, 23, 23, arrAsteroidRepository[j].asteroidPositionX - 1, arrAsteroidRepository[j].asteroidPositionY);
					arrShotsRepository.splice(i, 1);
					arrAsteroidRepository.splice(j, 1);
				}
			}
		}
	};

	this.collisionDetectionPlayerShotOnSmallAsteroids(arrAsteroidSmallRepository);
	// **********************************************************************
};