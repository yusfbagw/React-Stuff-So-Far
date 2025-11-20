
//It is good practice to set up prop types if you're using props as parameters like below!
//Just in case that the values passed into the code are not of the correct propType.
import PropTypes from 'prop-types';

function UserGreeting(props) {
    /* You don't technically need the else you could just leave the return outside. */
    /*
    if (props.isLoggedIn) {
        return <h2> Welcome {props.username}</h2>
    }
        return <h2>Welcome User! Please log in to continue</h2>

        Also this stuff below is very verbose. It has alot alot of words, so we can use constants.

        The code below is the old stuff.

        return(props.isLoggedIn ? <h2 className = "welcome-area">Welcome {props.username} </h2> : 
                              <h2 className = "login-area">Welcome user! Please log in to continue</h2>);
    */
   const welcomeArea = <h2 className = "welcome-area">Welcome {props.username} </h2>
   const loginArea = <h2 className = "login-area">Welcome user! Please log in to continue</h2>
    return(props.isLoggedIn ? welcomeArea : loginArea);
}
UserGreeting.propTypes = {
    isLoggedIn : PropTypes.bool,
    username : PropTypes.string,
}

//Its also good practice to have default prop types as well. Because for example, what if someone is logged in but 
//they don't have a username. React doesn't even use these anymore idk why he was teaching this.
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest", 
}

export default UserGreeting