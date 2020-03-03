import React, {Component} from 'react';
import './styles/App.css';
import CalculatorWrapper from "./components/CalculatorWrapper";
import HistoryContainer from "./components/HistoryContainer";
import keySelector from "./common/functions/keySelector";
import processEvent from "./common/functions/processEvent";


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: "",
      output: "",
      key: "",
      history: []
    };
    this.appRef = React.createRef();
  };

  componentDidMount(){
    this.appRef.current.focus();
  };
  componentDidUpdate(){
    this.appRef.current.focus();
  };

  buttonPress = e => {
    const value = processEvent(e.target.value, this.state.input, this.state.output);
    this.setState({
      input: value.input,
      output: value.output
    });
    if(value.input.includes("=")){
      let newhist = [...this.state.history];
      newhist.push(value.input + value.output);
      this.setState({history: [...newhist]});
    };
  };

  handleKeyPress = e => {
    let typed = keySelector(e.key);
    if(typed){
      this.setState({key: typed});
      this.removeHighlight();
      const value = processEvent(typed, this.state.input, this.state.output);
      this.mockButtonPress(value);
    }
  };

  mockButtonPress = value => {
    this.setState({
      input: value.input,
      output: value.output
    });
    if(value.input.includes("=")){
      let newhist = [...this.state.history];
      newhist.push(value.input + value.output);
      this.setState({history: [...newhist]});
    };
  };

  removeHighlight = () => {
    setTimeout(() => this.setState({key: ""}), 200);
  };

  render(){
    return (
      <div className="App" tabIndex="0" onKeyDown={this.handleKeyPress} ref={this.appRef} >
        <HistoryContainer history={[...this.state.history]}/>
        <CalculatorWrapper 
          input={this.state.input}
          output={this.state.output}
          typedKey={this.state.key}
          buttonPress={this.buttonPress}
        />
      </div>
    );
  }
};