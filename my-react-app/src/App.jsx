//This imports the header component/function from Header.jsx
//Its written in the form import (name of the component) from 'name of the file.jsx'
import Header from './Header.jsx'

//Now we are going to import the component Footer from Footer.jsx
import Footer from './Footer.jsx'

//This is going to import the component Food from Food.jsx
import Food from './Food.jsx'

//This is going to import the card component from Card.jsx
import Card from './Card.jsx'

function App() {
  return(
    //To add a component to website you add the name of the component and
    //Type it and its called Header
    //You can shorten the syntax for this as well. So instead of <Header></Header> it becomes <Header/>

    // Okay so if you want to add another element to be returned here, it's not going to work if you
    //place two elements one below another. You can only place 
    // a single enclosing tag inside of return.
    //To make it inside one return statement you have to fragment the code. Like so:
    // 1. Place a <></>
    // 2. Then place both inside the empty two hashed.
    <>
      <Card/>
    </>

  );
}

//Not really relavant but const is something that cannot be changed again in javascript.

export default App
