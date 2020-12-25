import React, { Component } from 'react';
import "./Search.css"

class Search extends Component {
    render() {
        return (
            <div id='search'>
                <input type="text" placeholder="search" />
                <button>go</button>
            </div>
        );
    }
}

export default Search;