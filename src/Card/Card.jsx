import "./Card.css"; // import the card style sheet

function Card({icon, text, onClick}){
    return(
        // decalring the style and onClick
        <button className="cardBackground cardLayout" onClick={onClick}>
            {/*store the icon for card */}
            <div className="icon">
                <img src={icon} alt="icon" className="icon"/>
            </div>
            {/*the title for card */}
            <div className="typography">
                {text}
            </div>

        </button>
    );
}

export default Card; // export the card

