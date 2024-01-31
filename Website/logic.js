document.addEventListener('DOMContentLoaded', function() {
	const gameArea = document.getElementById("gameArea");
	const leftPaddle = document.getElementById("leftPaddle");
	const rightPaddle = document.getElementById("rightPaddle");
	const ball = document.getElementById("ball");
	const scoreDisplay = document.getElementById("score");

	let leftPaddleY = gameArea.offsetHeight / 2 - leftPaddle.offsetHeight / 2;
	let rightPaddleY = gameArea.offsetHeight / 2 - rightPaddle.offsetHeight / 2;
	//let ballX = gameArea.offsetWidth / 2 - ball.offsetWidth / 2;
	let ballX = 0;
	let ballY = gameArea.offsetHeight / 2 - ball.offsetHeight / 2;
	let ballSpeedX = 2;
	let ballSpeedY = 2;
	let leftScore = 0;
	let rightScore = 0;

document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowUp":
            if (rightPaddleY > 0) rightPaddleY -= 10;
            break;
        case "ArrowDown":
            if (rightPaddleY < gameArea.offsetHeight - rightPaddle.offsetHeight) rightPaddleY += 10;
            break;
        case "w":
            if (leftPaddleY > 0) leftPaddleY -= 10;
            break;
        case "s":
            if (leftPaddleY < gameArea.offsetHeight - leftPaddle.offsetHeight) leftPaddleY += 10;
            break;
    }
});

resetBall();

function update() {
    // Updating paddle positions
    leftPaddle.style.top = leftPaddleY + "px";
    rightPaddle.style.top = rightPaddleY + "px";

    // Ball movement logic
    ballX += ballSpeedX;
    ballY += ballSpeedY;

	ball.style.left = ballX + "px";
	ball.style.top = ballY + "px";

    // Collision detection with top and bottom walls
    if (ballY <= 0 || ballY + ball.offsetHeight >= gameArea.offsetHeight) {
        ballSpeedY *= -1;
    }

    // Collision detection with paddles
    if ((ballX <= leftPaddle.offsetWidth && ballY >= leftPaddleY && ballY <= leftPaddleY + leftPaddle.offsetHeight) || 
        (ballX + ball.offsetWidth >= gameArea.offsetWidth - rightPaddle.offsetWidth && ballY >= rightPaddleY && ballY <= rightPaddleY + rightPaddle.offsetHeight)) {
        ballSpeedX *= -1.1;
    }

    // Scoring
    if (ballX < 0) {
        rightScore++;
        resetBall();
    } else if (ballX > gameArea.offsetWidth - ball.offsetWidth) {
        leftScore++;
        resetBall();
    }

    scoreDisplay.textContent = "Player 1: " + leftScore + " | Player 2: " + rightScore;

    requestAnimationFrame(update);
}

function resetBall() {
    ballX = gameArea.offsetWidth / 2 - ball.offsetWidth / 2;
    ballY = gameArea.offsetHeight / 2 - ball.offsetHeight / 2;
    ballSpeedX = 2;
    ballSpeedY = Math.random() * 2 + 1;

	if (Math.random() > 0.5) { ballSpeedX *= -1; }
	if (Math.random() > 0.5) { ballSpeedY *= -1; }

	ball.style.left = ballX + "px";
	ball.style.top = ballY + "px";
}

// Start the game loop
requestAnimationFrame(update);

});