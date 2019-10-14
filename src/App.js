import React, { Component } from "react";
import "./App.css";
import Hangman from "./Hangman";
import HangmanAdvanced from "./HangmanAdvanced";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Hangman /> */}
        <HangmanAdvanced />
      </div>
    );
  }
}

export default App;
