export default function Dice(props) {
    const diceElements = props.dice.map(die => (
        <div className="die">
            {die.value}
        </div>
    ))

    return (
        <div className="dice-container">
            {diceElements}
        </div>
    )
}