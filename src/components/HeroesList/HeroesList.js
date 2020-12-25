import React, { Component } from 'react';
import Hero from "../Hero/Hero"
import "./HeroesList.css"

class HeroesList extends Component {
    renderHeroes = () => (
        <ul>
            {this.props.heroesData.map(heroesData => <Hero data={heroesData} />)}
        </ul>
    )

    render() {
        return (
            <>
                {this.renderHeroes()}
            </>
        );
    }
}

export default HeroesList;