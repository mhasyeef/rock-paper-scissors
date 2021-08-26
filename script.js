const choices = ['Rock', 'Paper', 'Scissors'];  //computer choice array
    let score = 0;
    let playerScore = 0;
    let computerScore = 0;

    //computer choice is randomized based on array choices
    function computerPlay(){
        const randomChoice = Math.floor(Math.random() * choices.length);
        return choices[randomChoice];
    }

    //winner or loser is determined based on player and computer choice
    function playRound(playerSelection, computerSelection){ 

        if(playerSelection === "PAPER"){
            if(computerSelection === "Paper"){
                console.log("It's a draw!")
            }else if(computerSelection === "Rock"){
                playerScore += 1;
                console.log("You Win! Paper beats rock!")
            }else if(computerSelection === "Scissors"){
                computerScore += 1;
                console.log("You lose! Scissors beat Rock!")
            }
        }else if(playerSelection === "ROCK"){
            if(computerSelection === "Paper"){         
                computerScore += 1;       
                console.log("You Lose! Paper beats Rock!")
            }else if(computerSelection === "Rock"){
                console.log("It's a draw!")
            }else if(computerSelection === "Scissors"){
                playerScore += 1;
                console.log("You win! Scissors beat Rock!")
            }
        }else if(playerSelection === "SCISSORS"){
            if(computerSelection === "Paper"){
                playerScore += 1;
                console.log("You Win! Scissors beats Paper!")
            }else if(computerSelection === "Rock"){
                computerScore += 1;
                console.log("You lose! Rock beats Scissors!")
            }else if(computerSelection === "Scissors"){
                console.log("It's a draw!")
            }
        }else{
            alert("You have entered an invalid choice! Please enter again.");
            return;
        }
    }

    //loops through 5 rounds of the game with score
    function game(){

        for(let i = 1; i <= 5; i++){
            const playerSelectionCase = prompt("Choose Rock, Paper or Scissors"); //user prompt for player choice
            const playerSelection = playerSelectionCase.toUpperCase();  //allows for case insensitivity
            console.log("You chose: " + playerSelection);

            const computerSelection = computerPlay();   //calls function for computer choice
            console.log("Computer chose: " + computerSelection);

            playRound(playerSelection, computerSelection);      //winner and loser is determined per round
            
           
            console.log("Your score is: " + playerScore);
            console.log("Computer score is: " + computerScore);
        }
        return score;
    }

    game();