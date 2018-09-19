import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Input extends Component{
    
    state = {
        name : ""
    }

    handleChange = (e) => {
        this.setState({
            name : e.target.value
        })
    }
    
    render(){
        return(
            <div className="content">
                <div className="inputSection">
                <h2 className="letters">What's your name?</h2>
                <form>
                    <input placeholder="Your name" value={this.state.name} onChange={this.handleChange} />
                    <div>{this.state.name}</div>
                </form>
                <button><Link to="tada">Click me</Link></button>
                </div>
            </div>
        );
    }
}

export default Input;