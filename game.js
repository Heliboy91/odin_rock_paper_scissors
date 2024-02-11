
/*
1. Create function getComputerChoice: randomly returns rock,paper,or scissors for computer
    -create an array with the values
    -use math.random() to pick one value from the array
    -create random number
    -multiply it with the array's length
    -round it to integer
    -use number as index-number in "arr" 
    -save it in the choice variable
    -return the variable 
*/

function getComputerSelection(){
    const arr = ["rock", "paper", "scissors"];
    let a = Math.random() * arr.length;
    let b = Math.floor(a);
    let choice = arr[Math.floor(Math.random() * arr.length)];
    return choice;
    

}




/* 
2. Create the playerSelection variable
    - saves user input on promt
    - At promt, you can use "p" or "P" for paper, "r" or "R" for rock etc 
    - we convert input to the appropiate version
*/
function getPlayerSelection(){
    let playerChoice = prompt("Choose 'R'- rock / 'P'- paper / 'S'-scissors");
    let lowCasedChoice = playerChoice.toLowerCase();
    console.log("Lowcased choice: " + lowCasedChoice);
    let selected = "";
    if (lowCasedChoice[0] == "r"){
        selected = "rock";
    }
    else if (lowCasedChoice[0] == "p") {
        selected = "paper";
    }
    else if (lowCasedChoice[0] == "s") {
        selected = "scissors";
    }
    else {
        alert("Invalid choice");
        selected = false;
    }

    return selected;
}






/* 
3. Play a single round using "playerSelection" and "computerSelection"
    - create the function "round" that takes in two variable
    - check who wins
    - create default message for winning, losing, tie
    - return message for player
    

*/

function round(computerChoice, playerChoice) {
    console.log("Computer: " + computerChoice + " VS " + "Player: " + playerChoice);
    
    //messages
  
    
    //deciding outcomes
    function outcome(){
        let outcome;
        if (playerChoice == computerChoice) {
            outcome = "tie";
        }
    
        else if (playerChoice == "rock" && computerChoice == "scissors") {
            outcome = "win";
        }
        else if  (playerChoice == "scissors" && computerChoice == "paper") {
            outcome = "win";
        }
        else if (playerChoice == "paper" && computerChoice == "rock") {
            outcome = "win";
        }
    
        else {
            outcome = "lost";
        }

        return outcome; 
    }

    outcome();
    showMessage(outcome())
    //showing message
    function showMessage(result){
        
        let winMessage = `You won! ${playerChoice} beats ${computerChoice}`;
        let loseMessage = `You lost! Your ${playerChoice} is beaten by ${computerChoice}`;
        let tieMessage = `It's a tie! You both have ${playerChoice}`;
        let message=""
        switch (result) {
            case "win":
                message = winMessage;
                break;
            case "lost":
                message = loseMessage;
                break;
            case "tie":
                message = tieMessage;
                break;
        }
        return message;
    }
    
    
    console.log("Outcome function: " + outcome());
    console.log("Showmessage function: " + showMessage(outcome()));

   

}

round(getComputerSelection(), getPlayerSelection());

    








//Return a string with Winner/tie
//Make the player's choise case insensitive

//Create the function playGame(), which nests all the functions
// Plays 5 rounds



