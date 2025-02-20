import Header from "./Header";
import Body from "./Body";
import BottomBar from "./BottomBar";
import "./Screen.css";

function Screen(img, ){
    return (
        <div className="screenSize">
            <Header/>
            <Body/>
            <BottomBar/>
        </div>
    );
}

export default Screen;