import './index.css';
import Dice from './components/Dice'
import { useState } from 'react';

function App() {

  const randomDieRoll = () => {
    return Math.ceil(Math.random() * 6)
  }

  const [dice, setDice] = useState(new Array(10).fill().map(i => (
    {
      id: i,
      value: randomDieRoll(),
      isLocked: false
    }
  )))

  console.log(dice)

  return (
    <main className='main'>
      <div className='game-title'>
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die 
        to freeze it at its current value between rolls.</p>
      </div>
      <Dice dice={dice} />
    </main>
  );
}

export default App;
