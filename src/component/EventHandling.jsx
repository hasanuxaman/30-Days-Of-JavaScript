import React, { Component } from 'react';


class EventHandling extends Component {
    handleClick = () => {
        alert('Button clicked!');
    };

    render() {
        return (
            <button onClick={this.handleClick}>Click</button>
        );
    }
}

export default EventHandling;



