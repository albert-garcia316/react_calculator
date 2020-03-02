import React, {Component} from 'react';
import './styles/App.css';
import CalculatorWrapper from "./components/CalculatorWrapper";
import HistoryContainer from "./components/HistoryContainer";


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
    
  };

  handleKeyPress = e => {

  };

  mockButtonPress = typed => {
    this.setState({input: typed});
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