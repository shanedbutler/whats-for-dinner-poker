import { ResultCard } from "./ResultCard"

export const PlayResult = (props) => {


    return (
        <>
            <section className="hero is-small is-primary">
                <div className="hero-body ml-3">
                    <p className="title">
                        Play
                    </p>
                    <p className="subtitle">
                        Final result
                    </p>
                </div>
            </section>
            <section className="columns is-centered is-multiline is-2-tablet mt-5">
                <div className="column">
                </div>
                {
                    props.finalDraw.map(card => <ResultCard key={card.id} card={card} />)
                }
                <div className="column">
                </div>
            </section>
        </>
    )
}