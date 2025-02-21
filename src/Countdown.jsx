import { useState, useEffect } from "react"; // import react hook
import "./Countdown.css"; // import css file

function Countdown({ duration, onStop }) {
    const [timeLeft, setTimeLeft] = useState(duration * 60); // track the remaining time in seconds

    // handle the countdown logic
    useEffect(() => {
        //if the countdown reachese 0 
        if (timeLeft <= 0) {
            onStop(); // call the onStop function
            return;
        }

        //  interval to decrement the timeleft state every second
        const timerId = setInterval(() => {
            setTimeLeft(timeLeft - 1); // decrease timeLeft by 1 second
        }, 1000); // 1000ms

        //clear the interval when the timeLeft changes, prevent memory leak
        return () => clearInterval(timerId);
    }, [timeLeft, onStop]); // rerun if timeLeft or onStop changes

    const minutes = Math.floor(timeLeft / 60); //convert seconds to minutes
    const seconds = timeLeft % 60; // get the seconds

    return ( 
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
    );
}

export default Countdown; // export the countdown