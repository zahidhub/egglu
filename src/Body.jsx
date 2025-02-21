import "./Body.css"; // importing css calss for body
import Card from "./Card"; // import the Card class


function Body({onCardClick}){ 
    return(
        <div className='bodyContainer bodyBackground'> {/*initiating the css file for the body*/}
            <h4 className="bodyTextTypography">choose your egg type</h4> {/*text body for the header*/}
            <div className="bodyLayout"> {/*initiating the css file for the body to hold the cards*/}
            <Card icon={'src/assets/runnyYolk.png'} text="runny yolk" onClick={() => onCardClick(0.5)} /> {/*calling the function with props*/}
            <Card icon={'src/assets/softBoiled.png'} text="soft boiled" onClick={() => onCardClick(2)} /> {/*calling the function with props*/}
            <Card icon={'src/assets/hardBoiled.png'} text="hard boiled" onClick={() => onCardClick(3)} /> {/*calling the function with props*/}
            <Card icon={'src/assets/pritu.png'} text="pritus word" /> {/*calling the function with props*/}
            </div>
        </div> 
    );
}
export default Body; // exporting the body class