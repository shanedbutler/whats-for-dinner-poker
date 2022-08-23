export const MealCard = (props) => {


    return (

        <div className="column">
            <div className="is-flex is-justify-content-center is-flex-direction-column">
                <p>
                    {props.card.name}
                </p>
                <button className="button mt-1">
                    Hold
                </button>
            </div>
        </div>
    )
}