const main = () => {

  // const deciderArray = [
  //   ['t', 'l', 'w'],
  //   ['w', 't', 'l'],
  //   ['l', 'w', 't']
  // ]

  // if player 1 and player 2 choices are the same - tie
  // if player 1's choice  


  const playerOneButtons = document.querySelectorAll('.player-one button')
  const playerTwoButtons = document.querySelectorAll('.player-two button')
  let playerOneChoice = ''
  let playerTwoChoice = ''

  const decision = () => {
    if ()
  }


  const playerOneChooses = (e) => {
    playerOneChoice = `one-${e.toElement.textContent}`
    document.querySelector('.player-one .options').innerHTML = '<p> Player One has chosen </p>'
    console.log(playerOneChoice)
  }

  const playerTwoChooses = (e) => {
    playerTwoChoice = `two-${e.toElement.textContent}`
    document.querySelector('.player-two .options').innerHTML = '<p> Player Two has chosen </p>'
    console.log(playerTwoChoice)
  }

  [...playerOneButtons].map(button => {
    button.addEventListener('click', playerOneChooses)
  })

  const playerTwoButtonArray = [...playerTwoButtons].map(button => {
    button.addEventListener('click', playerTwoChooses)
  })
}

document.addEventListener('DOMContentLoaded', main)