import { useState } from "react"; // import state from react
import Header from "./Header"; // import header
import Body from "./Body"; // import body
import BottomBar from "./BottomBar"; // import the bottomBar
import Notification from "./Notification"; // import notification
import "./Screen.css"; // import screen style sheet

function Screen() { 
    const [showNotification, setShowNotification] = useState(true); {/*the notification is show in the beginning and that updted in setShowNotification*/}

    const handleCloseNotification = () => {
        setShowNotification(false); // when user clicks X, this turns showNotification false
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
        </div>
    );
}

export default Screen; //export the screen