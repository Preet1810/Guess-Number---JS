let minNumber = 0;
let maxNumber = parseInt(prompt("Enter a maximum Number"));
while (!maxNumber) {
    maxNumber = parseInt(prompt("Enter a Valid Number"));
}
const secretNumber = Math.round(Math.random() * (maxNumber - minNumber));
let userGuess = parseInt(prompt("Guess a Number"));
let attempts = 1;
while (!userGuess) {
    if (userGuess === 'q') {
        break;
    }
    else {
        userGuess = parseInt(prompt("Enter a Valid Number"));
    }
}

while (parseInt(userGuess) !== secretNumber) {
    if (userGuess === 'q') {
        break;
    }
    attempts++;

    if (userGuess > secretNumber) {
        userGuess = prompt("Higher, Try again");
    }
    else {
        userGuess = prompt("Lower, Try again");
    }
}
// console.log(userGuess);
if (userGuess === 'q') {
    console.log(`You quit!!`);
}
else {
    console.log(`You Got It!!!! It took you ${attempts} attempts`);
}