const comCho = document.getElementById('com-cho')
const userCho = document.getElementById('user-cho')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userCho.innerHTML = userChoice
  generateComCho()
  getResult()
}))

function generateComCho() {
  const randomNumber = Math.floor(Math.random() * 3) + 1

  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  comCho.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'Oh, draw!'
  }
  if (computerChoice === 'rock' && userChoice === "paper") {
    result = 'Yeah! You did it :D'
  }
  if (computerChoice === 'rock' && userChoice === "scissors") {
    result = 'Aww :('
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
    result = 'Yeah! You did it :D'
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    result = 'Aww :('
  }
  if (computerChoice === 'scissors' && userChoice === "rock") {
    result = 'Yeah! You did it :D'
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    result = 'Aww :('
  }
  resultDisplay.innerHTML = result
}
