import './index.css';
import Dice from './components/Dice'

function App() {
  const randomDieRoll = () => {
    return Math.floor(Math.random() * 6) + 1
  }

  return (
    <main className='main'>
      <div className='game-title'>
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die 
        to freeze it at its current value between rolls.</p>
      </div>
      <Dice value={randomDieRoll} />
    </main>
  );
}

export default App;
