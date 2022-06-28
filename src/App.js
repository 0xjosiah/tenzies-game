import './index.css';
import Dice from './components/Dice'
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'

function App() {

  const randomDieRoll = () => {
    return Math.ceil(Math.random() * 6)
  }

  const createDiceArray = () => (
    new Array(10).fill().map(i => (
      {
        id: nanoid(),
        value: randomDieRoll(),
        isLocked: false
      }
    ))
  )

  const rollDice = () => {
    setDice(prevDice => prevDice.map(die => {
      return !die.isLocked ? { ...die, value: randomDieRoll()} : die
    }))
  }

  const dieHold = (id) => {
    setDice(prevDice => prevDice.map(die => {
      return die.id === id ? { ...die, isLocked: !die.isLocked} : die
    }))
  }

  const winnerCheck = () => {
    let allHeld = dice.every(die => die.isLocked)
    let reducer = dice.reduce((prev, curr) => prev + curr.value, 0) % 10
    if (allHeld && reducer === 0) {
      return true
    }
    return false
  }

  const restartGame = () => {
    setDice(createDiceArray)
    setIsGameOver(prevState => !prevState)
  }

  const [dice, setDice] = useState(createDiceArray)
  const [isGameOver, setIsGameOver] = useState(false)
  useEffect(() => {
    if (winnerCheck()) setIsGameOver(prevState => !prevState)
  }, [dice])

  return (
    <main className='main'>
      <div className='game-title'>
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die 
        to freeze it at its current value between rolls.</p>
      </div>
      <Dice dice={dice} handleClick={dieHold} />
      <button 
        onClick={!isGameOver ? rollDice : restartGame} 
        className='roll-btn'
      >
        {!isGameOver ? 'Roll' : 'Restart'}
      </button>
    </main>
  );
}

export default App;
