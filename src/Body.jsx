import "./Body.css";
import Card from "./Card";

function Body(){
    return(
        <div className='bodyLayout background'>
            <Card icon={'src/assets/runnyYolk.png'} text="runny yolk" />
            <Card icon={'src/assets/softBoiled.png'} text="soft boiled" />
            <Card icon={'src/assets/hardBoiled.png'} text="hard boiled" />
            <Card icon={'src/assets/pritu.png'} text="pritus word" />
        </div>
    );
}
export default Body;