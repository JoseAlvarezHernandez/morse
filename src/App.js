import React from 'react';
import './App.css';
import {translate} from './utilities'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      translated: ''
    }
    this.onKeyUp = this.onKeyUp.bind(this)
  }

  onKeyUp(event){
    this.setState({translated: translate(event.target.value)})
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <label>Morse Translator</label>
          <div>
            <input className="form-control" type="text" placeholder="Search" onKeyUp={this.onKeyUp} aria-label="Search" />
          </div>
          <label>{this.state.translated}</label>
        </header>
      </div>
    );
  }
}

export default App;
