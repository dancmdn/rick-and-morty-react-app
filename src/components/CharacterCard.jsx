import React from 'react';
import { useState, useEffect } from 'react/cjs/react.development';
import ApiService from './API/ApiService';
import './CharacterCard.css';
import TransitionElement from './UI/TransitionElement/TransitionElement';

const CharacterCard = ({ props, router }) => {
	const [episode, setEpisode] = useState({});
	const [location, setLocation] = useState({});

	useEffect(() => {
		fetchEpisode();
		fetchLocation();
	}, [])

	async function fetchEpisode() {
		const response = await ApiService.getDataByFullAdress(props.episode[0]);
		setEpisode(response.data);
	}

	async function fetchLocation() {
		const response = await ApiService.getDataByFullAdress(props.location.url);
		setLocation(response.data);
	}

	function statusColor(status) {
		status = status.toLowerCase('')
		if (status === 'alive') {
			return '#55cb44';
		} else if (status === 'dead') {
			return '#d53c2e';
		} else {
			return '#9e9e9e';
		}
	}

	function firstLetterToUpperCase(str) {
		return str[0].toUpperCase() + str.slice(1);
	}

	return (
		<TransitionElement>
		<div className="character__card card-character">
			<div className="card-character__img">
				<img src={props.image} alt={props.name} />
			</div>
			<div className="card-character__info">
				<div>
					<div className="card-character__name" onClick={() => router.push(`/character/${props.id}`)}>
						{props.name}
					</div>
					<div className="card-character__status">
						<span className="circle">
							<i style={{ color: statusColor(props.status) }} className="fas fa-circle"></i>
						</span>
						{' '} {firstLetterToUpperCase(props.status)} - {props.species}
						{props.type ? ` - ${props.type}` : ''}
					</div>
				</div>
				<div>
					<div className="card-character__small">
						Last known location:
					</div>
					<div className="card-character__link">
						{location
							? <div onClick={() => router.push(`/location/${location.id}`)}>
								{props.location.name}
							</div>
							: '...'
						}
					</div>
				</div>
				<div>
					<div className="card-character__small">
						First seen in:
					</div>
					<div className="card-character__link">
						{episode
							? <div onClick={() => router.push(`/episode/${episode.id}`)}>{episode.name}</div>
							: '...'
						}
					</div>
				</div>
			</div>
		</div>
		</TransitionElement>
	);
};

export default CharacterCard;