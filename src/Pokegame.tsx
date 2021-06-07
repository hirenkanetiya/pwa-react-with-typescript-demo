import React, { Component } from 'react';
import Pokedesk from './Pokedesk';

interface PokegameProps { // Added this interface for props
    pokemon: Array<{
        id : number,
        name: string,
        type: string,
        exprience : number
    }>
}

class Pokegame extends Component<PokegameProps> {
	static defaultProps = {
		pokemon : [
            {id:4 , name :'Hiren342', type : 'fire', exprience : 5},
            {id:7 , name :'Kuldeep', type : 'water', exprience : 1},
            {id:11 , name :'Rohit', type : 'bug', exprience : 5},
            {id:12 , name :'Vicky', type : 'flying', exprience : 3},
            {id:25 , name :'Santosh', type : 'normal', exprience : 11},
            {id:39, name :'Mitesh', type : 'electric', exprience : 17},
            {id:94, name: 'Rishil', type: 'poison', exprience: 9 },
            {id:133 , name :'Manjunath', type : 'xyz', exprience : 10 } 
        ]
	};
	render() {
		let hand1 = [];
		let hand2 = [ ...this.props.pokemon];
		while (hand1.length < hand2.length) {
			let randIdx = Math.floor(Math.random() * hand2.length);
			let randPokemon = hand2.splice(randIdx, 1)[0];
			hand1.push(randPokemon);
		}
		let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.exprience, 0);
		let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.exprience, 0);
		return (
			<div>
				<Pokedesk pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
				<Pokedesk pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
			</div>
		);
	}
}
export default Pokegame;
