//This function is going to be an unordered list of food
//in between the header and the footer

function Food(){
    const food1 = "Burger";
    const food2 = "Pizza";
    const food3 = "Biryani";
    //To use a variable inside of html in react we NEED to use {} to
    // enclose the variable.

    // Inside of the HTML when you use javascript you can literally use
    // ANY method! Just make sure to make it inside of the curly braces.

    //You can use a component in React more than once similar to a variable check App.jsx for more info!
    return(
        <ul>
            <li>
                {food1}
            </li>
            <li>
                {food2.toUpperCase()}
            </li>
            <li>
                {food3}
            </li>
        </ul>
    );
}

export default Food