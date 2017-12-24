import React from 'react';
import ReactDOM from 'react-dom';


class RandomWord extends React.Component {

  handleClickField = (field) => {
    this.props.clickField(field);
  }
  
  render(){

    const newState = JSON.parse(JSON.stringify(this.props.state));
// console.log(newState);
    const classField = this.props.classNames.join(" ");

    const word = newState.word.toUpperCase();

    // random distribution of array elements
    let i = word.length;
    let j = i-1;
    // let randomWord = [];
       
    return <div className="container">
      <div>
        <h1>Zapisz słowo</h1>
      </div>
      <div className="what-word">
        <h2>{word}</h2>
      </div>
      <div className="word">
        {
          newState.lettersWord.map((p,i) => {
            return (
              <div
              className={classField} 
              key={i} 
              onMouseDown={(i)=>this.handleClickField(i)}>
                  {newState.lettersWord[i].char}
              </div>
            )
              
          })
        }

          

      </div>
    </div>;
  }
}

module.exports = RandomWord;