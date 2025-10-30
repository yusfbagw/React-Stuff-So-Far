/* 
Props are read only properties that are shared between
components. A parent component can send data to a child
component. 
Components are key value pairs. key=value.

For example in my-react-app3 we made a card component
But it was only ever duplicates, never each it's own thing
SO with props you can make each it's own component and change them 
both. By using key-value pairs.


*/

import Student from "./Student.jsx"


//Pay attention to the age parameter, if
// the data isn't a string literal then you have to enclose it with a 
// {}.
function App() {
  return (
    <>
    <Student name={12} age={12} isAStudent={false}/>
    <Student name="SpongeBob" age={30} isAStudent={true}/>
    <Student name="Mr.Krabs" age={53} isAStudent={false}/>

    </>
  );
}

export default App
