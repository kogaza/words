import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: ""
    }
  }

  render(){
    // robimy kopien z aktualnego state
    const newState = JSON.parse(JSON.stringify(this.state));

    newState.word = prompt("podaj włowo").toUpperCase();

    const word = newState.word.split("");
    return <div className="container">
      <div>
        <h1>Zapisz słowo</h1>
      </div>
      <div className="what-word">
        <h2>{word}</h2>
      </div>
      <div className="word">
        {
          word.map((p,i) => <div className="letter" key={i}>
            {word[i]}
            </div>
          )}

      </div>

    </div>;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
});