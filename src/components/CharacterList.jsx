import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import CharacterCard from './CharacterCard';

import './CharacterList.css';
import TransitionElement from './UI/TransitionElement/TransitionElement';

const CharacterList = ({ data }) => {
	const router = useHistory();


	return (
		<TransitionElement>
			<div className="character__list">
				{data.map((character) =>
					<CharacterCard
						key={character.id}
						props={character}
						router={router}
					/>
				)}
			</div>
		</TransitionElement>
	);
	// const router = useHistory();
	// const [toggle, setToggle] = useState(false);

	// useEffect(() => {
	// 	setToggle(!toggle);
	// }, []);

	// return (
	// 	<CSSTransition
	// 		in={toggle}
	// 		timeout={500}
	// 		classNames="character__list"
	// 		unmountOnExit
	// 	>
	// 		<div className="character__list">
	// 			{data.map((character) =>
	// 				<CharacterCard
	// 					key={character.id}
	// 					props={character}
	// 					router={router}
	// 				/>
	// 			)}
	// 		</div>
	// 	</CSSTransition>
	// );
};

export default CharacterList;