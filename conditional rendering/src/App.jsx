//This is conditional rendering it allows you to control what gets rendered in
// your application based on certain conditions. (show, hide, or change components).


//Okay so for some reason camel case doesn't work on react, with the name of the function?
import UserGreeting from "./UserGreeting"

function App() {

  return (
    <> 
      <UserGreeting isLoggedIn ={false}/>
    </>
  )
}

export default App
