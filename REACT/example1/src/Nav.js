import React, { Component } from 'react';
import './App.css'

class Nav extends Component{
    render(){
        return(
            <div>
                <div className="banner">
                    <h2 className="banner_title">Suhhny Blog</h2>
                    <p></p>
                    <h2 className="banner_click">Click Me</h2>
                </div>
                <div className="line">
                </div>
            </div>
        );
    }
}

export default Nav;