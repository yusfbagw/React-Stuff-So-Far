import {useState} from "react"
import "./Button.css"

function Button() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count => count + 1)
    }

    const handleDecrement = () => {
        setCount(count => count - 1)
    }

    const handleDecrement10 = () => {
        setCount(count => count - 10)
    }

    const handleIncrement10 = () => {
        setCount(count => count + 10)
    }
    return (
        <div className = "buttons">
        <button className = "button1" type="button" onClick = {handleIncrement}>Click Here Dude!</button>
        <p className = "counter">Counter: {count}</p>
        <button className = "button2" onClick={handleIncrement}>Add</button>
        <button className = "button3" onClick = {handleDecrement}>Subtract</button>
        <button className = "buttonDecrememnt10" onClick = {handleDecrement10}>Subtract 10</button>
        <button className = "buttonIncrement10" onClick = {handleIncrement10}>Add 10</button>
        </div>
    );
}

export default Button