import React, { Component } from 'react';
class FormHandling extends Component {
    state = {
        email: ''
    };
    handleChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);                
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    render() {
        return (
            <form>
                <input name="email" value={this.state.email} onChange={this.handleChange} />
                <button type="submit">Submit</button>
                <p>Email: {this.state.email}</p>
            </form>
        );
    }
}
export default FormHandling;
