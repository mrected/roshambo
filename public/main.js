const main = () => {

  const playerOneButtons = document.querySelectorAll('.player-one button')
  const playerTwoButtons = document.querySelectorAll('.player-two button')
  let playerChoices = ['', '']
  let havePlayersChosen = [false, false]

  const checkIfGameStatus = () => {
    if (havePlayersChosen[0] === true && havePlayersChosen[1] === true) {
      decision()
    }
  }

  const decision = () => {
    if (playerChoices[0] === playerChoices[1]) {
      console.log('it\'s a tie')
    } else {
      console.log(rpsLogic(playerChoices[0]))
    }
  }

  const rpsLogic = (playerOneChoice) => {
    let playerTwoChoice = playerChoices[1]
    if (playerOneChoice === 'Rock') {
      return playerTwoChoice === 'Scissors' ? 'player one wins' : 'player two wins'
    } else if (playerOneChoice === 'Paper') {
      return playerTwoChoice === 'Rock' ? 'player one wins' : 'player two wins'
    } else {
      return playerTwoChoice === 'Paper' ? 'player one wins' : 'player two wins'
    }
  }

  const playerOneChooses = (e) => {
    playerChoices[0] = e.toElement.textContent
    document.querySelector('.player-one .options').innerHTML = '<p> Player One has chosen </p>'
    havePlayersChosen[0] = true
    checkIfGameStatus()
  }

  const playerTwoChooses = (e) => {
    playerChoices[1] = e.toElement.textContent
    document.querySelector('.player-two .options').innerHTML = '<p> Player Two has chosen </p>'
    havePlayersChosen[1] = true
    checkIfGameStatus()
  }

  const playerOneButtonArray = [...playerOneButtons].map(button => {
    button.addEventListener('click', playerOneChooses)
  })

  const playerTwoButtonArray = [...playerTwoButtons].map(button => {
    button.addEventListener('click', playerTwoChooses)
  })
}

document.addEventListener('DOMContentLoaded', main)