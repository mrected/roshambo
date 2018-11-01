const main = () => {

  const playerOneButtons = document.querySelectorAll('.player-one li')
  const playerTwoButtons = document.querySelectorAll('.player-two li')
  let playerChoices = []
  let havePlayersChosen = [false, false]
  let winner = ''

  let winnerCountDown = () => {
    let winnerCircle = document.querySelector('.winner-circle')
    winnerCircle.innerHTML = '<p class="fight-text">FIGHT</p>'
    setTimeout(() => {
      winnerCircle.innerHTML = `<p>Winner: <br><span>${winner}</span></p>`
    }, 2000)
  }

  const checkIfGameStatus = () => {
    if (havePlayersChosen[0] === true && havePlayersChosen[1] === true) {
      decision()
    }
  }

  const decision = () => {
    if (playerChoices[0] === playerChoices[1]) {
      winner = 'it\'s a tie'
      winnerCountDown()
    } else {
      winner = rpsLogic(playerChoices[0])
      winnerCountDown()
    }
  }

  const rpsLogic = (playerOneChoice) => {
    let playerTwoChoice = playerChoices[1]
    if (playerOneChoice === 'rock') {
      return playerTwoChoice === 'scissors' ? 'player one' : 'player two'
    } else if (playerOneChoice === 'paper') {
      return playerTwoChoice === 'rock' ? 'player one' : 'player two'
    } else {
      return playerTwoChoice === 'paper' ? 'player one' : 'player two'
    }
  }

  const playerOneChooses = (e) => {
    playerChoices[0] = e.toElement.alt
    document.querySelector('.choose-one').innerHTML = '<p class="has-chosen-one">has chosen</p>'
    document.querySelector('.player-one .options').innerHTML = ''
    havePlayersChosen[0] = true
    checkIfGameStatus()
  }

  const playerTwoChooses = (e) => {
    playerChoices[1] = e.toElement.alt
    document.querySelector('.choose-two').innerHTML = '<p class="has-chosen-two">has chosen</p>'
    document.querySelector('.player-two .options').innerHTML = ''
    havePlayersChosen[1] = true
    checkIfGameStatus()
  }

  const addEvents = () => {
    playerOneButtons.forEach((button) => {
      button.addEventListener('click', playerOneChooses)
    })

    playerTwoButtons.forEach((button) => {
      button.addEventListener('click', playerTwoChooses)
    })
  }

  addEvents()
}

document.addEventListener('DOMContentLoaded', main)