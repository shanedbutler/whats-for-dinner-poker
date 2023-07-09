import GitHubButton from 'react-github-btn'

export const Welcome = () => {

    return (
        <>
            <section className="hero is-small is-primary">
                <div className="hero-body ml-3">
                    <h2>
                        Welcome!
                    </h2>
                    <p className="subtitle">
                        Learn about the game
                    </p>
                </div>
            </section>
            <section className="columns">
                <div className="column is-narrow m-5 is-hidden-mobile">
                </div>
                <article className="column content m-5">
                <h3>About</h3>
                    <p>
                        What's For Dinner Poker is a game to help plan meals for the week! Based on real life video poker,
                        the game is played with decks of cards with each card representing a potential meal.
                        Select a deck and play to put together a great hand and enjoy a delicious week of pre-planned eating.
                    </p>
                    <ul>
                        <li>Reduce decision fatigue</li>
                        <li>Try something new</li>
                        <li>Eat seasonally</li>
                        <li>Share plan with others</li>
                        <li>Have food fun!</li>
                    </ul>
                    <p>
                        This web application is designed and built by <a href="https://github.com/shanedbutler">Shane Butler</a>.
                        It was initially created in the summer of 2022 as a front-end capstone project
                        to the <a href="https://generationwv.org/programs/newforce/">NewForce</a> coding school. All source files are available on GitHub.
                    </p>
                    <p>
                        Thank you and bon appétit!
                    </p>
                    <div>
                        <div className="mr-1">
                            <GitHubButton
                                href="https://github.com/shanedbutler/whats-for-dinner-poker"
                                data-icon="octicon-star"
                                data-size="large"
                                data-show-count="true"
                                aria-label="Star shanedbutler/whats-for-dinner-poker on GitHub"
                            >
                                Star
                            </GitHubButton>
                        </div>
                        <div>
                            <GitHubButton
                                href="https://github.com/shanedbutler"
                                data-size="large"
                                data-show-count="true"
                                aria-label="Follow @shanedbutler on GitHub"
                            >
                                Follow @shanedbutler
                            </GitHubButton>
                        </div>
                    </div>
                </article>
                <article className="column content m-5">
                <h3>How</h3>
                    <p>
                        To being, navigate to play, choose a deck, and draw.
                        The deck is shuffled and you are dealt five dinner cards.
                        See something you'd like to eat this week?
                    </p>
                    <p>
                        <strong>Hold it!</strong> It will stay in your hand through the next draw. 💎🤲
                    </p>
                    <p>
                        You will have three rounds to make your final hand. The final five cards at the end
                        of the game make up your meal plan! 🎊 
                    </p>
                    <p>
                        Copy the results to your clipboard,
                        save them to your game history list, or just keep playing!
                    </p>
                    <h3>
                        Features
                    </h3>
                    <p>
                        Each dinner card belongs to one of four suits, hover over them during the game to see their description.
                    </p>
                    <ul>
                        <li>♠️ - Certified Fresh</li>
                        <li>♥️ - Healthyish</li>
                        <li>♦️ - Quick and Easy</li>
                        <li>♣ - American Classics</li>
                    </ul>
                    <p>
                        <strong>Vegetarian?</strong> Enable vegetarian mode to play only with cards that can be prepared without meat!
                    </p>
                </article>
                <div className="column is-narrow m-5 is-hidden-mobile">
                </div>
            </section>
        </>
    )
}
