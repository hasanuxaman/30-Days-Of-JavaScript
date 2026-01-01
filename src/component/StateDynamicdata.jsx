

import { Component } from "react";

    class Counter extends Component {
    state = { count: 0 };
    increment = () => {
       this.setState({ count: this.state.count + 1 });
    };
    render(){
        return ( <div>
             <h2>{this.state.count}</h2>
             <button onClick={this.increment}>+</button>
        </div>
        );
    }
};

export default Counter;