
//Computer randomli picks rock/paper/scissors and return the value
function getComputerSelection(){
    const arr = ["rock", "paper", "scissors"];
    let a = Math.random() * arr.length;
    let b = Math.floor(a);
    let choice = arr[Math.floor(Math.random() * arr.length)];
    return choice;
}

//Based on the html "id", we store and return our selection in the "selection" variable
function getPlayerSelection(button_id){
    let selection = "";
    switch(button_id) {
        case "rock":
            selection = "rock";
            break;
        case "paper":
            selection = "paper";
            break;
        case "scissors":
            selection = "scissors"
            break;
    }

    return selection;
}


//Match our choice against computer's. Plays 1 round and then dynamically creates messages with the outcome
function playRound(computerChoice, playerChoice) {
    
   
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

    //Dynamic content creation with message
    function showMessage(result){
        const p = document.createElement("p");
        let winMessage = `You won! ${playerChoice} beats ${computerChoice}`;
        let loseMessage = `You lost! Your ${playerChoice} is beaten by ${computerChoice}`;
        let tieMessage = `It's a tie! You both have ${playerChoice}`;
        let message=""
        switch (result) {
            case "win":
                message = winMessage;
                p.style.backgroundColor = "green";
                break;
            case "lost":
                message = loseMessage;
                p.style.backgroundColor = "red";
                break;
            case "tie":
                message = tieMessage;
                break;
        }
        
        p.textContent = message;
        history.appendChild(p);
    }
    showMessage(outcome())
  

   
    return outcome();
}







//variables to reference html elements
const history = document.querySelector("#history");
const player = document.querySelector("#playerid");
const computer = document.querySelector("#computerid");
const buttons = document.querySelectorAll("img");

//variables to store playstate
let playerScore = 0;
let computerScore = 0;
let numberOfRounds = 0;


//add eventlisteners to the html images which act like buttons

for(i=0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function (e){
        let x= e.target.id;
        console.log(x);
        let result = playRound(getComputerSelection(),getPlayerSelection(x));

        //refresh playstate after a round
        if(result == "win") {
            playerScore+=1;
            numberOfRounds += 1;
        }
        else if(result == "tie") {
            numberOfRounds += 1;
        }
         else if(result == "lost") {
            numberOfRounds += 1;
            computerScore += 1;
         }
         //refresing the "Score" section in the htnl file with playstate
         player.textContent = playerScore;
         computer.textContent = computerScore;

         //if we played 10 round, playstate resets
         if(numberOfRounds > 10) {
            if (computerScore > playerScore){
                alert("Game has finished. You lost!")
            } else if (computerScore < playerScore){
                alert("Game has finished. You won!")
            } else {
                alert("It's a tie");
            }
            
           
            playerScore = 0;
            computerScore = 0;
            numberOfRounds =0;
            history.textContent = "";
         }
    }) 
}




