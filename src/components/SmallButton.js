import React, { Component } from 'react';
import '../styles/button.css';

export default class SmallButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            bgColor: "",
            name: "",
            classes: "",
            toggleHighlight: false
        };
    };

    componentDidMount(){
        this.symbolConver();
        this.setClasses();
        if(this.props.typedKey === this.props.name){
            this.setState({toggleHighlight: true});
            this.removehighlight();
        };
    };

    symbolConver = () => {
        if(this.props.name === "&divide;"){
            this.setState({name: "÷"});
        } else if(this.props.name === "&times;"){
            this.setState({name: "×"});
        } else if(this.props.name === "&#177"){
            this.setState({name: "±"});
        } else if(this.props.name === "&#8730;"){
            this.setState({name: "√"});
        } else if(this.props.name === "&#178"){
            this.setState({name: "x²"});
        } else {
            this.setState({name: this.props.name});
        };
    };

    setClasses = () => {
        let c = "smallButton " + this.props.color + " ";
        if(this.props.bgColor){
            c += "bg" + this.props.bgColor + " ";
        };
        this.setState({classes: c});
    };

    removehighlight = () => {
        setTimeout(() => this.setState({toggleHighlight: false}), 200);
    };

    
    render() {
        return (
            <div
                className={
                    this.props.typedKey === this.props.name
                    ? "highlight " + this.state.classes + " "
                    : this.state.classes
                }
                value={this.state.name === "x²" ? "²" : this.state.name}
                onClick={e => this.props.buttonPressDetection(e)}
            >
                {this.state.name === "&#9003;" ? "⌫" : this.state.name}
            </div>
        )
    }
}
