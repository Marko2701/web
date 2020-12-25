import React, { Component } from 'react';
import "./Hero.css"

class Hero extends Component {
    render() {
        return (

            <li>
                {this.props.data.name}
                <img src={this.props.data.thumbnail.path + "/portrait_xlarge." + this.props.data.thumbnail.extension} />
                <button>Info</button>
                <button>Add</button>
            </li>

        );
    }
}

export default Hero;