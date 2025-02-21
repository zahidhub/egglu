import { useState } from "react"; // import state from react
import Header from "./Header"; // import header
import Body from "./Body"; // import body
import BottomBar from "./BottomBar"; // import the bottomBar
import Notification from "./Notification"; // import notification
import Countdown from "./Countdown"; //import countdown
import PopupBox from "./PopupBox";
import "./Screen.css"; // import screen style sheet

function Screen() { 
    //the notification is show in the beginning and that updted in setShowNotification
    const [showNotification, setShowNotification] = useState(true); 

    // state to manage the countdown
    const [showCountdown, setShowCountdown] = useState(false);

    // state to manage the popup
    const [showPopup, setShowPopup] = useState(false);

    //state to store the duration of the countdown in minutes
    const [coutDuration, setCoutDuration] = useState(0);

    //state to store the text and manage the popup
    const [popupText, setPopupText] = useState("");

    const handleCloseNotification = () => {
        setShowNotification(false); // when user clicks X, this turns showNotification false
    };

    const handleCardClick = (duration) => {
        setCoutDuration(duration); //set the timer duration
        setShowCountdown(true); // show the countdown popup
        setPopupText("turn the stove off and\ntake out the eggs.\nput them in running water\nhelps when peeling off\n\nenjoy your EGGLU!"); // set text for popup
    };

    const handleStopTimer = () =>{
        setCoutDuration(0); // stop the timer
        setShowCountdown(false); // close the popup
    };

    const handleCountdownFinish = () => {
        setShowCountdown(false); // hide countdown
        setShowPopup(true); // show popup when countdown ends
    };

    const handleClosePopup = () => {
        setShowPopup(false); // close the popup
    };

    return (
        <div className="screenSize"> {/*apply style for the screen */}

            {/*show notification component till true, closed once user clicks X */}
            {showNotification && (
                <Notification onClose={handleCloseNotification} /> 
            )}

            <Header />

            {/*the className, component depends on the showNotification, if true it will have an extra class blurred, else bodyContainer applied only */}
            <div className={`bodyContainer ${showNotification || showCountdown || showPopup? "blurred" : ""}`}> {/*bluring only the body*/}
                <Body onCardClick={handleCardClick} />
            </div>

            <BottomBar /> {/*bottombar component */}

            {showCountdown && (
                <Countdown duration={coutDuration} onStop={handleStopTimer} onFinish={handleCountdownFinish}/>
            )}

            {showPopup && (
                <PopupBox text={popupText} onClose={handleClosePopup}/>
            )}

        </div>
    );
}

export default Screen; //export the screen