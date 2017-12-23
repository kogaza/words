import React from 'react';
import ReactDOM from 'react-dom';

class RandomWord extends React.Component {

  handleClickField = (field) => {
    this.props.clickField(field);
  }
  
  render(){

    const classField = this.props.classNames.join(" ");

    const word = this.props.word.toUpperCase();

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
          randomWord.map((p,i) => {
            return (
              <div
                className={classField} 
                key={i} 
                onMouseDown={(p)=>this.handleClickField(p)}>
                  {randomWord[i]}
              </div>
            )
          })
        }
          <div
            className={classField}
            onMouseDown={(p)=>this.handleClickField(p)}>
          </div>

      </div>

    </div>;
  }
}

module.exports = RandomWord;