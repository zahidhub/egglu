import "./Card.css";

function Card({icon, text}){
    return(
        <button className="cardBackground cardLayout">
            <div className="icon">
                <img src={icon} alt="icon" className="icon"/>
            </div>
            <div className="typography">
                {text}
            </div>
        </button>
    );
}

export default Card;

