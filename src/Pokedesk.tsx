import React, { Component } from 'react';
import Pokecard from "./Pokecard";
import "./Pokedesk.css";

interface PokedeskProps { // Added this interface for props
    isWinner: boolean,
    pokemon: Array<{
        id : number,
        name: string,
        type: string,
        exprience : number
    }>,
    exp : number
  }

class Pokedesk extends Component<PokedeskProps> {
    render() { 
        let title;
		if (this.props.isWinner) {
			title = <h1 className="Pokedex-winner">Winning Hand</h1>;
		} else {
			title = <h1 className="Pokedex-loser">Losing Hand</h1>;
		}
        return (  
            <div className="Pokedex">
				{title}
				<h4>Total Experience: {this.props.exp}</h4>
				<div className="Pokedex-cards">
					{this.props.pokemon.map((p) => (
						<Pokecard id={p.id} name={p.name} type={p.type} exp={p.exprience} />
					))}
				</div>
			</div>
        )
    }
}
 
export default Pokedesk;