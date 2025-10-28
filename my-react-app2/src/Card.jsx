import Luffy from "./assets/luffy.png"

function Card () {
    return (
        <div className="card">
            <img className = "cardImage"src ={Luffy} alt="This is an image of Luffy"></img>
            <h2 className = "cardTitle">Yusuf Bagwan</h2>
            <p className = "cardPara">This is my first basic React website that is going to help me revolutionize the world.</p>
        </div>
    );
}

export default Card