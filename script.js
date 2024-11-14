var 
randomNumber,
maxAttempts = 3,
attemptsLeft, 
difficulty;

document.getElementById("startBtn").onclick = function() {
    difficulty = parseInt(document.getElementById("difficulty").value);
    randomNumber = Math.floor(Math.random() * difficulty) + 1;
    attemptsLeft = maxAttempts;
    document.getElementById("feedback").textContent = '';
    document.getElementById("attempts").textContent = 'Attempts Remaining: ' + attemptsLeft;
    document.getElementById("gameSection").style.display = 'block';
    document.getElementById("tryAgainBtn").style.display = 'none';
    document.getElementById("guessBtn").disabled = false;
};

document.getElementById("guessBtn").onclick = function() {
    var userGuess = parseInt(document.getElementById("guessInput").value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > difficulty) {
        document.getElementById("feedback").textContent = 'Enter a number within the range!';
        return;
    }

    attemptsLeft--;
    
    if (userGuess === randomNumber) {
        document.getElementById("feedback").textContent = 'Correct! You guessed it!';
        endGame();
    } else if (attemptsLeft > 0) {
        document.getElementById("feedback").textContent = userGuess > randomNumber ? 'Too high!' : 'Too low!';
        document.getElementById("attempts").textContent = 'Attempts Remaining: ' + attemptsLeft;
    } else {
        document.getElementById("feedback").textContent = 'Out of attempts! The correct number was ' + randomNumber;
        endGame();
    }
};

function endGame() {
    document.getElementById("guessBtn").disabled = true;
    document.getElementById("tryAgainBtn").style.display = 'inline';
    document.getElementById("leaderboard").querySelector("pre").textContent += "Player: " + (maxAttempts - attemptsLeft) + " attempts\n";
}

document.getElementById("tryAgainBtn").onclick = function() {
    document.getElementById("guessInput").value = '';
    document.getElementById("feedback").textContent = '';
    document.getElementById("gameSection").style.display = 'none';
    document.getElementById("guessBtn").disabled = false;
};
