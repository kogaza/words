import React from 'react';
import ReactDOM from 'react-dom';
import RandomWord from './RandomWord.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "",
      classField: ["letter"]
    }
  }

  componentWillMount = () => {
    const newState = JSON.parse(JSON.stringify(this.state));

    newState.word = prompt("podaj słowo"); 
    this.setState(newState);
  
  }

  clickField = (indexElem) => {

    const newState = JSON.parse(JSON.stringify(this.state));

    console.log("Działa kliknięcie");
    newState.classField.push("drag");//works for everyone!!! WRONG

    this.setState(newState);
  }

  render(){
    
    return (
      <RandomWord 
        word={this.state.word}
        classNames={this.state.classField}
        clickField={(id) => this.clickField(id)}
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