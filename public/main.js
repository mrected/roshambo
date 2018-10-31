const main = () => {

  const playerOneButtons = document.querySelectorAll('.player-one button')
  const playerTwoButtons = document.querySelectorAll('.player-two button')
  let playerChoices = ['', '']
  let havePlayersChosen = [false, false]

  const decision = () => {
    if (playerChoices[0] === playerChoices[1]) {
      console.log('it\'s a tie')
    } else {
      console.log(rpsLogic())
    }
  }

  const rpsLogic = (playerOneChoice) => {
    if (playerOneChoice === 'rock') {
      return (playerChoices[1] === 'scissors' ? 'player one wins' : 'player two wins')
    } else if (playerOneChoice === 'paper') {
      return (playerChoices[1] === 'rock' ? 'player one wins' : 'player two wins')
    } else {
      return (playerChoices[1] === 'paper' ? 'player one wins' : 'player two wins')
    }
  }

  const checkIfGameOver = () => {
    if (havePlayersChosen[0] === true && havePlayersChosen[1] === true) {
      console.log('game over')
    }
  }

  const playerOneChooses = (e) => {
    playerChoices[0] = e.toElement.textContent
    document.querySelector('.player-one .options').innerHTML = '<p> Player One has chosen </p>'
    havePlayersChosen[0] = true
    // console.log(havePlayersChosen)
    decision()
    console.log(playerChoices)
  }

  const playerTwoChooses = (e) => {
    playerChoices[1] = e.toElement.textContent
    document.querySelector('.player-two .options').innerHTML = '<p> Player Two has chosen </p>'
    havePlayersChosen[1] = true
    // console.log(havePlayersChosen)
    decision()
    console.log(playerChoices)
  }

  [...playerOneButtons].map(button => {
    button.addEventListener('click', playerOneChooses)
  })

  const playerTwoButtonArray = [...playerTwoButtons].map(button => {
    button.addEventListener('click', playerTwoChooses)
  })
}

document.addEventListener('DOMContentLoaded', main)