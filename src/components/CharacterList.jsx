import React from 'react';
import { useHistory } from "react-router-dom";

import './CharacterList.css';

const CharacterList = ({ data }) => {

	const router = useHistory(); 
	
	return (
		data.map((character) =>
			<div className="character-card" key={character.id} onClick={() => router.push(`/character/${character.id}`)}>
				<img className="character-card__img" src={character.image} alt={character.name} />
				<div className="character-card__name">{character.name}</div>
			</div>
		)
	);
};

export default CharacterList;