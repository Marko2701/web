import React, { Component } from 'react';
import Header from "../../Header/Header"
import HeroesList from '../../HeroesList/HeroesList';
import Search from "../../Search/Search"


class Home extends Component {

    state = {
        items: []
    }

    componentDidMount = () => {
        const key = "5f9780494c12b97afea78af3674f32e9"
        fetch("http://gateway.marvel.com/v1/public/characters?apikey=" + key)
            .then(res => res.json())
            .then(
                result => {
                    console.log(result)
                    this.setState({
                        items: result.data.results
                    })
                }
            )
    }

    render() {
        return (
            <>
                <Header />
                <Search />
                <HeroesList heroesData={this.state.items} />
            </>
        );
    }
}

export default Home;