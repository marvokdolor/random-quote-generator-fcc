import React from "react"
import "./App.css"
import quoteData from "./QuoteData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            quoteIndex: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            quoteIndex: Math.floor(Math.random() * 100)
        })
    }

    render() {
        const quote = quoteData[this.state.quoteIndex].quote
        const author = quoteData[this.state.quoteIndex].name
        const tweetQuote = "https://twitter.com/intent/tweet?text="+ quote + " - " + author;

        return (
            <main>
                <div id="quote-box" className="well">
                    <h3 id="text">{quote}</h3>
                    <span id="author"> - {author}</span>
                    <br />
                    <button
                        id="new-quote"
                        type="button"
                        className="btn btn-dark"
                        onClick={this.handleClick}>New Quote
                    </button>
                    <button
                        id="tweet"
                        type="button"
                        className="btn btn-primary">
                        <a
                            id="tweet-quote"
                            href={tweetQuote}
                            target='_blank'
                            rel="noopener noreferrer"
                        >Tweet
                        </a>
                    </button>
                </div>
            </main>
        )
    }
}

export default App
