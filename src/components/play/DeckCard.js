import { Link } from "react-router-dom"
import cardBackGreen from "../../assets/dinner-poker-back-green-med.png"
import cardBackPink from "../../assets/dinner-poker-back-pink-med.png"

export const DeckCard = (props) => {

    return (
        <div className="column is-flex is-flex-direction-column is-align-content-center is-justify-content-center">

                    <figure className="image is-237x340 card-back">
                        {
                            //Alternate deck image colors
                            props.deck.id % 2 === 0 ?
                                <img src={cardBackGreen}></img>
                                :
                                <img src={cardBackPink}></img>
                        }
                    </figure>
                    <Link to="/play/round" state={{ deckId: props.deck.id }}>
                        <button className="button mt-3">
                            {props.deck.name}
                        </button>
                    </Link>
                </div>
    )
}
