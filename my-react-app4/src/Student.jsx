//import PropTypes from 'prop-types'

// Okay so basically when the isAStudent variable/parameter is true
//With a boolean in react you use a ternary operator which shows up as a ?
//And it basically goes like this: if true ? else if : false then show false.
//Booleans typically don't show up on React so you usually use them inside a
// conditional or something like a ternary operator like ?

function Student(props) {
    return(
    <div className = "student">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Is {props.name} a student: {props.isAStudent ? "Yes": "No"}</p>
    </div>
    );
}

/* 
propTypes = a mechanism that ensures that the passed value is of the correct datatype.
 For example inside of props we have the age: PropTypes.number key and we want to ensure that the age
value type is going to be an integer not a string or a boolean. This is mostly for debugging purposes.
In order for the component to accept props. It needs prop's parameters
This is usually in the node_modules. It doesn't seem to be there, but let me check it again, by trying to import it.
Doesn't seem to be there. That's kind of weird, looks like this isn't something to worry about 
As react is getting rid of this instead going more towards typeScript to check for propTypes.
*/
/*
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.integer, 
    isAStudent: PropTypes.bool,
}
*/

//default props = 
// default values for props in case they 
// are not passed from the parent 
// component name: "Guest"
//DEFAULT PROPS HAVE BEEN DEPRECATED MEANING THEY ARE NO LONGER IN USE IN REACT
//STARTING AT REACT VERSION 18.3.0 and up!
//The stuff below is what it would look like.
/*
Student.defaultProps{
    name: "Mr.Krabs",
    age: "52",
    isAStudent: false,
}
*/

export default Student;