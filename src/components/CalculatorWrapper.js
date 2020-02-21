import React, { Component } from 'react';
import Row from "./Row";
import Screen from "./Screen";

export default class CalculatorWrapper extends Component {
    render() {
        return (
            <div className="calcWrapper container" >
                <h1>Calculator</h1>
                <Screen 
                    input={this.props.input}
                    output={this.props.output}
                />
                <div className="buttonWrapper" >
                    <Row 
                        b1Props={{name: '()', color: "green"}}
                        b2Props={{name: '%', color: "green"}}
                        b3Props={{name: '&#8730;', color: "green"}}
                        b4Props={{name: '&#178', color: "green"}}
                        buttonPressDetection={this.props.buttonPress}
                        typedKey={this.props.typedKey}
                    />
                    <Row 
                        b1Props={{name: 'CE', color: "red"}}
                        b2Props={{name: 'C', color: "red"}}
                        b3Props={{name: '&#9003;', color: "red"}}
                        b4Props={{name: '&divide;', color: "green"}}
                        buttonPressDetection={this.props.buttonPress}
                        typedKey={this.props.typedKey}
                    />
                    <Row 
                        b1Props={{name: '7', color: "black"}}
                        b2Props={{name: '8', color: "black"}}
                        b3Props={{name: '9', color: "black"}}
                        b4Props={{name: '&times;', color: "green"}}
                        buttonPressDetection={this.props.buttonPress}
                        typedKey={this.props.typedKey}
                    />
                    <Row 
                        b1Props={{name: '4', color: "black"}}
                        b2Props={{name: '5', color: "black"}}
                        b3Props={{name: '6', color: "black"}}
                        b4Props={{name: '-', color: "green"}}
                        buttonPressDetection={this.props.buttonPress}
                        typedKey={this.props.typedKey}
                    />
                    <Row 
                        b1Props={{name: '1', color: "black"}}
                        b2Props={{name: '2', color: "black"}}
                        b3Props={{name: '3', color: "black"}}
                        b4Props={{name: '+', color: "green"}}
                        buttonPressDetection={this.props.buttonPress}
                        typedKey={this.props.typedKey}
                    />
                    <Row 
                        b1Props={{name: '&#177', color: "black"}}
                        b2Props={{name: '0', color: "black"}}
                        b3Props={{name: '.', color: "black"}}
                        b4Props={{name: '=', color: "white", bgColor: "Green"}}
                        buttonPressDetection={this.props.buttonPress}
                        typedKey={this.props.typedKey}
                    />
                </div>
            </div>
        )
    }
}
