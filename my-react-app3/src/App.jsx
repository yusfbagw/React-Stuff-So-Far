/*

THIS IS GOING TO SHOW YOU HOW TO STYLE REACT COMPONENTS WITH CSS
----------------------------------------------------------------

(not including external frameworks like tailwind or preprocessors such as SAS)

1. EXTERNAL STYLING (This is usually inside of the index.css which we did in my-react-app2 as well.)
2. MODULES STYLING (In this we are going to put the component inside of it's own dedicated folder along with it's own styling sheet.)
3. INLINE STYLING


First beginning with a button component
*/

import Button from "./Button/Button.jsx"

function App() {
  return (
    <Button/>
  );
}

export default App
