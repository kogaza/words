import React from 'react';
import ReactDOM from 'react-dom';


class RandomWord extends React.Component {

  mouseDownUp = (field,move) => {
    this.props.mouseDownUp(field,move);
    
  }
  mouseMove = (field,move) => {
    this.props.mouseMove(field,move);
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
            let classFieldH2;
            //add class "drag" cliced field
            if(p.selected === true && p.char !== " "){
              classFieldH2 += " drag";
            }
            return (
              <div
              className={classField} 
              key={i}>
                <h2
                className={classFieldH2}
                onMouseDown={()=>this.mouseDownUp(i,"down")}
                onMouseUp={()=>this.mouseDownUp(i,"up")}
                onMouseMove={()=>this.mouseDownUp(i)}>
                  {newState.lettersWord[i].char}
                </h2>
              </div>
            )
              
          })
        }

          

      </div>
    </div>;
  }
}

module.exports = RandomWord;