import React from 'react';
import ReactDOM from 'react-dom';


class RandomWord extends React.Component {

  mouseDown = (field) => {
    this.props.mouseDown(field);
  }
  mouseUp = (field) => {
    this.props.mouseUp(field);
  }
  
  render(){

    const newState = JSON.parse(JSON.stringify(this.props.state));
    const word = newState.word;

    // random distribution of array elements
    let i = word.length;
    let j = i-1;
       
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
            //read class from state
            let classField = this.props.classNames.join(" ");
            //add class "drag" cliced field
            if(p.selected === true && p.char !== " "){
              classField += " drag";
            }
            return (
              <div
              className={classField} 
              key={i} 
              onMouseDown={()=>this.mouseDown(i)}
              onMouseUp={()=>this.mouseUp(i)}>
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