import GitHubButton from 'react-github-btn'

import { Link } from "react-router-dom"

export const About = () => {

    return (
        <>
            <section className="hero is-small is-primary">
                <div className="hero-body ml-3">
                    <h2>
                        About
                    </h2>
                </div>
            </section>
            <section className="columns">
                <div className="column is-narrow m-5">
                </div>
                <article className="column content m-5">
                    <h3>Why</h3>
                    <p>What's For Dinner Poker is a game to help plan meals for the week! Based on real life video poker, the game is played with decks of cards with each card representing a potential meal. Select a deck and play to put together a great hand and enjoy a delicious week of pre-planned eating.</p>
                    <ul>
                        <li>Reduce decision fatigue.</li>
                        <li>Try something new.</li>
                        <li>Eat seasonally.</li>
                        <li>Share plan with others.</li>
                        <li>Have food fun!</li>
                    </ul>
                </article>
                <article className="column content m-5">
                    <h3>How</h3>
                    <p><Link to="/register">Sign-up</Link> for a new account. Users can play the game and track their saved game results.</p>
                    <h3>Support</h3>
                    <p>What's for Dinner Poker is designed and built by <a href="https://github.com/shanedbutler">Shane Butler</a>. The web-application was initially created in the summer of 2022 as a front-end capstone project to the <a href="https://generationwv.org/programs/newforce/">NewForce</a> coding school. The app was built with React, Bulma, and SCSS. All source files are available on GitHub. To support Shane, please star the project or follow him on GitHub. Thank you and bon appetit!</p>
                    <div>
                        <div className="mr-1">
                            <GitHubButton href="https://github.com/shanedbutler/whats-for-dinner-poker" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star shanedbutler/whats-for-dinner-poker on GitHub">Star</GitHubButton>
                        </div>
                        <div>
                            <GitHubButton href="https://github.com/shanedbutler" data-size="large" data-show-count="true" aria-label="Follow @shanedbutler on GitHub">Follow @shanedbutler</GitHubButton>
                        </div>
                    </div>
                </article>
                <div className="column is-narrow m-5">
                </div>
            </section>
        </>
    )
}
