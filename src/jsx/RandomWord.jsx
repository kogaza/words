import React from 'react';
import ReactDOM from 'react-dom';

class RandomWord extends React.Component {

  render(){
    // a copy of the current state
    // const word = JSON.parse(JSON.stringify(this.props.word));

    const word = prompt("podaj słowo").toUpperCase();

    // random distribution of array elements
    let i = word.length;
    let j = i-1;
    let randomWord = [];
    let wordArray = word.split("");
    
    while(i>0){
      let nr = Math.round(Math.random()*j--);
      randomWord.push(wordArray.splice(nr,1)[0]);
      i--;      
    }
    
    return <div className="container">
      <div>
        <h1>Zapisz słowo</h1>
      </div>
      <div className="what-word">
        <h2>{word}</h2>
      </div>
      <div className="word">
        {
          randomWord.map((p,i) => <div className="letter" key={i}>
            {randomWord[i]}
            </div>
          )}
          <div className="letter"></div>

      </div>

    </div>;
  }
}

module.exports = RandomWord;