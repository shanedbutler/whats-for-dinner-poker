export const Welcome = () => {

    return (
        <>
            <section className="hero is-small is-primary">
                <div className="hero-body ml-3">
                    <p>
                        <h2>Welcome!</h2>
                    </p>
                    <p className="subtitle">
                        Learn about the game
                    </p>
                </div>
            </section>
            <section class="columns">
                <div class="column is-narrow m-5 is-hidden-mobile">
                </div>
                <article class="column content m-5">
                    <h3>How</h3>
                    <p>What's for Dinner Poker is easy! Navigate to play, choose a deck, and draw. You will be dealt five dinner cards. Use the hold buttons to keep a card in your hand through the next draw. See something you'd like to eat? Hold it!<br/> You will have three rounds to make your final hand. The final five cards at the end of the game make your meal plan! 🎊 <br/>Copy the results to your clipboard, save them to your game history list, or just keep playing!</p>
                    <h3>About</h3>
                    <p>What's for Dinner Poker is designed and built by <a href="https://github.com/shanedbutler">Shane Butler</a>. The web-application was initially created in the summer of 2022 as a front-end capstone project to the <a href="https://generationwv.org/programs/newforce/">NewForce</a> coding school. The app was built with React, Bulma, and SCSS. All source files are available on GitHub. To support Shane, please star the project or follow him on GitHub.
                    </p>
                    <p>Thank you and bon appétit!</p>
                </article>
                <article class="column content m-5">
                    <h3>Features</h3>
                    <p>There are two decks based on seasonal eating. Each deck holds 52 dinner cards.</p>
                    <ul>
                        <li>Summer</li>
                        <li>Winter</li>
                    </ul>
                    <p>Each dinner card belongs to one of four suits, hover over them during the game to see their description.</p>
                    <ul>
                        <li>♠️ - Spades</li>
                        <li>♥️ - Hearts</li>
                        <li>♦️ - Diamonds</li>
                        <li>♣ - Clubs</li>
                    </ul>
                    <p><strong>Vegetarian?</strong> Enable vegetarian mode to play only with cards that can be prepared without meat!</p>
                    <p>More decks, cards, and features are planned!</p>
                </article>
                <div class="column is-narrow m-5 is-hidden-mobile">
                </div>
            </section>
        </>
    )
}