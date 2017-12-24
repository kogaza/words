import React from 'react';
import ReactDOM from 'react-dom';
import RandomWord from './RandomWord.jsx';
import Letter from './Letter.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "",
      classField: ["letter"],
      lettersWord: []
    }
  }

  componentWillMount = () => {
    const newState = JSON.parse(JSON.stringify(this.state));

    newState.word = prompt("podaj słowo"); 
    
    let numberOfLetters = newState.word.length;
    let maxIndex = numberOfLetters-1;
    let wordArray = newState.word.split("");
    let index = 0;

    while(numberOfLetters>0){
      let nr = Math.round(Math.random()*maxIndex--);
      let letter = wordArray.splice(nr,1)[0];
      
      newState.lettersWord.push(
        new Letter(
          index++,
          letter,
          false
          )
        )
      numberOfLetters--;      
    }
    newState.lettersWord.push(
      new Letter(
        newState.word.length,
        " ", 
        false
      )
    )

    console.log(newState);
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
        state={this.state}
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