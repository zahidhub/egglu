import "./PopupBox.css";
import { useEffect } from "react";

function PopupBox({ onFinish }) {

    useEffect( () => { // play the audio when the popup is active
        const finishAudio = new Audio("src/assets/kokok_alarm.mp3"); // sound track path
        finishAudio.play(); // play the sound
        return () => {
            finishAudio.pause(); // pause the sound once the popup component is removed
        };
    }, []); // empty dependecy array, runs once on mount

    return (
        <div className="PopupBoxLayout"> 

            <div className="">
                <p className="PopupBoxTypography"> {/*paragraph for the popup*/}
                Turn the stove off and take out the eggs. Put them in running water to help when peeling off.
                <br/>Enjoy your EGGLU!
                </p>
            </div>

            <button className="finishButton" onClick={onFinish}> {/*fiinish button*/}
                <div className="finishTypography">FINISHED</div>
            </button>

        </div>
    );
}

export default PopupBox; // export the component