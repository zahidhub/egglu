import "./Card.css";

function Card({icon, text}){
    return(
        <div className="cardBackground cardLayout">
            <div className="icon">
                <img src={icon} alt="icon" className="icon"/>
            </div>
            <div className="typography">
                {text}
            </div>
        </div>
    );
}

export default Card;

