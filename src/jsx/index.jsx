import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  render(){
    return <div className="container">
      <div>
        <h1>Zapisz słowo</h1>
      </div>
      <div className="what-word">
        <h2>KORA</h2>
      </div>
      <div className="word">
        <div className="letter">K</div>
        <div className="letter">O</div>
        <div className="letter">R</div>
        <div className="letter">A</div>
      </div>

    </div>;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
});