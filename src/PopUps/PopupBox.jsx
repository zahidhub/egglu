import "./PopupBox.css";

function PopupBox({ onFinish }) {
    return (
        <div className="PopupBoxLayout">
            <div className="">
                <p className="PopupBoxTypography">
                Turn the stove off and take out the eggs. Put them in running water to help when peeling off.
                <br/>Enjoy your EGGLU!
                </p>
            </div>
            <button className="finishButton" onClick={onFinish}>
                <div className="finishTypography">FINISHED</div>
            </button>
        </div>
    );
}

export default PopupBox;