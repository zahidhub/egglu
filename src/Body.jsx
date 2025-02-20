import "./Body.css";
import Card from "./Card";


function Body(){
    return(
        <div className='bodyContainer bodyBackground'>
            <h4 className="bodyTextTypography">choose your egg type</h4>
            <div className="bodyLayout">
            <Card icon={'src/assets/runnyYolk.png'} text="runny yolk" />
            <Card icon={'src/assets/softBoiled.png'} text="soft boiled" />
            <Card icon={'src/assets/hardBoiled.png'} text="hard boiled" />
            <Card icon={'src/assets/pritu.png'} text="pritus word" />
            </div>
        </div>
    );
}
export default Body;