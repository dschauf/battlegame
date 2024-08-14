/* Battle Game Project 5/1/2024 */ 

// Add an event handler to the button 
document.getElementById("button").onclick = startBattle; 

// Definition of the startBattle() function which begins the game 
function startBattle() {
     // Clear any old messages in the web document from previous games
     document.getElementById("victory").textContent = "";
     document.getElementById("defeat").textContent = "";

     // Initial prompt for the user input to start the battle, this gets store in a variable
     let action = window.prompt("You're walking through the forest and a draugr suddenly appears!\n\nDo you FIGHT the draugr?\n\nDo you RUN from the draugr?\n\nWill you BRIBE the draugr?").toUpperCase();console.log(action);

     // Switch statement to handle the player's choice of action
     switch(action) {
          case "FIGHT": {
               fightBattle();
               break;
          } // end of case FIGHT
          case "RUN": {
               runBattle();
               break;
          } // end of case RUN
          case "BRIBE": {
               bribeBattle(); 
               break; 
          } // end of case BRIBE
          default: {
               // We're here because the user has not entered a valid choice
               window.alert("You entered: " + action +  ". That is NOT a valid choice! Please try again!");
               startBattle();
          } // end of default case 
     } // end of switch statement
} // end of startBattle ()

// Definition of the fightBattle() function
function fightBattle() {
     // Start collecting some new user input and store the response in variables
     let skill = window.prompt("Are you a skilled fighter?(YES OR NO)").toUpperCase();
     let strong = window.prompt("Do you think you're stronger than the draugr? (YES or NO)").toUpperCase;

     // Logic that analyzes the responses and creates the outcome
     if(skill === "YES" || strong === "YES") {
          document.getElementById("victory").innerHTML = "Alas! It seems you are quite powerful!<br/>You survive another day!";
          document.getElementById("button").textContent= "Try Again?";
          document.getElementById("win").play();
     } else {
          document.getElementById("defeat").innerHTML = "You are not skilled or strong?<br/>You have been defeated!";
          document.getElementById("button").textContent = "Try Again?";
          document.getElementById("lose").play();
     } // end of if/else
} // end of fightBattle ()

// Definition of the runBattle() function
function runBattle() {
     // Variable to store the user response
     let fast = window.prompt("Are you fast? (YES OR NO)").toUpperCase();
     // Logic to analyze the variable and provide the outcome
     if(fast === "YES") {
          document.getElementById("victory").innerHTML = "Your speed has saved you!<br/>But can you live with your cowardice?";
          document.getElementById("button").textContent= "Try Again?";
          document.getElementById("win").play();
     } else {
          document.getElementById("defeat").innerHTML = "You must be faster than a draugr!?<br/>You lose, good day sir!";
          document.getElementById("button").textContent = "Try Again?";
          document.getElementById("lose").play();
     } // end of if/else
} // end of runBattle()

// Definition of the bribeBattle() function
function bribeBattle() {
     // Variable to store the user response
     let money = window.prompt("TRAVELER! You shall not pass!\nPerhaps I will look the other way if you have gold to spare! (YES or NO)").toUpperCase();
     // Check the response to see if they said YES, if not they lose immediately 
     if(money === "YES") {
          let amount = window.prompt("How much gold do you have?\nPlease enter a NUMERIC value!"); 
          // Check that amount against our condition 
          if(amount > 50) {
               document.getElementById("victory").innerHTML = "Impressive! The draugr has been paid off!<br/>You have succeeded!";
               document.getElementById("button").textContent = "Try Again?";
               document.getElementById("win").play();
          } else {
               document.getElementById("defeat").innerHTML = "Sorry, that's not enough gold!<br/>You have lost!";
               document.getElementById("button").textContent = "Try Again?";
               document.getElementById("lose").play();

          } // end of nested if/else
     } else {
          document.getElementById("defeat").innerHTML = "Ah, no gold?<br/>Now you must defeat me if you want to get through!";
          document.getElementById("button").textContent = "Try Again?";
          document.getElementById("lose").play();
     } // end of first if/else 
} // end of bribeBattle()