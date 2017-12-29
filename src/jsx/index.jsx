import React from 'react';
import ReactDOM from 'react-dom';
import RandomWord from './RandomWord.jsx';
import newLetter from './Letter.jsx';

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

    newState.word = prompt("podaj słowo").toUpperCase(); 
    
    let numberOfLetters = newState.word.length;
    let maxIndex = numberOfLetters-1;
    let wordArray = newState.word.split("");
    let index = 0;

    while(numberOfLetters>0){
      let nr = Math.round(Math.random()*maxIndex--);
      let letter = wordArray.splice(nr,1)[0];
      
      newState.lettersWord.push(
        new newLetter(
          index++,
          letter,
          false
          )
        )
      numberOfLetters--;      
    }
    newState.lettersWord.push(
      new newLetter(
        newState.word.length,
        " ", 
        false
      )
    )

    this.setState(newState);
  }

  mouseDownUp = (indexElem,move) => {

    const newState = JSON.parse(JSON.stringify(this.state));
   
    //reset selected
    newState.lettersWord = newState.lettersWord.map((field) =>
      new newLetter(
        field.index,
        field.char,
        false
      )
    )

    const currentField = newState.lettersWord[indexElem];
    //set selected clicked field
    if(move === "down"){
      newState.lettersWord[indexElem] =
        new newLetter(
          currentField.index,
          currentField.char,
          true
        )
    } else {
      newState.lettersWord[indexElem] =
        new newLetter(
          currentField.index,
          currentField.char,
          false
        )
    }
    console.log(newState);
    this.setState(newState);
  }

  mouseMove = (element) => {
    console.log("rusza się");
  }

  render(){
    
    return (
      <RandomWord 
        state={this.state}
        classNames={this.state.classField}
        mouseDownUp={this.mouseDownUp}
        mouseMove={this.mouseMove}
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