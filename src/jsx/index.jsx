import React from 'react';
import ReactDOM from 'react-dom';
import RandomWord from './RandomWord.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: ""
    }
  }

  render(){
    
    return (
      <RandomWord 
        word={this.state.word}
      />
    )
  }
}

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
});