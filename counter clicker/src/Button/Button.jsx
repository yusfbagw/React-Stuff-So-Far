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
    return (
        <div className = "buttons">
        <button className = "button1" type="button" onClick = {handleIncrement}>Click Here Dude!</button>
        <p className = "counter">Counter: {count}</p>
        <button className = "button2" onClick={handleIncrement}>Add</button>
        <button className = "button3" onClick = {handleDecrement}>Subtract</button>
        </div>
    );
}

export default Button