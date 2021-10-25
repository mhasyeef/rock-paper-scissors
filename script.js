const computerChoice = ['rock', 'paper', 'scissors'];  //computer choice array
let playerScore = 0;
let computerScore = 0;
const emojis = document.querySelectorAll('choice');
const retryBtn = document.getElementById('retryBtn');

//computer choice is randomized based on array choices
function computerPlay(){
    const randomChoice = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[randomChoice];
}


retryBtn.addEventListener('click', restartGame);
function restartGame(){
    window.location.reload();
};

const selections = document.querySelectorAll('.choice');
selections.forEach(selection => selection.addEventListener('click', game));

function game(e){
    const player = e.target.id;
    const computer = computerPlay();

    results = playRound(player, computer);

    //results stored in the "result" variable
    let result = results;

    //displayes the score
    document.getElementById("your-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;

    //displays the choices
    document.getElementById("your-choice").textContent = "You chose: "+ player;
    document.getElementById("computer-choice").textContent = "Computer chose: "+ computer;

    //displays the result
    document.getElementById("results").textContent = result;

    if(computerScore >= 5){
        document.getElementById("results").textContent = "The computer has won this round. Try again?"
        retryBtn.style.visibility = "visible";  //displays the "try again" button after win
    }else if(playerScore >= 5){
        document.getElementById("results").textContent = "Congratulations! You have won this round. Try again?"
        retryBtn.style.visibility = "visible";  //displays the "try again" button after win
    }

    return results;   
}

//determines the winner or loser
function playRound(playerSelection, computerSelection){
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
};