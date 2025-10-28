//This is a function based component called Header

function Header(){
    return(
        //Inside of the return statement you can just add/type pure html
        //The h1 element creates the header in the big bold font.
        //ul is going to give you your unordered list.
        //li is going to give you your list
        //<a href=""> is going to set the anchor for the list item and
        // make it clickable.
        //<hr> is going to give it a horizontal rule.
        <header>
            <h1>
                My Website
            </h1>
            <nav>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    );
}
// So now we have to also export this because
// we need to import this elsewhere

export default Header