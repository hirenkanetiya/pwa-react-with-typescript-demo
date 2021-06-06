import React, { Component } from 'react';
import "./Pokecard.css";
// const POKE_IMG_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const POKE_IMG_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
let padToThreeDigit = (number: number) => (number <= 999 ? `00${number}`.slice(-3) : number)

interface PokecardProps { // Added this interface for props
    id: number,
    name: string,
    type : string,
    exp : number
  }

class Pokecard extends Component<PokecardProps> {
    render() {
        let imgSrc = `${POKE_IMG_API}${padToThreeDigit(this.props.id)}.png`
        return (
             <div className="Pokecard">
				<h1 className="Pokecard-title">{this.props.name}</h1>
				<div className="Pokecard-image">
					<img src={imgSrc} alt={this.props.name} />
				</div>
				<div className="Pokecard-data">Type: {this.props.type}</div>
				<div className="Pokecard-data">EXP: {this.props.exp}</div>
			</div>
        )
    }
}

export default Pokecard;
