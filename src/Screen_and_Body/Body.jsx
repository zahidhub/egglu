import "./Body.css"; // importing css calss for body
import Card from "../Card/Card"; // import the Card class


function Body({onCardClick}){ // the props onCardClick takes the argument to trigger the countdown and other popups
    return(
        <div className='bodyContainer bodyBackground'> {/*initiating the css file for the body*/}
            <h4 className="bodyTextTypography">choose your egg type</h4> {/*text body for the header*/}
            <div className="bodyLayout"> {/*initiating the css file for the body to hold the cards*/}
            <Card icon={'src/assets/runnyYolk.png'} text="runny yolk" onClick={() => onCardClick(6)} /> {/*calling the function with props*/}
            <Card icon={'src/assets/softBoiled.png'} text="soft boiled" onClick={() => onCardClick(8)} /> {/*calling the function with props*/}
            <Card icon={'src/assets/hardBoiled.png'} text="hard boiled" onClick={() => onCardClick(10)} /> {/*calling the function with props*/}
            <Card icon={'src/assets/pritu.png'} text="pritus Recipe" onClick={() => onCardClick("pritusRecipe")}/> {/*calling the function with props*/}
            </div>
        </div> 
    );
}
export default Body; // exporting the body class