import React from 'react';
import './App.css';
import {translate} from './utilities'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      translated: '',
      text: '',
      typingTimeout: 0
    }
    this.getInputText = this.getInputText.bind(this)
    this.translate = this.translate.bind(this)
  }

  translate(text){
    this.setState({translated: translate(text), typing: false})
  }

  getInputText(event){
    const self = this;

    if (self.state.typingTimeout) {
       clearTimeout(self.state.typingTimeout);
    }


    this.setState({
      text: event.target.value,
      typing: true,
      typingTimeout: setTimeout(function () {
        self.translate(self.state.text);
      }, 500)
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <label>Morse Translator</label>
          <div>
            <input className="form-control" type="text" placeholder="Search" onChange={this.getInputText} aria-label="Search" />
          </div>
          {this.state.typing && <label>Typing...</label>}
          <label>{!this.state.typing && this.state.translated}</label>
        </header>
      </div>
    );
  }
}

export default App;
