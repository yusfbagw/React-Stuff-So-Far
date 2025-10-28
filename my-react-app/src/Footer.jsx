//This is a function based component called Footer

function Footer(){
    //We can include a footer in our website as well.
    //The footer is going to be a paragraph.
    return(
        <footer>
            <p>
                &copy; {new Date().getFullYear()} A Yusuf Bagwan Production
            </p>
        </footer>
    );
}

export default Footer