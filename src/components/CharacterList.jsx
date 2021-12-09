import React from 'react';
import { useHistory } from "react-router-dom";
import { useFetching } from '../hooks/useFetching';
import CharacterCard from './CharacterCard';

import './CharacterList.css';

const CharacterList = ({ data }) => {

	const router = useHistory();

	return (
		<div className="character__list">
			{data.map((character) =>
				<CharacterCard 
					props={character}
					router={router}
				/>
			)}
		</div>
	);
};

export default CharacterList;