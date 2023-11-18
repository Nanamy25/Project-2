let wins = 0;
let ties = 0;
let losses = 0;

function playGame(userChoice){
    const choices = ['rock','paper','scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    if (userChoice===computerChoice){
        ties++;
        alert("It's a tie!");
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        wins++;
        alert("You win! You chose (" +userChoice +") and the computer chose (" +computerChoice +")");
    } else {
        losses++;
        alert("You lose! You chose (" +userChoice +") and the computer chose (" +computerChoice +")");
    }
    document.getElementById('wins').textContent = wins;
    document.getElementById('ties').textContent = ties;
    document.getElementById('losses').textContent = losses;
}
const main = document.querySelector('main');

const rockButton = document.createElement('button');
rockButton.textContent = 'Rock';
rockButton.addEventListener('click', function () {
    playGame('rock');
});
main.appendChild(rockButton);

const paperButton = document.createElement('button');
paperButton.textContent = 'Paper';
paperButton.addEventListener('click', function () {
    playGame('paper');
});
main.appendChild(paperButton);

const scissorsButton = document.createElement('button');
scissorsButton.textContent = 'Scissors';
scissorsButton.addEventListener('click', function () {
    playGame('scissors');
});
main.appendChild(scissorsButton);

const statsParagraph = document.createElement('h2');
statsParagraph.innerHTML = 'Wins: <span id="wins">0</span> | Ties: <span id="ties">0</span> | Losses: <span id="losses">0</span>';
main.appendChild(statsParagraph);
