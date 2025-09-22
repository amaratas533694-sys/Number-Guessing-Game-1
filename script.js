'use strict'

let randomNumber;
let attempts;

function initGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

     console.log("🔢 New game started. The number is:", randomNumber);

    document.getElementById("result").textContent = "";
    document.getElementById("guessInput").value = "";
    document.getElementById("guessInput").disabled = false;
    document.getElementById("guessBtn").disabled = false;
    document.getElementById("resetBtn").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    initGame();

    const guessBtn = document.getElementById("guessBtn");
    const resetBtn = document.getElementById("resetBtn");

    guessBtn.addEventListener("click", () => {
        const guessInput = document.getElementById("guessInput");
        const result = document.getElementById("result");
        const userGuess = Number(guessInput.value);

        if (!userGuess || userGuess < 1 || userGuess > 100) {
            result.textContent = "Please enter a valid number between 1 and 100.";
            result.style.color = "red";
            return;
        }
        attempts++;

        if (userGuess === randomNumber) {
            result.textContent = `Correct! The number was ${randomNumber}. You guessed it in ${attempts} tries.`;
            result.style.color = "green";
            guessInput.disabled = true;
            guessBtn.disabled = true;
            resetBtn.style.display = "block";
        } else if (userGuess < randomNumber) {
            result.textContent = "Too low! Try again.";
            result.style.color = "blue";
        } else {
            result.textContent = "Too high! Try again.";
            result.style.color = "orange";
        }

        guessInput.value = "";
        guessInput.focus();
    });

    resetBtn.addEventListener("click", () => {
        initGame();
    });
});
