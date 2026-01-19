import React from 'react';


const element = <h1>Welcome Roni here</h1>;


// Function Component
function Hello(props){
    console.log("Hello");
    return <h1> Hello from Function Component {props.element}</h1>;
}

// Class Component
class HelloClass extends React.Component{
    render(props){
        return <h1>Hello from Class Component {this.props.element}</h1>;
    }
}

export default Hello;

export {Hello,HelloClass};