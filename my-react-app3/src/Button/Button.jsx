//This is going to import the useState function from react.
import { useState } from "react";

//This is going to import styles from the button module.
import styles from "./Button.module.css"

//THE NICE THING ABOUT USING MODULES IS THAT AVOIDS NAMING CONFLICTS
//THAT MAY ARISE FROM WHEN YOU USE NO MODULES. THIS HAPPENS BECAUSE
//A UNIQUE CLASS IS GOING TO BE GENERATED FOR YOU FROM A HASING ALGORITHM.

function Button () {
    //Here we create a counter and setCounter variable.
    //Then we set that equal to useState to set that equal to 0.
    const [counter, setCounter] = useState(0);

    //Here we create the variable handleClick where the counter is being 
    // updated everytime the button is pressed.
    const handleClick = () => {setCounter(counter + 1)}
    //If you look closely the classname is a dynamic value that is first
    // the name of the thing we are importing then . then the name of the class
    return (
        <>
        <button className = {styles.button} type= "button" onClick={handleClick}>Click Here!</button>
        <h2>{counter}</h2>
        </>
    );
}

export default Button;