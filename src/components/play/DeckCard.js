import cardBackGreen from "../../assets/dinner-poker-back-green-med.png"
import cardBackPink from "../../assets/dinner-poker-back-pink-med.png"

export const DeckCard = (props) => {

    return (
        <div className="column">
            <div className="is-flex is-flex-direction-column">
                <figure className="image is-237x340">
                    {   //Alternate deck colors
                        props.deck.id % 2 === 0 ?
                        <img src={cardBackGreen}></img>
                        :
                        <img src={cardBackPink}></img>
                    }
                </figure>
                <div className="is-flex is-justify-content-center">
                    <button className="button mt-1">
                        {props.deck.name}
                    </button>
                </div>
            </div>
        </div>
    )
}