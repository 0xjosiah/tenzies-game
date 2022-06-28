import './index.css';
import Dice from './components/Dice'
import { useState } from 'react';

function App() {

  const randomDieRoll = () => {
    return Math.ceil(Math.random() * 6)
  }

  const createDiceArray = () => (
    new Array(10).fill().map(i => (
      {
        id: 'a',
        value: randomDieRoll(),
        isLocked: false
      }
    ))
  )

  const rollDice = () => {
    setDice(prevDice => {
      const newDice = []
      for(let die of prevDice) {
        if (!die.isLocked) {
          die = { ...die, value: randomDieRoll()}
        }
        newDice.push(die)
      }
      return newDice
    })
  }

  const dieHold = (id) => {
    setDice(prevDice => {
      const newDice = []
      for(let die of prevDice) {
        if (die.id === id) {
          die = { ...die, isLocked: true}
        }
        newDice.push(die)
      }
      return newDice
    })
  }

  const [dice, setDice] = useState(createDiceArray)

  return (
    <main className='main'>
      <div className='game-title'>
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die 
        to freeze it at its current value between rolls.</p>
      </div>
      <Dice dice={dice} handleClick={dieHold}/>
      <button onClick={rollDice} className='roll-btn'>Roll</button>
    </main>
  );
}

export default App;
