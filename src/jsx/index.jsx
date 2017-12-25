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

    console.log(newState);
    this.setState(newState);
  }

  clickField = (indexElem) => {

    const newState = JSON.parse(JSON.stringify(this.state));
    console.log(indexElem);

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
    newState.lettersWord[indexElem] =
      new newLetter(
        currentField.index,
        currentField.char,
        true
      )
    console.log(newState);
    this.setState(newState);
  }

  render(){
    
    return (
      <RandomWord 
        state={this.state}
        classNames={this.state.classField}
        clickField={this.clickField}
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