import "./Card.css";

function Card({icon, text}){
    return(
        <div className="cardBackground cardLayout">
            <div className="icon typography">
                {icon} {text}
            </div>
        </div>
    );
}

export default Card;

