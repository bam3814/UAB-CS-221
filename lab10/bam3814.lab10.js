const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const rock = document.querySelector('.rock');
const computerInputs = ['rock', 'paper', 'scissors'];
const userInputs = [rock, paper, scissors];
userInputs.forEach((option) => {
  option.addEventListener('click', function () {
    const userChoice = Math.floor(Math.random() * 3);
    const computerChoice = computerInputs[userChoice];
    winner(this.innerText, computerChoice);
  });
});

const winner = (user, CPU) => {
  CPU = CPU.toLowerCase();
  user = user.toLowerCase();
  const outcome = document.querySelector('.result');
  if (user === 'rock' && CPU == 'rock') {
    outcome.textContent = 'You chose rock, Computer chose rock. It is a Tie!';
  } else if (user === 'paper' && CPU == 'paper') {
    outcome.textContent = 'You chose paper, Computer chose paper. It is a Tie!';
  } else if (user === 'scissors' && CPU == 'scissors') {
    outcome.textContent =
      'You chose scissors, Computer chose scissors. It is a Tie!';
  } else if (user == 'paper' && CPU == 'rock') {
    outcome.textContent = 'You chose paper, Computer chose rock. User Wins!';
  } else if (CPU == 'paper' && user == 'rock') {
    outcome.textContent =
      'You chose rock, Computer chose paper. Computer Wins!';
  } else if (user == 'paper' && CPU == 'scissors') {
    outcome.textContent =
      'You chose paper, Computer chose scissors. Computer Wins!';
  } else if (CPU == 'paper' && CPU == 'scissors') {
    outcome.textContent =
      'You schose scissors, Computer chose paper. User Wins!';
  } else if (user == 'scissors' && CPU == 'rock') {
    outcome.textContent =
      'You chose scissors, Computer chose rock. Computer Wins!';
  } else if (CPU == 'scissors' && user == 'rock') {
    outcome.textContent = 'You chose rock, Computer chose scissors. User Wins!';
  } else if (user == 'scissors' && CPU == 'paper') {
    outcome.textContent =
      'You chose scissors, Computer chose paper. User Wins!';
  } else if (CPU == 'scissors' && CPU == 'paper') {
    outcome.textContent =
      'You chose scissors, Computer chose paper. Computer Wins!';
  } else if (user == 'rock' && CPU == 'paper') {
    outcome.textContent =
      'You chose rock, Computer chose paper. Computer Wins!';
  } else if (CPU == 'rock' && user == 'paper') {
    outcome.textContent = 'You chose paper, Computer chose rock. User Wins!';
  } else if (user == 'rock' && CPU == 'scissors') {
    outcome.textContent = 'You chose rock, Computer chose scissors. User Wins!';
  } else if (CPU == 'rock' && user == 'scissors') {
    outcome.textContent =
      'You chose scissors, Computer chose rock. Computer Wins!';
  }

  /* I understand that most of this is repetitive, but I did it to cover all bases in terms of the text being displayed since user always was first*/
};
