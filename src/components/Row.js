import React, { Component } from 'react';
import SmallButton from "./SmallButton";

export default class Row extends Component {
    render() {
        return (
            <div className="buttonRow" >
                <SmallButton 
                    name={this.props.b1Props.name}
                    color={this.props.b1Props.color}
                    buttonPressDetection={this.props.buttonPressDetection}
                    typedKey={this.props.typedKey}
                />
                <SmallButton 
                    name={this.props.b2Props.name}
                    color={this.props.b2Props.color}
                    buttonPressDetection={this.props.buttonPressDetection}
                    typedKey={this.props.typedKey}
                />
                <SmallButton 
                    name={this.props.b3Props.name}
                    color={this.props.b3Props.color}
                    buttonPressDetection={this.props.buttonPressDetection}
                    typedKey={this.props.typedKey}
                />
                <SmallButton 
                    name={this.props.b4Props.name}
                    color={this.props.b4Props.color}
                    bgColor={this.props.b4Props.bgColor ? this.props.b4Props.bgColor : null}
                    buttonPressDetection={this.props.buttonPressDetection}
                    typedKey={this.props.typedKey}
                />
            </div>
        )
    }
}
