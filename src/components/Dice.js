export default function Dice(props) {
    const diceElements = props.dice.map(die => (
        <div 
            className={die.isLocked ? 'die hold-die' : 'die'}
            onClick={() => props.handleClick(die.id)}
            key={die.id}
        >
            {die.value}
        </div>
    ))

    return (
        <div className="dice-container">
            {diceElements}
        </div>
    )
}