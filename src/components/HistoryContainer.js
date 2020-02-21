import React, { Component } from 'react';

export default class HistoryContainer extends Component {
    render() {
        return (
            <div className="container" >
                <h1>History</h1>
                <ul>
                    {this.props.history.map((node, index) => (
                        <li key={index}>{node}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
