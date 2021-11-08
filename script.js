const computerChoice = ['rock', 'paper', 'scissors'];  //computer choice array
let playerScore = 0;
let computerScore = 0;
const playerScoreDisplay = document.getElementById('your-score');
const computerScoreDisplay = document.getElementById('computer-score');
const playerChoiceDisplay = document.getElementById('your-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('results');
const main = document.getElementsByClassName('main');

//computer choice is randomized based on array choices
function computerPlay(){
    const randomChoice = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[randomChoice];
}

//event listener to reload page when try again button is clicked
const retryBtn = document.getElementById('retryBtn');
retryBtn.addEventListener('click', restartGame);
function restartGame(){
    window.location.reload();
};

//runs game logic whenever user makes a choice
const selections = document.querySelectorAll('.choice');
selections.forEach(selection => selection.addEventListener('click', game));
function game(e){
    //to assign player and computer choices
    const player = e.target.id;
    const computer = computerPlay();

    //results
    results = playRound(player, computer);
    let result = results;

    //displays the score
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    //displays the choices
    playerChoiceDisplay.textContent = "You chose: "+ player;
    computerChoiceDisplay.textContent = "Computer chose: "+ computer;

    //displays the result
    resultDisplay.textContent = result;

    //first to win 5 times
    if(computerScore >= 5){
        resultDisplay.textContent = "The computer has won this round. Try again?"
        retryBtn.style.visibility = "visible";   
        playerChoiceDisplay.remove(); 
        computerChoiceDisplay.remove(); 
        for(let i = main.length -1; i >= 0; i--){
            main[i].remove();
        }
        return;
    }else if(playerScore >= 5){
        resultDisplay.textContent = "Congratulations! You have won this round. Try again?"
        retryBtn.style.visibility = "visible"; 
        playerChoiceDisplay.remove(); 
        computerChoiceDisplay.remove(); 
        for(let i = main.length -1; i >= 0; i--){
            main[i].remove();
        }
        return;
    }

    return results;   
}

//determines the winner or loser based on first to 5 wins
function playRound(playerSelection, computerSelection){
    for(i=0; i<=5; i++){
        if(playerSelection === "paper"){
            if(computerSelection === "paper"){
                return "It's a draw!"
            }else if(computerSelection === "rock"){
                playerScore += 1;
                return "You Win! Paper beats rock!"
            }else if(computerSelection === "scissors"){
                computerScore += 1;
                return "You lose! Scissors beat Paper!"
            }
        }else if(playerSelection === "rock"){
            if(computerSelection === "paper"){         
                computerScore += 1;       
                return "You Lose! Paper beats Rock!"
            }else if(computerSelection === "rock"){
                return "It's a draw!"
            }else if(computerSelection === "scissors"){
                playerScore += 1;
                return "You win! Rock beats Scissors!"
            }
        }else if(playerSelection === "scissors"){
            if(computerSelection === "paper"){
                playerScore += 1;
                return "You Win! Scissors beats Paper!"
            }else if(computerSelection === "rock"){
                computerScore += 1;
                return "You lose! Rock beats Scissors!"
            }else if(computerSelection === "scissors"){
                return "It's a draw!"
            }
        }
    }
    
};