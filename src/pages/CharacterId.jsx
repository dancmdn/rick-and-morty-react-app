import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import ApiService from '../components/API/ApiService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import '../styles/CharacterId.css';

const CharacterId = () => {
	const params = useParams();
	const [character, setCharacter] = useState({});
	const [fetchCharacterById, isLoading, error] = useFetching(async () => {
		const response = await ApiService.getCharacterById(params.id);
		setCharacter(response.data);
	})

	useEffect(() => {
		fetchCharacterById();
		console.log("WATCH HERE!", character);
	}, [])

	return (
		<div className="_container">
			{isLoading
				? <Loader />
				: <div className="character-id__container">
					
					<div className="character-id__img">
						<img src={character.image} alt={character.name} />
					</div>
			
					<div className="flex-table">
						<div className="flex-cell">
							<div>Name</div>
							<div>{character.name}</div>
						</div>
						<div className="flex-cell">
							<div>Status</div>
							<div>{character.status}</div>
						</div>
						<div className="flex-cell">
							<div>Species</div>
							<div>{character.species}</div>
						</div>
						<div className="flex-cell">
							<div>Type</div>
							<div>{character.type}</div>
						</div>
						<div className="flex-cell">
							<div>Gender</div>
							<div>{character.gender}</div>
						</div>
						{/* <div className="flex-cell">
							<div>Origin</div>
							<div>{character.origin.name}</div>
						</div> */}
						{/* <div className="flex-cell">
							<div>location</div>
							<div>{character.location.name}</div>
						</div> */}
					</div>
				</div>
			}
		</div>
	);
};

export default CharacterId;