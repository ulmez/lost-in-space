$(document).ready(function () {
	$('#score').hide();
	$('#playAgainHolder').hide();
	$('#instructionPage').hide();
	$('#informer').hide();
	$('#creditsPage').hide();

	$('#score').css({zIndex: 800});
	$('#instructionPage').css({zIndex: 800});
	$('#creditsPage').css({zIndex: 800});
	$('#playAgainHolder').css({zIndex: 800});
	$('#startMenuHolder').css({zIndex: 800});
	$('#headline').css({zIndex: 800});
	$('#informer').css({zIndex: 800});

	$('#instruction').click(function () {
		$('#instructionPage').fadeTo(500, 1);
		$('#score').hide();
		$('#startMenuHolder').hide();
		$('#playAgainHolder').hide();
		$('#headline').hide();
	});

	$('#instructionBackToMenu').click(function () {
		$('#instructionPage').hide();
		$('#score').hide();
		$('#startMenuHolder').fadeTo(500, 1);
		$('#headline').fadeTo(500, 1);
		$('#playAgainHolder').hide();
	});

	$('#credits').click(function () {
		$('#creditsPage').fadeTo(500, 1);
		$('#score').hide();
		$('#startMenuHolder').hide();
		$('#playAgainHolder').hide();
		$('#headline').hide();
	});

	$('#creditsBackToMenu').click(function () {
		$('#creditsPage').hide();
		$('#score').hide();
		$('#startMenuHolder').fadeTo(500, 1);
		$('#headline').fadeTo(500, 1);
		$('#playAgainHolder').hide();
	});

	$('#playGameBackToMenu').click(function () {
		spaceShooter.initGame();
		clearRect();
		spaceShooter.menuBackground();

		$('#highScore').html(window.localStorage.highScore);
		
		$('#instructionPage').hide();
		$('#score').hide();
		$('#playAgainHolder').hide();
		$('#startMenuHolder').fadeTo(500, 1);
		$('#headline').fadeTo(500, 1);
	});

	// start game from start menu
	$('#startGame').click(function () {
		$('#startMenuHolder').hide();
		$('#headline').hide();
		$('#informer').css({
			left: '25px'
		});
		$('#informer').html('FIND THE WAY BACK TO YOUR MOTHERSHIP');
		$('#informer').fadeTo(500, 1);

		setTimeout(function () {
			$('#informer').hide();
			$('#score').fadeTo(500, 1);
			spaceShooter.startGame();
		}, 5000);
	});

	// start game from play again menu
	$('#playAgain').click(function () {
		$('#informer').css({
			left: '25px'
		});
		$('#informer').html('FIND THE WAY BACK TO YOUR MOTHERSHIP');
		$('#informer').fadeTo(500, 1);
		$('#playAgainHolder').hide();

		clearRect();
		ctx.clearRect(0, 0, canvasGameWidth, canvasGameHeight);
		ctx.drawImage(background, 0, 0, canvasWidth, canvasHeight);

		setTimeout(function () {
			$('#informer').hide();
			$('#score').fadeTo(500, 1);
			spaceShooter.startGame();
		}, 5000);
	});

	$('#score').html(score);
	$('#highScore').html(window.localStorage.highScore);
});