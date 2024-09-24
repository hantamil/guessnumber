console.log("i am in guessnumber")

const lblMessage = document.querySelector(".message"); //doku not defined?????
console.log(lblMessage);
console.log(lblMessage.textContent)

const lblNumber = document.querySelector(".number");
console.log(lblNumber);

const lblScore = document.querySelector(".score");
console.log(lblScore);

const lblHighscore = document.querySelector(".highscore")

const inpGuess = document.querySelector(".guess");
out(inpGuess);

const btnCheck = document.querySelector(".check")

const btnAgain = document.querySelector(".again")

//variabler
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message){
    lblMessage.textContent = message;
}

if(!inpGuess){
    displayMessage("Not a number!");
}
else if (guess == secretNumber){
    displayMessage("You guessed the correct number! Congratulations!")
    lblNumber.textContent = secretNumber;

    if (score > highscore){
        highscore = score;
        lblHighscore.textContent = highscore;
    }
}

else if(guess !== secretNumber){
    if (score > 1){
        displayMessage(guess > secretNumber ? "You guessed too high!" : "You guessed too low!");
        score--; //giver minus point v forkert gæt
        lblScore.textContent = score;
    }
    else {
        displayMessage("You lost...")
        lblScore.textContent = 0;
    }
}


