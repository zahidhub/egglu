import "./PritusRecipe.css"; // import CSS file

function PritusRecipe({ onClose }) { // function takes a praps
    return (
        <div className="pritusRecipeOverlay">
            <div className="pritusRecipeLayout">

                <button className="CloseXiconLayout" onClick={onClose}></button> {/*X icon for closing the popup */}

                <div className="pritusRecipeContent"> {/*header*/}
                    <h2 className="headerLayout">'ANDA'</h2>

                    <div className="firstParaLayout"> {/*first paragraph*/}
                        <p className="firstParaTypography">
                            <strong>ingredients</strong> {`{egg, cucumber, onion, chili, tomato, chaat masala, salt, tamarind sauce}`}
                        </p>
                    </div>

                    <div className="secondParaLayout"> {/*second paragraph*/}
                        <p className="secondParaTypography">
                            <strong>instruction</strong>: cut them into cube size and mix, that's it!
                        </p>
                    </div>

                    <div className="lastLineLayout"> {/*last line*/}
                        <p className="lastLineTypography">
                            <strong>ANDA</strong> a cuss word by PRITU
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PritusRecipe;