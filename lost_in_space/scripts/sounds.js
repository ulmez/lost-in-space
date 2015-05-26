var playerShotSound;
var enemyShotSound1;
var enemyShotSound2;
var explosionEnemyShip;
var explosionAsteroid;
var explosionSmallAsteroid;
var explosionPlaye;
var backgroundMusic;

if ($.browser.name !== "opera") {
	playerShotSound = new Howl({
	  urls: [laserShotPlayerMp3],
	  volume: 0.1
	});

	enemyShotSound1 = new Howl({
	  urls: [laserShotEnemyShip1Mp3],
	  volume: 0.1
	});

	enemyShotSound2 = new Howl({
	  urls: [laserShotEnemyShip2Mp3],
	  volume: 0.1
	});

	explosionEnemyShip = new Howl({
	  urls: [explosionEnemyShipMp3],
	  volume: 0.1
	});

	explosionAsteroid = new Howl({
	  urls: [explosionAsteroidMp3],
	  volume: 0.1
	});

	explosionSmallAsteroid = new Howl({
	  urls: [explosionSmallAsteroidMp3],
	  volume: 0.1
	});

	explosionPlayer = new Howl({
	  urls: [explosionPlayerMp3]//,
	});

	backgroundMusic = new Howl({
	  urls: [bossBackgroundMusicMp3],
	  loop: true
	});
} else {
	playerShotSound = new Howl({
	  urls: [laserShotPlayerOgg],
	  volume: 0.1
	});

	enemyShotSound1 = new Howl({
	  urls: [laserShotEnemyShip1Ogg],
	  volume: 0.1
	});

	enemyShotSound2 = new Howl({
	  urls: [laserShotEnemyShip2Ogg],
	  volume: 0.1
	});

	explosionEnemyShip = new Howl({
	  urls: [explosionEnemyShipOgg],
	  volume: 0.1
	});

	explosionAsteroid = new Howl({
	  urls: [explosionAsteroidOgg],
	  volume: 0.1
	});

	explosionSmallAsteroid = new Howl({
	  urls: [explosionSmallAsteroidOgg],
	  volume: 0.1
	});

	explosionPlayer = new Howl({
	  urls: [explosionPlayerOgg]//,
	});

	backgroundMusic = new Howl({
	  urls: [bossBackgroundMusicOgg],
	  loop: true
	});
}

spaceShooter.playerLaserShot = function () {
	playerShotSound.play();
};

spaceShooter.enemyLaserShot1 = function () {
	enemyShotSound1.play();
};

spaceShooter.enemyLaserShot2 = function () {
	enemyShotSound2.play();
};

spaceShooter.enemyExplosion = function () {
	explosionEnemyShip.play();
};

spaceShooter.asteroidExplosion = function () {
	explosionAsteroid.play();
};

spaceShooter.asteroidSmallExplosion = function () {
	explosionSmallAsteroid.play();
};

spaceShooter.playerExplosion = function () {
	if (playerAlreadyExplodedCheck) {
		playerAlreadyExplodedCheck = false;
		explosionPlayer.play();
	}
};

spaceShooter.gameBackgroundMusic = function () {
	backgroundMusic.play();
};

spaceShooter.gameBackgroundMusicStop = function () {
	backgroundMusic.stop();
};