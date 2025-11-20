import bape from "../assets/bape.jpeg"

function Card () {
    return (
        <div className="card">
            <img className ="cardImage"src ={bape} alt="This is an image of my profile picture as a Bape Gorilla"></img>
            <h2 className = "cardTitle">Yusuf Bagwan</h2>
            <p className = "cardPara">This is the first card that I've implemented</p>
        </div>
    );
}

export default Card