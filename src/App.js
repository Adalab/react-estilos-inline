import React from 'react';
import './App.scss';

const yellow = {backgroundColor: '#ffcc00'};
const blue = {backgroundColor: '#0077cc'};

class App extends React.Component {
  render() {
    return (
      <div class="app">
        <ul className="boxes">
          <li className="box" style={blue}></li>
          <li className="box" style={yellow}></li>
          <li className="box" style={{backgroundColor: '#ff9900'}}></li>
        </ul>
      </div>
    );
  }
}

export default App;
