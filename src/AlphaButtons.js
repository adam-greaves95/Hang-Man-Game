import React, { Component } from 'react';

class AlphaButtons extends Component {
    handleGuess(ltr) {
        return this.props.guess(ltr);
    }

    handleGuessedLetter(ltr) {
        return this.props.guessedLetter(ltr);
    }

    render() {
        return this.props.letters.split("").map(ltr => (
            <button
                value={ltr}
                onClick={() => this.handleGuess(ltr)}
                disabled={this.handleGuessedLetter(ltr)}
                key={ltr}
            >
                {ltr}
            </button>
        ));
    }
}

export default AlphaButtons;