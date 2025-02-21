import { useState, useEffect } from "react"; // import react hook
import "./Countdown.css"; // import css file
import PopupBox from "./PopupBox";

function Countdown({ duration, onStop}) {
    const [timeLeft, setTimeLeft] = useState(duration * 60); // track the remaining time in seconds
    const [showPopup, setShowPopup] = useState(false); //state to manage PopupBox

    // handle the countdown logic
    useEffect(() => {
        //if the countdown reachese 0 
        if (timeLeft <= 0) {
            setShowPopup(true); // show the popupbox
            return;
        }

        //  interval to decrement the timeleft state every second
        const timer = setInterval(() => {
            setTimeLeft(timeLeft - 1); // decrease timeLeft by 1 second
        }, 1000); // 1000ms

        //clear the interval when the timeLeft changes, prevent memory leak
        return () => clearInterval(timer);
    }, [timeLeft]); // rerun if timeLeft or onStop changes

    const minutes = Math.floor(timeLeft / 60); //convert seconds to minutes
    const seconds = timeLeft % 60; // get the seconds

    const handleFinish = () => {
        setShowPopup(false); // Hide PopupBox
        onStop(); // Notify parent to close Countdown
    };

    return (
        <div>
            <div className="countdownBoxLayout"> {/*style for the poopup box */}
                <div className="countdownBoxTypography">turn on the stove, add the eggs to the pot 
                    and wait untill the timer goes out</div>
                <div className="minuteTypography"> 
                    {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')} {/*display the countdown, MIN:SEC*/}
                </div>
                <button className="stopButton" onClick={onStop}> {/*stop button, click to close the popup */}
                    <div className="stopTypography">STOP</div>
                </button>
            </div>

            {showPopup && (
                <PopupBox
                    onFinish={handleFinish} // Use the same onStop function to close the popup
                />
            )}
        </div>
    );
}

export default Countdown; // export the countdown