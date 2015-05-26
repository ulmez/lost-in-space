var activePropulsionShipImage = 0;
var delayPropulsionX = 0;
var activePropulsionX = 0;
var arrActivePropulsionShipImage = [0, 17, 34];
var imagePropulsionPlayerShip = new Image();
imagePropulsionPlayerShip.src = propulsionImagePng;

// declaring of the propulsion
spaceShooter.playerShipPropulsion = function (sourceX, sourceY, sourceWidth, sourceHeight, propulsionPositionX) {
	this.sourceY = sourceY;
	this.sourceX = sourceX;
	this.sourceWidth = sourceWidth;
	this.sourceHeight = sourceHeight;
	this.propulsionPositionX = propulsionPositionX;
	this.imagePropulsionPlayerShip = imagePropulsionPlayerShip;
};

spaceShooter.shipPropulsionSprite = function (delayTime) {
	delayPropulsionX++;
	if (delayPropulsionX >= delayTime) {
		delayPropulsionX = 0;
		activePropulsionX++;
		if (activePropulsionX === 3) {
			activePropulsionX = 0;
		}
		activePropulsionShipImage = arrActivePropulsionShipImage[activePropulsionX];
	}
};