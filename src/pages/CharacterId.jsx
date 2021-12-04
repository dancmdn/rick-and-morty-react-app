import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import ApiService from '../components/API/ApiService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';

const CharacterId = () => {
	const params = useParams();
	const [character, setCharacter] = useState({});
	const [fetchCharacterById, isLoading, error] = useFetching(async () => {
		const response = await ApiService.getCharacterById(params.id);
		setCharacter(response.data);
	})

	useEffect(() => {
		fetchCharacterById();
	}, [])

	return (
		<div className="_container">
			{isLoading 
				? <Loader />
				: <div>
					<img src={character.image} alt="" />
					<div>
						<p>{character.name}</p>
						<p>{character.species}</p>
						<p>{character.status}</p>
					</div>
				</div>
			}
		</div>
	);
};

export default CharacterId;