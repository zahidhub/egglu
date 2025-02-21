import "./Notification.css"; // import the style file

function Notification({ onClose }) { // passing a prop as argument
    return (
        <div>
            <div className="notiLayout notiBackground"> {/* decalring a div and passing the style values*/}
                <p className="notiTypography"> {/*style for the text */}
                    MADE TO HELP ‘PRITU’ <br /> she doesnt know how to boil an egg {/*text to show on the notification */}
                </p>
                <div className="xIconLayout" onClick={onClose}></div> {/*to perform the action to close, holds the 'X' icon */}
            </div>
        </div>
    );
}

export default Notification; // export the notification