import { Link } from "react-router-dom"
import cardBackGreen from "../../assets/dinner-poker-back-green-med.png"
import cardBackPink from "../../assets/dinner-poker-back-pink-med.png"

export const DeckCard = (props) => {

    const deck = props.deck
    //Assign variable to deck if vegMode is enabled
    if (props.vegMode) {
        deck.vegMode = true
    }
    //Handle toggle back to vegMode OFF
    else if (!props.vegMode && deck.vegMode) {
        deck.vegMode = false
    }

    return (
        <div className="column is-flex is-justify-content-center is-flex-direction-column">

            <Link to="/play/round" state={{ deck: props.deck }}>
                <div className="is-flex is-justify-content-center">
                    <figure className="image is-237x340 card-back">
                        {
                            //Alternate deck image colors
                            props.deck.id % 2 === 0 ?
                                <img src={cardBackGreen} alt="Green Card Back"></img>
                                :
                                <img src={cardBackPink} alt="Pink Card Back"></img>
                        }
                    </figure>
                </div>
                <button className="button mt-3">
                    {props.deck.name}
                </button>
            </Link>
        </div>
    )
}
