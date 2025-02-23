import { useState } from "react"; // import state from react
import Header from "../Header_and_Footer/Header"; // import header
import Body from "./Body"; // import body
import BottomBar from "../Header_and_Footer/BottomBar"; // import the bottomBar
import Notification from "../PopUps/Notification"; // import notification
import Countdown from "../Timer/Countdown"; //import countdown
import PritusRecipe from "../PopUps/PritusRecipe";
import "./Screen.css"; // import screen style sheet

function Screen() { 
    //the notification is show in the beginning and that updted in setShowNotification
    const [showNotification, setShowNotification] = useState(true); 
    // state to manage the countdown
    const [showCountdown, setShowCountdown] = useState(false);
    //state to store the duration of the countdown in minutes
    const [coutDuration, setCoutDuration] = useState(0);
    // state for recipe popup
    const[showPritusRecipe, setShowPritusRecipe] = useState(false);

    const handleCloseNotification = () => {
        setShowNotification(false); // when user clicks X, this turns showNotification false
    };

    const handleCardClick = (duration) => {
        if(duration == "pritusRecipe"){ //if the condition is true
            setShowPritusRecipe(true); // show the reipe popup
        } else {
        setCoutDuration(duration); //set the timer duration
        setShowCountdown(true); // show the countdown popup
        }
    };

    const handleStopTimer = () =>{
        setCoutDuration(0); // stop the timer
        setShowCountdown(false); // close the popup
    };

    const handleClosePritusRecipe = () => {
        setShowPritusRecipe(false); // close the recipe popup
    };

    return (
        <div className="screenSize"> {/*apply style for the screen */}

            {/*show notification component till true, closed once user clicks X */}
            {showNotification && ( <Notification onClose={handleCloseNotification} /> )}

            <Header />

            {/*the className, component depends on the showNotification, if true it will have an extra class blurred, else bodyContainer applied only */}
            <div className={`bodyContainer ${showNotification || showCountdown || showPritusRecipe ? "blurred" : ""}`}> {/*bluring only the body*/}
                <Body onCardClick={handleCardClick} />
            </div>

            <BottomBar /> {/*bottombar component */}

            {showCountdown && ( <Countdown duration={coutDuration} onStop={handleStopTimer}/> ) } {/*countdown component */}

            {showPritusRecipe && ( <PritusRecipe onClose={handleClosePritusRecipe}/>)} {/*recipe component */}
        </div>
    );
}

export default Screen; //export the screen