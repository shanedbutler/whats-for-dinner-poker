export const ResultCard = (props) => {

    return (
        <div className="column">
            <div className="card meal-card">
                <div className="card-content">
                    <span className="icon">
                        <i className="fas fa-heart"></i>
                    </span>
                    <p>
                        {props.card.name}
                    </p>
                </div>
            </div>
        </div>
    )
}