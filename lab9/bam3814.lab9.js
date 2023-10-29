function game(Player) {
  var computerChoice = Math.ceil(Math.random()*3);
  var computer;
  if(computerChoice = 1){
      computer = "scissors";
      console.log("Computer Choice: " + computer);}
  else if(computerChoice = 2){
      computer = "rock";
      console.log("Computer Choice: " + computer);}
  else if(computerChoice = 3){
      computer = "paper";
      console.log("Computer Choice: " + computer);
  }
 
  if(Player == "paper" && computer == "paper"){
      console.log("Nobody Wins!")
  }    
  else if(Player == "paper" && computer == "rock"){
      console.log("User Wins!")
  }
  else if(Player == "paper" && computer == "scissors"){
      console.log("Computer Wins!")
  }
  else if(Player == "scissors" && computer == "scissors"){
      console.log("Nobody Wins!")
  }
  else if(Player == "scissors" && computer == "paper"){
      console.log("User Wins!")
  }
  else if(Player == "scissors" && computer == "rock"){
      console.log("Computer Wins!")
  }
  else if(Player == "rock" && computer == "rock"){
      console.log("Nobody Wins!");
  }
  else if(Player == "rock" && computer == "scissors"){
      console.log("User Wins!")
  }
  else if(Player == "rock" && computer == "paper"){
      console.log("Computer Wins!")
  }
}
var askUser = prompt("Enter Rock, Paper, or Scissors: ");
let upperToLowercase = askUser.toLowerCase();
if(upperToLowercase == "rock" || upperToLowercase == "paper" || upperToLowercase == "scissors"){
  console.log("User Choice: " + upperToLowercase);
game(upperToLowercase);
var tryAgain = prompt("Want to play again? Yes or No?");
if(tryAgain == "Yes"){
  var askUserAgain = prompt("Enter Rock, Paper, or Scissors: ");
  let upperToLowercaseAgain = askUserAgain.toLowerCase();
  if(upperToLowercaseAgain != "rock" || upperToLowercaseAgain != "paper" || upperToLowercaseAgain != "scissors"){
      console.log("None of the options were chosen so the game has ended.");
  }
  else{console.log("User Choice: " + upperToLowercaseAgain);
  game(upperToLowercaseAgain);}
}
else if(tryAgain == "No"){
  console.log("See you later!");}
}

else if(upperToLowercase != "rock" || upperToLowercase != "paper" || upperToLowercase != "scissors"){
      var incorrect = prompt("Error! Please only enter rock, paper, or scissors: ");
      let upperToLowercase2 = incorrect.toLowerCase();
      if(upperToLowercase2 == "rock" || upperToLowercase2 == "paper" || upperToLowercase2 == "scissors"){
          console.log("User Choice: " + upperToLowercase2);
      rockPaperScissors(upperToLowercase2);
      var again = prompt("Want to play again? Yes or No: ");
      if(tryAgain == "Yes"){
          var askUserAgain2 = prompt("Enter rock, paper, or scissors: ");
          let upperToLowercase = askUserAgain2.toLowerCase();
          console.log("User Choice: " + upperToLowercase)
          rockPaperScissors(upperToLowercase);
      }
      else if(tryAgain == "No"){
          console.log("See you Later!");
      }
  }
      else if(upperToLowercase2 != "rock" || upperToLowercase2 != "paper" || upperToLowercase2 != "scissors"){
          console.log("Since you didn't enter rock, paper, or scissors, the game has ended.");
      }
  }
