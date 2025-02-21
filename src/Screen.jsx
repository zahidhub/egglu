import { useState } from "react"; // import state from react
import Header from "./Header"; // import header
import Body from "./Body"; // import body
import BottomBar from "./BottomBar"; // import the bottomBar
import Notification from "./Notification"; // import notification
import Countdown from "./Countdown"; //import countdown
import "./Screen.css"; // import screen style sheet

function Screen() { 
    //the notification is show in the beginning and that updted in setShowNotification
    const [showNotification, setShowNotification] = useState(true); 
    // state to manage the countdown
    const [showCountdown, setShowCountdown] = useState(false);
    //state to store the duration of the countdown in minutes
    const [coutDuration, setCoutDuration] = useState(0);

    const handleCloseNotification = () => {
        setShowNotification(false); // when user clicks X, this turns showNotification false
    };

    const handleCardClick = (duration) => {
        setCoutDuration(duration); //set the timer duration
        setShowCountdown(true); // show the countdown popup
    };

    const handleStopTimer = () =>{
        setCoutDuration(0); // stop the timer
        setShowCountdown(false); // close the popup
    };

    return (
        <div className="screenSize"> {/*apply style for the screen */}

            {/*show notification component till true, closed once user clicks X */}
            {showNotification && (
                <Notification onClose={handleCloseNotification} /> 
            )}

            <Header />

            {/*the className, component depends on the showNotification, if true it will have an extra class blurred, else bodyContainer applied only */}
            <div className={`bodyContainer ${showNotification ? "blurred" : ""}`}> {/*bluring only the body*/}
                <Body />
            </div>

            <BottomBar /> {/*bottombar component */}

            {showCountdown && (
                <Countdown duration={coutDuration} onStop={handleStopTimer}/>
            )}
        </div>
    );
}

export default Screen; //export the screen