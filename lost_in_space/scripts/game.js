// Variable declaration
var doAnim = false;
var delayX = 0;
var activeX = 2;
var gameCtx = canvasGame.get(0).getContext("2d");
var playerKilledCheck = true;
var playerAlreadyExplodedCheck = true;

// player
var player1 = new spaceShooter.playerShip(activeShipImage, 0, 40, 40, 0, 0);
var player1Propulsion = new spaceShooter.playerShipPropulsion(0, 0, 17, 17, 0);

function clearRect() {
	gameCtx.clearRect(0, 0, canvasGameWidth, canvasGameHeight);
	explosionCtx.clearRect(0, 0, canvasGameWidth, canvasGameHeight);
}

// Here all the moving in the game happen
function animate() {
	clearRect();

	spaceShooter.starfieldBackground(1);
	spaceShooter.shipDirection(1.4);
	spaceShooter.shipPropulsionSprite(3);

	if (playerKilledCheck) {
		player1.sourceX = activeShipImage;
		player1Propulsion.sourceY = activePropulsionShipImage;
		gameCtx.drawImage(player1.imagePlayerShip, player1.sourceX, player1.sourceY, player1.sourceWidth, player1.sourceHeight, ((canvasGameWidth - player1.sourceWidth) / 2) + shipPosX, (canvasGameHeight - player1.sourceHeight - 20) + shipPosY, player1.sourceWidth, player1.sourceHeight);
		gameCtx.drawImage(player1Propulsion.imagePropulsionPlayerShip, player1Propulsion.sourceX, player1Propulsion.sourceY, player1Propulsion.sourceWidth, player1Propulsion.sourceHeight, (((canvasGameWidth - player1Propulsion.sourceWidth) / 2) + 0.3) + shipPosX, (canvasGameHeight - player1Propulsion.sourceHeight - 8) + shipPosY, player1Propulsion.sourceWidth, player1Propulsion.sourceHeight);
		player1.shipPositionX = ((canvasGameWidth - player1.sourceWidth) / 2) + shipPosX;
		player1.shipPositionY = (canvasGameHeight - player1.sourceHeight - 20) + shipPosY;
	}

	spaceShooter.enemyShipPosition();
	spaceShooter.collisionDetection();

	spaceShooter.explosionSprite(arrExplosionRepository, arrActiveEplosionImageOnEnemyShip, 4, false);
	spaceShooter.explosionSprite(arrExplosionAsteroidRepository, arrActiveEplosionImageOnAsteroid, 3, false);
	spaceShooter.explosionSprite(arrExplosionSmallAsteroidRepository, arrActiveEplosionImageOnSmallAsteroid, 4, false);
	spaceShooter.explosionSprite(arrExplosionPlayerRepository, activeEplosionImagePlayer, 8, true);

	spaceShooter.handelingEnemyShots(2);
	spaceShooter.enemyShipMovement();

	spaceShooter.ZigZagGroup();
	spaceShooter.enemyShipsMaintenance();
	spaceShooter.enemyShipsLeftRightMaintenance();
	spaceShooter.enemyShipsOneLeftCircleMaintenance();
	spaceShooter.enemyShipsOneRightCircleMaintenance();
	spaceShooter.enemyShipsCircleMaintenance();
	spaceShooter.asteroidScheme();

	spaceShooter.AsteroidsMaintenance(arrAsteroidRepository);
	spaceShooter.AsteroidsMaintenance(arrAsteroidSmallRepository);

	if (doAnim) {
		setTimeout(animate, 1000 / 60);
	}
}

// initialize game
spaceShooter.initGame = function () {
	spaceShooter.initLevelOne();

	score = 0;
	$('#score').html(score);

	canvasHeightPos = 0;

	activePropulsionShipImage = 0;
	delayPropulsionX = 0;
	activePropulsionX = 0;

	shipVelocityX = 0;
	shipVelocityY = 0;
	shipPosX = 0;
	shipPosY = 0;
	delayX = 0;
	activeX = 2;
	playerKilledCheck = true;
	activeShipImage = arrActiveShipImage[2];
	rightKeyDown = "";
	leftKeyDown = "";
	downKeyDown = "";
	upKeyDown = "";
	fireDown = "";
	rightKeyUp = "";
	leftKeyUp = "";
	downKeyUp = "";
	upKeyUp = "";
	fireUp = "";
	firedOnceCheck = true;
	playerAlreadyExplodedCheck = true;
	twoKeyPressed = [];

	player1.shipPositionX = ((canvasGameWidth - player1.sourceWidth) / 2);
	player1.shipPositionY = (canvasGameHeight - player1.sourceHeight - 20);

	arrAsteroidRepository = [];
	arrAsteroidSmallRepository = [];
	arrEnemyRepository = [];
	arrEnemyShotsRepository = [];
	arrExplosionRepository = [];
	arrExplosionAsteroidRepository = [];
	arrExplosionSmallAsteroidRepository = [];
	arrExplosionPlayerRepository = [];
	arrShotsRepository = [];
};

// Start game
spaceShooter.startGame = function () {
	doAnim = true;

	spaceShooter.initGame();
	spaceShooter.gameBackgroundMusic();

	animate();
};

// Stop or pause game
spaceShooter.stopGame = function () {
	doAnim = false;
	spaceShooter.gameBackgroundMusicStop();
};

spaceShooter.scoreGenerator = function (scoreNumber) {
	score += scoreNumber;
	$('#score').html(score);
};

spaceShooter.menuBackground();

if (window.localStorage.highScore === undefined) {
	window.localStorage.highScore = 0;
}