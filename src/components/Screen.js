import React, { Component } from 'react';

export default class Screen extends Component {
    render() {
        return (
            <div className="screenWrapper">
                <div className="screen">
                    <h4 className="scrTitle">IN:</h4>
                    <p className="scrText">{this.props.input}</p>
                </div>
                <div className="screen">
                    <h4 className="scrTitle">OP:</h4>
                    <p className="scrText">{this.props.output}</p>
                </div>
            </div>
        )
    }
}
